<template>
<div class="container p-9">
    <div class="card shadow-lg">
        <Table :data="tableData" isScrollable="true" />
    </div>
</div>
</template>

<script>
import Table from "@/components/widgets/Table.vue";
import {
    convertToProcessingQueueTable
} from "@/components/experiments/cscl/cscl-converters";
import {
    ProcessingQueueService
} from "@/services/processing-queue-service";

export default {
    name: "ProcessingQueueView",
    data() {
        return {
            tableContent: [],
        };
    },
    components: {
        Table,
    },
    created() {
        this.tableContent = ProcessingQueueService.getProcessingQueueData();
    },
    computed: {
        tableData: {
            get() {
                return convertToProcessingQueueTable(this.tableContent);
            },
        },
    },
}
</script>

<style>

</style>
