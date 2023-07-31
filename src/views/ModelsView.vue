<template>
<div :class="$style['body']">
    <div class="container px-2 py-8">
        <div class="card shadow-lg p-2">
            <Table :data="tableData" :isScrollable="false" :withCustomBody="true">
                <template #column="{rowData, currentColumnData}">
                    <div v-if="currentColumnData.key == 'model_action'">
                        <!-- For each row, we need to render a button for each action -->
                        <div v-for="action of rowData.model_action" :key="action.name" class="d-flex w-100 flex-column justify-content-between align-items-center">
                            <button id="model-action-button" :class="'btn btn-sm '+ action.styleClass" @click="action.action(rowData.model_id)"> {{ action.name }} </button>
                        </div>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_params'">
                        <div id="model-params-list" class="overflow-auto">
                            <ul v-if="rowData.model_task_type['id'] == 2" class="list-group">
                                <li v-for="[idx, params] of rowData.model_params.entries()" :key="idx" class="list-group-item d-flex flex-column justify-content-center align-items-center">
                                    <div v-for="param of Object.keys(params)" :key="param" class="d-flex w-100 justify-content-between align-items-center">
                                        <h6 id="param-key">{{ param }}</h6>
                                        <span id="param-value" class="badge rounded-pill bg-secondary">{{ params[param] }}</span>
                                    </div>
                                </li>
                            </ul>
                            <ul v-else-if="rowData.model_task_type['id'] == 1" class="list-group">
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
                            <ul v-if="rowData.model_task_type['id'] == 2" class="list-group">
                                <li v-for="[idx, metrics] of rowData.model_metrics.entries()" :key="idx" class="list-group-item d-flex flex-column justify-content-center align-items-center">
                                    <div v-for="metric of Object.keys(metrics)" :key="metric" class="d-flex w-100 justify-content-between align-items-center">
                                        <h6 id="metric-key">{{ metric }}</h6>
                                        <span id="metric-value" class="badge rounded-pill bg-secondary">{{ metrics[metric] }}</span>
                                    </div>
                                </li>
                            </ul>
                            <ul v-else-if="rowData.model_task_type['id'] == 1" class="list-group">
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
                        <h6 style="font-size: 0.9rem">{{ rowData.model_task_type['name'] }}</h6>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_dataset'">
                        <h6 style="font-size: 0.9rem">{{ rowData.model_dataset }}</h6>
                    </div>

                    <div v-else-if="currentColumnData.key == 'model_job_id'">
                        <h6 style="font-size: 0.9rem">{{ rowData.model_job_id }}</h6>
                    </div>

                </template>
            </Table>
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
            datasetsInfo: [],

            tableContent: [],
            actions: [{
                    name: "Predict",
                    styleClass: "btn-primary",
                    action: (id) => {
                        this.info("NOT IMPLEMENTED", `Predict action for id: ${id}`)
                    },
                },
                {
                    name: "Delete",
                    styleClass: "btn-outline-danger",
                    action: (id) => {
                        this.info("NOT IMPLEMENTED", `Delete action for id: ${id}`)
                    },
                },
            ],
            task_types: [{
                    id: 1,
                    name: "Transformer"
                },
                {
                    id: 2,
                    name: "XGBoost"
                }
            ],
        };
    },
    components: {
        Table,
    },
    created() {
        this.datasetService = inject(DATASETS_SERVICE);

        this.datasetService.getDatasets().then((response) => {
            let datasets = response['datasets'];

            datasets = datasets.map((dataset) => {
                return {
                    id: dataset['id'],
                    name: dataset['name']
                }
            });

            this.datasetsInfo = datasets;
            this.tableContent = JSON.parse(JSON.stringify(ModelService.getModels()));

            for (let i = 0; i < this.tableContent.length; i++) {
                let task_id = this.tableContent[i]['type_id']
                this.tableContent[i]['metrics'] = JSON.parse(this.tableContent[i]['metrics'])
                this.tableContent[i]['params'] = JSON.parse(this.tableContent[i]['params'])
                this.tableContent[i]['dataset_id'] = this.datasetsInfo.find((dataset) => dataset['id'] == this.tableContent[i]['dataset_id'])['name']
            }

        }).catch((error) => alert("Error: " + error));

    },
    computed: {
        tableData: {
            get() {
                return convertToModelsTable(this.tableContent, this.actions, this.task_types);
            },
        },
    },
    methods: {
        success(header, footer) {
            this.toastService && this.toastService.success(footer, header)
        },
        info(header, footer) {
            this.toastService && this.toastService.info(footer, header)
        },
        error(header, footer) {
            this.toastService && this.toastService.error(footer, header)
        }
    },
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
    width: 70%;
}

#model-action-button {
    font-size: 0.7rem;
    padding: 0.4rem;
    width: 70%;
}
</style>
