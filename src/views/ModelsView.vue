<template>
<div :class="$style['body']">

    <div class="container px-2 py-8">
        <div class="card shadow-lg p-2">
            <Table :data="tableData" :isScrollable="false" />
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

export default {
    name: "ModelsView",
    data() {
        return {
            datasetService: null,
            datasetsInfo: [],

            tableContent: [],
            actions: [{
                    name: "Predict",
                    styleClass: "btn-primary",
                    action: (id) => {
                        alert("Predict action for id: " + id);
                    },
                },
                // {
                //     name: "View",
                //     styleClass: "btn-info",
                //     action: (id) => {
                //         alert("View action for id: " + id);
                //     },
                // },
                {
                    name: "Delete",
                    styleClass: "btn-outline-danger",
                    action: (id) => {
                        alert("Delete action for id: " + id);
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
            console.log(datasets);

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
    methods: {},
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
