<template>
<div class="container mt-10">
    <div class="row justify-content-center">
        <div class="col-lg-8 text-center mx-auto my-auto">
            <h1>Processing Queue</h1>
        </div>
    </div>
</div>
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
        ProcessingQueueService.getJobsData().then((data) => {
            this.tableContent = data;
        });
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
