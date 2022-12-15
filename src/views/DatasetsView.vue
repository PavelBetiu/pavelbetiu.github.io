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
                                                <input type="text" class="form-control" v-model="datasetName">
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
                                                <select class="form-control" name="task-button" id="task-button" v-model="taskType">
                                                    <option value="sa" selected>SA</option>
                                                    <option value="sum" selected>SUM</option>
                                                    <option value="tc">Text Classification</option>
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
                                                <select class="form-control" name="language-button" id="language-button" v-model="language">
                                                    <option v-for="{name, value} of tasks[taskType]['languages']" :key="value" :value="value">{{name}}</option>
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
import Table from '../components/widgets/Table.vue'
import Droparea from '../components/Droparea.vue'
import Checkbox from 'primevue/checkbox'

export default {
    name: "DatasetsView",
    components: {
        Table,
        Droparea,
        Checkbox,
    },
    data() {
        return {
            datasetName: "Insert dataset name here",
            taskType: "sa",
            language: "fr",
            zipFile: null,
            csvFile: null,
            checked: false,

            // TODO: get this from the backend
            tasks: {
                sa: {
                    input: ["file", "text/xml"],
                    languages: [{
                            name: "French",
                            value: "fr"
                        },
                        {
                            name: "English",
                            value: "en"
                        },
                        {
                            name: "Romanian",
                            value: "ro"
                        }
                    ]
                },
                tc: {
                    input: ["folder", null],
                    languages: [{
                            name: "French",
                            value: "fr"
                        },
                        {
                            name: "English",
                            value: "en"
                        }
                    ]
                },
                sum: {
                    input: ["file", "text/xml"],
                    languages: [{
                            name: "French",
                            value: "fr"
                        },
                        {
                            name: "English",
                            value: "en"
                        },
                        {
                            name: "Romanian",
                            value: "ro"
                        }
                    ]
                },
            },
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
    methods: {
        selectZIP(event) {
            console.log("selectZIP");
            this.zipFile = [...event.files][0];
        },
        clearZIP() {
            console.log("clearZIP");
            this.zipFile = null;
        },
        removeZIP(event) {
            console.log("removeZIP");
            this.zipFile = null;
        },
        selectCSV(event) {
            console.log("selectCSV");
            this.csvFile = [...event.files][0];
        },
        clearCSV() {
            console.log("clearCSV");
            this.csvFile = null;
        },
        removeCSV(event) {
            console.log("removeCSV");
            this.csvFile = null;
        },
        async importDataset() {
            const data = {
                lang: this.language,
                name: this.datasetName,
                task: this.taskType,
                zipfile: this.zipFile,
                csvfile: this.csvFile,
            };

            // axios.post('/services/datasets/add', data)
            //     .then(response => {
            //         console.log(response);
            //     })
            //     .catch(error => {
            //         console.error(error);
                    
            //     });
            console.log(data);
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
