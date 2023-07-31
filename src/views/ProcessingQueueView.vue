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
        <Table :data="tableData" isScrollable="true" :withCustomBody="true">
            <template #column="{rowData, currentColumnData}">
                <span v-if="currentColumnData.key == 'status'" :class="getStatusClass(rowData.status)">
                    {{ getStatusName(rowData.status) }}
                </span>
                <span v-else >
                    {{ rowData[currentColumnData.key] }}
                </span>
            </template>
        </Table>
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
    methods: {
        getStatusClass(status) {
            if (status == 1) return 'badge bg-warning';
            if (status == 2) return 'badge bg-info';
            if (status == 3) return 'badge bg-success';
            if (status == 4) return 'badge bg-danger';
        },
        getStatusName(status) {
            if (status == 1) return 'Pending';
            if (status == 2) return 'In progress';
            if (status == 3) return 'Finished';
            if (status == 4) return 'Error';
        }
    }
}
</script>

<style>

</style>
