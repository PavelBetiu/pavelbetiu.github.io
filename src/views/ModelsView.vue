<template>
<div :class="$style['body']">
    <div class="container px-2 py-8">
        <label v-if="filteredByDataset || filteredByJobId" class="badge rounded-pill bg-primary">{{ filteredBy() }}</label>
        <div class="card shadow-lg p-2">
            <Table v-if="tableContent !== null" :data="tableData" :isScrollable="false" :withCustomBody="true">
                <template #column="{rowData, currentColumnData}">
                    <div v-if="currentColumnData.key == 'model_action'" class="d-flex flex-column justify-content-between align-items-center">
                        <!-- For each row, we need to render a button for each action -->
                        <div class="d-flex h-100 w-100 flex-row justify-content-between align-items-center">
                            <div v-for="action of rowData.model_action" :key="action.name" >
                                <button id="model-action-button" :style="action.name ? 'width: 120%' : ''" :class="'btn btn-sm '+ action.styleClass" @click="action.action(rowData.model_id)"> {{ action.name }} </button>
                            </div>
                        </div>
                        <button v-if="rowData.model_task_type == 'XGBOOST'" id="model-action-button" style="width: 100%" class="btn btn-sm btn-light" @click="downloadFeatures(rowData.model_id)">Download features</button>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_params'">
                        <div id="model-params-list" class="overflow-auto">
                            <ul v-if="rowData.model_task_type == 'XGBOOST'" class="list-group">
                                <li v-for="[idx, params] of rowData.model_params.entries()" :key="idx" class="list-group-item d-flex flex-column justify-content-center align-items-center">
                                    <div v-for="param of Object.keys(params)" :key="param" class="d-flex w-100 justify-content-between align-items-center">
                                        <h6 id="param-key">{{ param }}</h6>
                                        <span id="param-value" class="badge rounded-pill bg-secondary">{{ params[param] }}</span>
                                    </div>
                                </li>
                            </ul>
                            <ul v-else-if="rowData.model_task_type == 'TRANSFORMER'" class="list-group">
                                <li v-for="param of Object.keys(rowData.model_params)" :key="param" class="list-group-item d-flex justify-content-between align-items-center">
                                    <h6 id="param-key">{{ param }}</h6>
                                    <span v-if="param === 'features' && JSON.parse(rowData.model_params[param].use === false)" id="param-value" class="badge rounded-pill bg-secondary">NO</span>
                                    <span v-else-if="param === 'features' && JSON.parse(rowData.model_params[param].use === true)" id="param-value" class="badge rounded-pill bg-secondary">{{Object.keys(rowData.model_params[param])[1]}}: {{ rowData.model_params[param][Object.keys(rowData.model_params[param])[1]] }}</span>
                                    <span v-else id="param-value" class="badge rounded-pill bg-secondary">{{ rowData.model_params[param] }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_metrics'">
                        <div id="model-metrics-list" class="overflow-auto">
                            <ul v-if="rowData.model_task_type == 'XGBOOST'" class="list-group">
                                <li v-for="[idx, metrics] of rowData.model_metrics.entries()" :key="idx" class="list-group-item d-flex flex-column justify-content-center align-items-center">
                                    <div v-for="metric of Object.keys(metrics)" :key="metric" class="d-flex w-100 justify-content-between align-items-center">
                                        <h6 id="metric-key">{{ metric }}</h6>
                                        <span id="metric-value" class="badge rounded-pill bg-secondary">{{ metrics[metric] }}</span>
                                    </div>
                                </li>
                            </ul>
                            <ul v-else-if="rowData.model_task_type == 'TRANSFORMER'" class="list-group">
                                <li v-for="metric of Object.keys(rowData.model_metrics)" :key="metric" class="list-group-item d-flex justify-content-between align-items-center">
                                    <h6 id="metric-key">{{ metric }}</h6>
                                    <span id="metric-value" class="badge rounded-pill bg-secondary">{{ rowData.model_metrics[metric] }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_id'">
                        <h6 style="font-size: 0.9rem">{{ rowData.model_id }}</h6>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_task_type'">
                        <h6 style="font-size: 0.9rem">{{ rowData.model_task_type }}</h6>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_dataset'">
                        <h6 style="font-size: 0.9rem">{{ rowData.model_dataset }}</h6>
                    </div>

                </template>
            </Table>

            <div v-else class="d-flex justify-content-center align-items-center">
                <p-progress-spinner/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Table from "@/components/widgets/Table.vue";
import {
    inject
} from 'vue';
import {
    DATASETS_SERVICE
} from "../services/datasets-service.interface";

import {
    ProjectsAPI
} from "@/services/projects-api"

import {
    convertToModelsTable
} from "@/utils/converters-utils";
import {
    ModelService
} from "@/services/models-service";

import {
  TOAST_SERVICE
} from "@/services/toast-service.interface"

export default {
    name: "ModelsView",
    data() {
        return {
            toastService: inject(TOAST_SERVICE),
            datasetService: null,
            modelService: null,
            datasetsInfo: [],

            tableContent: null,
            actions: [{
                    name: "Predict",
                    styleClass: "btn-primary",
                    action: (id) => {
                        let model = this.tableContent.filter((model) => {
                            return model['id'] === id;
                        })[0]

                        let modelStr = JSON.stringify(model)
                        let modelB64 = btoa(modelStr)

                        this.$router.push({
                            path: `/models/${id}/prediction`,
                            query: {
                                data: modelB64
                            }
                        })
                    },
                },
                {
                    styleClass: "btn-outline-danger btn-circle pi pi-trash",
                    action: (id) => {
                        this.info("NOT IMPLEMENTED", `Delete action for id: ${id}`)
                    },
                }
            ],
        };
    },
    components: {
        Table,
    },
    created() {
        this.datasetService = inject(DATASETS_SERVICE);
        this.modelService = new ModelService()

        this.initialize();
    },
    computed: {
        tableData: {
            get() {
                return convertToModelsTable(this.tableContent, this.actions);
            },
        },
        filteredByDataset: {
            get() {
                if (this.$route.query['filterBy'] && this.$route.query['datasetId']) {
                    if (this.$route.query['filterBy'] === 'dataset_id'){
                        return true
                    }
                }

                return false
            }
        },
        filteredByJobId: {
            get() {
                if (this.$route.query['filterBy'] && this.$route.query['jobId']) {
                    if (this.$route.query['filterBy'] === 'job_id'){
                        return true
                    }
                }

                return false
            }
        },
    },
    methods: {
        initialize() {
            let datasetId = null
            if (this.filteredByDataset) {
                datasetId = Number(this.$route.query['datasetId'])
            }

            let jobId = null
            if (this.filteredByJobId) {
                jobId = Number(this.$route.query['jobId'])
            }

            this.datasetService.getDatasets().then((response) => {
                let datasets = response['datasets'];

                datasets = datasets.map((dataset) => {
                    return {
                        id: dataset['id'],
                        name: dataset['name']
                    }
                });

                this.datasetsInfo = datasets;

                this.modelService.getAllModels().then((response) => {
                    let models = response.data

                    if (this.filteredByDataset == true) {
                        const datasetName = this.datasetsInfo.filter((dataset) => {
                            return dataset['id'] === datasetId
                        })[0]['name']

                        models = models.filter((model) => model['dataset'] === datasetName)
                    }

                    if (this.filteredByJobId == true) {
                        models = models.filter((model) => model['job_id'] === jobId)
                    }

                    this.tableContent = JSON.parse(JSON.stringify(models))

                    for (let i = 0; i < this.tableContent.length; i++) {
                        this.tableContent[i]['metrics'] = JSON.parse(this.tableContent[i]['metrics'])
                        this.tableContent[i]['params'] = JSON.parse(this.tableContent[i]['params'])
                    }
                }).catch((error) => {
                    this.error("Error")
                })
            }).catch((error) => this.error("Error", error));
        },
        downloadFeatures(id) {
            this.modelService.downloadFeatures(id).then((response) => {
                console.log(response)
                let blob = new Blob([response.data], {
                    type: "application/vnd.ms-excel"
                });
                this.saveAs(blob, "Feature importance.xlsx");
            });
        },
        saveAs(blob, filename) {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        },
        filteredBy() {
            if (this.filteredByDataset) {
                return `dataset_id = ${this.$route.query['datasetId']}`
            }

            if (this.filteredByJobId) {
                return `job_id = ${this.$route.query['jobId']}`
            }

            return null
        },
        success(header, footer) {
            this.toastService && this.toastService.success(footer, header)
        },
        info(header, footer) {
            this.toastService && this.toastService.info(footer, header)
        },
        error(header, footer) {
            this.toastService && this.toastService.error(footer, header, -1)
        }
    },
    watch: {
        '$route.query': function(val, oldVal) {
            // force reload of page
            this.initialize()
        }
    }
}
</script>

<style module>
.body {
    background-color: #f8f9fa;
}

.container {
    border-radius: 50%;
}
</style>

<style scoped>
#model-metrics-list {
	max-width: 300px;
	max-height: 95px;
}

#model-params-list {
	max-width: 300px;
	max-height: 95px;
}

#model-params-list h6 {
    font-size: 0.8rem;
}

#model-params-list span {
    font-size: 0.65rem;
}

#model-metrics-list h6 {
    font-size: 0.8rem;
}

#model-metrics-list span {
    font-size: 0.65rem;
}

#param-value {
    width: 50%;
    overflow-x: hidden;
}

#metric-value {
    width: 50%;
    overflow-x: hidden;
}

#param-key {
    width: 50%;
    overflow-x: hidden;
    padding-top: 2%;
}

#metric-key {
    width: 50%;
    overflow-x: hidden;
    padding-top: 2%;
}

#model-action-button {
    font-size: 0.7rem;
    padding: 0.4rem;
}

</style>
