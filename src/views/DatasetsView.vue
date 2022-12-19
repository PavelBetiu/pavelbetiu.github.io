<template>
<div :class="$style['body']">
    <div class="container">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 d-flex justify-content-center flex-column">
                <div class="card d-flex blur justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                    <div class="text-center">
                        <p class="h4 text-gradient text-primary">Upload a dataset</p>
                    </div>

                    <form autocomplete="off" @submit.prevent="">
                        <div class="card-body pb-2">
                            <div class="row d-flex justify-content-center">
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col-2">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-10">
                                            <div class="input-group mb-4">
                                                <input type="text" class="form-control" v-model="datasetName" placeholder="Insert Dataset Name Here">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center">
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col-2">
                                            <label>Task type</label>
                                        </div>
                                        <div class="col-10">
                                            <div class="input-group mb-4">
                                                <select class="form-control" name="language-button" id="language-button" v-model="task">
                                                    <option v-for="t of tasks" :key="t" :value="t">{{t}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center">
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col-2">
                                            <label>Language</label>
                                        </div>
                                        <div class="col-10">
                                            <div class="input-group mb-4">
                                                <select class="form-control" name="language-button" id="language-button" v-model="langID">
                                                    <option v-for="{id, label} of languages" :key="id" :value="id">{{label}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-4">
                                            <label>CSV only?</label>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group mb-4">
                                                <Checkbox v-model="checked" :binary="true" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row" :class="$style['upload_files_area']">
                                <div v-if="!checked" class="col-6">
                                    <div class="row">
                                        <Droparea @droparea:select="selectZIP" @droparea:clear="clearZIP" @droparea:remove="removeZIP" chooseMessage="Choose ZIP file" accept=".zip" infoMessage="Please upload here your dataset as zip file." />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="row">
                                        <Droparea @droparea:select="selectCSV" @droparea:clear="clearCSV" @droparea:remove="removeCSV" chooseMessage="Choose CSV file" accept=".csv" infoMessage="Please upload here your CSV file." />
                                    </div>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center">
                                <div class="col-md-12 text-center">
                                    <button type="button" class="btn bg-gradient-info mt-3 mb-0" @click="importDataset">Import</button>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
            <div class="col-lg-2">

            </div>
        </div>
        <div class="row">
            <p class="h4 text-gradient text-primary">My datasets</p>
            <div class="col-lg-12 d-flex justify-content-center flex-column card p-4">
                <!-- TODO: Add table with datasets -->
                <Table :data="tableData" :isScrollable="false"></Table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    inject
} from 'vue';
import Table from '../components/widgets/Table.vue'
import Droparea from '../components/Droparea.vue'
import Checkbox from 'primevue/checkbox'

import {
    DATASETS_SERVICE
} from "../services/datasets-service.interface";

export default {
    name: "DatasetsView",
    components: {
        Table,
        Droparea,
        Checkbox,
    },
    data() {
        return {
            datasetName: null,
            task: "Text Classification",
            langID: 2,
            zipFile: null,
            csvFile: null,
            checked: false,
            datasetService: null,

            // TODO: get this from the backend
            tasks: ["Text Classification", "Summarization", "Sentiment Analysis"],

            // TODO: get this from the backend
            languages: [{
                    "id": 1,
                    "label": "EN"
                },
                {
                    "id": 2,
                    "label": "FR"
                },
                {
                    "id": 3,
                    "label": "RO"
                },
                {
                    "id": 4,
                    "label": "ES"
                },
                {
                    "id": 5,
                    "label": "DE"
                },
                {
                    "id": 6,
                    "label": "RU"
                },
                {
                    "id": 7,
                    "label": "IT"
                },
                {
                    "id": 8,
                    "label": "NL"
                }
            ],

            // TODO: get this from the backend
            tableData: {
                columns: [{
                        displayName: 'Name',
                        key: 'name',
                    },
                    {
                        displayName: 'Task type',
                        key: 'taskType',
                    },
                    {
                        displayName: 'Language',
                        key: 'language',
                    },
                    {
                        displayName: 'Number of tasks',
                        key: 'numberOfTasks',
                    },
                    {
                        displayName: 'Number of entries',
                        key: 'numberOfEntries',
                    },
                    {
                        displayName: 'Actions',
                        key: 'actions',
                    },
                ],
                rows: [{
                        name: 'Dataset 1',
                        taskType: 'CSCL',
                        language: 'French',
                        numberOfTasks: 100,
                        numberOfEntries: 1000,
                        actions: [{
                                name: 'Edit',
                                icon: 'fas fa-edit',
                                action: () => {
                                    console.log('Edit')
                                }
                            },
                            {
                                name: 'Delete',
                                icon: 'fas fa-trash',
                                action: () => {
                                    console.log('Delete')
                                }
                            },
                        ]
                    },
                    {
                        name: 'Dataset 2',
                        taskType: 'Text Classification',
                        language: 'English',
                        numberOfTasks: 100,
                        numberOfEntries: 1000,
                        actions: [{
                                name: 'Edit',
                                icon: 'fas fa-edit',
                                action: () => {
                                    console.log('Edit')
                                }
                            },
                            {
                                name: 'Delete',
                                icon: 'fas fa-trash',
                                action: () => {
                                    console.log('Delete')
                                }
                            },
                        ]
                    }
                ]
            }
        }

    },
    created() {
        this.datasetService = inject(DATASETS_SERVICE);
    },
    methods: {
        selectZIP(event) {
            this.zipFile = [...event.files][0];
        },
        clearZIP() {
            this.zipFile = null;
        },
        removeZIP(event) {
            this.zipFile = null;
        },
        selectCSV(event) {
            this.csvFile = [...event.files][0];
        },
        clearCSV() {
            this.csvFile = null;
        },
        removeCSV(event) {
            this.csvFile = null;
        },
        async importDataset() {
            if (!this.langID || !this.datasetName || !this.task || !this.zipFile || !this.csvFile) {
                alert("Missing parameters");
                return;
            }

            const data = {
                lang: this.langID,
                name: this.datasetName,
                task: this.task,
                zipfile: this.zipFile,
                csvfile: this.csvFile,
            };

            console.log(data);

            await this.datasetService.importDataset(data)
                .then((response) => {
                    // TODO: change with toast
                    alert("Server response: " + response);
                })
                .catch((error) => {
                    // TODO: change with toast
                    alert("Error: " + error);
                    console.log(error);
                });
        }
    }
}
</script>

<style module>
.body {
    background-color: #f8f9fa;
}

.upload_files_area {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-y: auto;
    max-height: 70%;
}
</style>
