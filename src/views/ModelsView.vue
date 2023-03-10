<template>
<div :class="$style['body']">
    <div class="container px-2 py-8">
        <div class="card shadow-lg p-2">
            <Table :data="tableData" isScrollable="true" />
        </div>
    </div>
</div>
</template>

<script>
import Table from "@/components/widgets/Table.vue";
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
            tableContent: [],
            actions: [{
                    name: "Predict",
                    styleClass: "btn-primary",
                    action: (id) => {
                        alert("Edit action for id: " + id);
                    },
                },
                {
                    name: "View",
                    styleClass: "btn-info",
                    action: (id) => {
                        alert("Edit action for id: " + id);
                    },
                },
                {
                    name: "Delete",
                    styleClass: "btn-outline-danger",
                    action: (id) => {
                        alert("Delete action for id: " + id);
                    },
                },
            ],
        };
    },
    components: {
        Table,
    },
    created() {
        this.tableContent = ModelService.getModels();
    },
    computed: {
        tableData: {
            get() {
                return convertToModelsTable(this.tableContent, this.actions);
            },
        },
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
