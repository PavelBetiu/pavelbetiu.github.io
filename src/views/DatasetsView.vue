<template>
<div :class="$style['body']" :key="refreshPage">
    <div class="container">
        <div id="dataset-import-form" class="row">
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
                                        <!-- TODO: Use an AutoComplete textbox instead -->
                                        <div class="col-10">
                                            <div class="input-group mb-4" id="task_autocom" >
                                                <AutoComplete v-model="task" :suggestions="filteredTasks" @complete="searchTask($event)"/>
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
                                                    <option class="language-select" v-for="{id, label} of languages" :key="id" :value="id">{{label}}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-4">
                                    <div class="row">
                                        <div class="col-5">
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
                <Table :data="tableData" :isScrollable="false" :withCustomBody="true">
                    <template #column="{rowData, currentColumnData}">
                        <!-- For each row, we need to render a button for each action -->
                        <div v-if="currentColumnData.key == 'dataset_actions'">
                            <span v-for="action of rowData[currentColumnData.key]" :key="action.name">
                                <button :class="'btn '+ action.class + ' m-1'" @click="action.action(rowData.id)"> {{ action.name }} </button>
                            </span>
                        </div>
                        <div v-else>
                            {{ rowData[currentColumnData.key] }}
                        </div>
                    </template>
                </Table>
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
import AutoComplete from 'primevue/autocomplete'

import {
    DATASETS_SERVICE
} from "../services/datasets-service.interface";
import {
    convertDatasetsToTableInput
} from "@/utils/data-converters-utils"

import {
  TOAST_SERVICE
} from "@/services/toast-service.interface"

export default {
    name: "DatasetsView",
    components: {
        Table,
        Droparea,
        Checkbox,
        AutoComplete
    },
    data() {
        return {
            datasetService: null,

            datasetName: null,
            task: null,
            langID: 2,
            zipFile: null,
            csvFile: null,
            checked: false,
            
            tasks: ["Text Classification", "Summarization", "Sentiment Analysis"],
            languages: [],
            tableData: [],

            filteredTasks: [],
            refreshPage: 0,

            toastService: inject(TOAST_SERVICE)
        }

    },
    created() {
        this.datasetService = inject(DATASETS_SERVICE);

        // Getting languages from the backend
        this.datasetService.getLanguages().then((response) => {
            this.languages = response['languages'];

            // Getting datasets from the backend
            this.datasetService.getDatasets().then((response) => {
                let datasetActions = [{
                    name: 'Process',
                    class: 'bg-gradient-primary',
                    action: this.processDataset
                }, {
                    name: 'Delete',
                    class: 'btn-outline-danger',
                    action: this.deleteDataset
                }, ]

                this.tableData = convertDatasetsToTableInput(response['datasets'], this.languages, datasetActions);
            }).catch((error) => this.error("Error", error));

        }).catch((error) => this.error("Error", error));

        
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
            if (!this.checked && (!this.langID || !this.datasetName || !this.task || !this.zipFile || !this.csvFile)) {
                this.info("Missing parameters", "Please fill all the fields");
                return;
            } else if (this.checked && (!this.langID || !this.datasetName || !this.task || !this.csvFile)) {
                this.info("Missing parameters", "Please fill all the fields");
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
                    this.success("Success", "Dataset imported successfully");
                    this.clear();
                    console.log(response)
                })
                .catch((error) => {
                    this.error("Error", error);
                });
        },
        async processDataset(id) {
            const data = {
                dataset_id: id
            }

            await this.datasetService.processDataset(data)
                .then((response) => {
                    this.success("Success", "Dataset processing started");
                    console.log(response)
                })
                .catch((error) => {
                    this.error("Error", error);
                });
        },
        async deleteDataset(id) {
            // TODO: implement using the dataset service
            this.success("Dataset deleted", `Dataset with id ${id} has been deleted`);
        },
        searchTask(event) {
            if (event.query.trim().length == 0) {
                this.filteredTasks = [...this.tasks];
            }
            else {
                this.filteredTasks = this.tasks.filter((task) => {
                    return task.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
        },
        clear() {
            this.refreshPage = this.refreshPage + 1 % 2;

            this.datasetName = null;
            this.task = null;
            this.langID = 2;
            this.zipFile = null;
            this.csvFile = null;
            this.checked = false;

        },
        success(header, footer) {
            this.toastService && this.toastService.success(footer, header)
        },
        info(header, footer) {
            this.toastService && this.toastService.info(footer, header)
        },
        error(header, footer) {
            this.toastService && this.toastService.error(footer, header)
        }
    }
}
</script>

<!-- Added "module" attribute to limit CSS to this component only -->
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

<style>
#task_autocom .p-component {
    border-radius: 0.5rem;
    width: 100%;
}

#task_autocom input:hover {
    border: 1px solid #d2d6da;
}

#task_autocom input.p-inputtext {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
}

#task_autocom input.p-inputtext:focus {
  color: #495057;
  background-color: #fff;
  border-color: #e293d3;
  outline: 0;
  box-shadow: 0 0 0 2px #e9aede;
}

.p-autocomplete-panel {
    font-size: 0.875rem;
    border-radius: 0.5rem;
}

.language-select {
    background: #fff;
}

#dataset-import-form input, select, p, span, label {
    font-family: sans-serif;
}

</style>
