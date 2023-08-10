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
            <Table :data="tableInputData" :isScrollable="true" :withCustomBody="true">
                <template #column="{ rowData, currentColumnData }">
                    <div v-if="currentColumnData.key == 'id'">
                        <a href="">
                            <span>{{ rowData[currentColumnData.key] }}</span>
                        </a>
                    </div>

                    <div v-else-if="currentColumnData.key == 'status'">
                        <span :class="getStatusClass(rowData[currentColumnData.key])">{{
                            getStatusName(rowData[currentColumnData.key])
                        }}</span>
                    </div>

                    <div v-else-if="currentColumnData.key == 'task_type'">
                        <span>{{ getTaskTypeName(rowData[currentColumnData.key]) }}</span>
                    </div>

                    <div v-else-if="currentColumnData.key == 'dataset'">
                        <span>{{
                            checkDatasetnullity(rowData[currentColumnData.key])
                        }}</span>
                    </div>

                    <div v-else-if="currentColumnData.key == 'time_submitted'">
                        <span>{{
                            convertTimestampToDateAndHour(rowData[currentColumnData.key])
                        }}</span>
                    </div>

                    <div v-else-if="currentColumnData.key == 'processing_time'">
                        <span>{{
                            convertSecondsToHoursMinutesSeconds(
                                rowData[currentColumnData.key]
                            )
                        }}</span>
                    </div>

                    <div v-else-if="currentColumnData.key == 'params'">
                        <span>{{ getParamsbyTaskType(rowData) }}</span>
                    </div>

                    <div v-else-if="currentColumnData.key == 'actions'">
                        <button v-if="rowData.status === 3" class="btn btn-primary btn-sm m-1 action-button" @click="
                            rowData.actions[0].action(rowData.id), downloadCSV(rowData.id)
                            ">
                            {{ rowData.task_type === 3 ? "Download CSV" : "Perform Action" }}
                        </button>
                        <button v-if="rowData.status === 3 || rowData.status === 4"
                            class="btn btn-outline-primary btn-sm m-1 action-button"
                            @click="rowData.actions[1].action(rowData.id)">
                            Remove Job
                        </button>
                    </div>
                    <div v-else>
                        {{ rowData[currentColumnData.key] }}
                    </div>
                </template>
            </Table>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Table from "@/components/widgets/Table.vue";
import { convertToProcessingQueueTable } from "@/components/experiments/cscl/cscl-converters";
import { ProcessingQueueService } from "@/services/processing-queue-service";
import {
    inject
} from "vue";
import {
    TOAST_SERVICE
} from "@/services/toast-service.interface";

export default {
    name: "ProcessingQueueView",
    data() {
        return {
            actions: [
                {
                    name: "Perform action",
                    styleClass: "btn-primary",
                    action: this.performAction,
                },
                {
                    name: "Remove job",
                    styleClass: "btn-outline-danger",
                    action: this.deleteJob,
                },
            ],
            tableInputData: [],
            toastService: inject(TOAST_SERVICE),
        };
    },
    components: {
        Table,
    },
    created() {
        this.getJobs();
    },
    methods: {
        getJobs() {
            ProcessingQueueService.getJobsData()
                .then((data) => {
                    this.tableInputData = convertToProcessingQueueTable(
                        data,
                        this.actions
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        performAction(id) {
            // Perform your desired action here, e.g., show a dialog, open a modal, etc.
            // You can use the "id" parameter to identify the row or data related to the clicked action.
            this.info('Perform action', `Performing action for id: ${id}`);
        },
        deleteJob(id) {
            // Perform the job deletion here based on the "id" parameter
            // Make a POST request to the API endpoint to delete the job
            ProcessingQueueService.deleteJob(id)
                .then((response) => {
                    console.log(response.data); // You can handle the response here if needed
                    if (response.data.success) {
                        this.getJobs();

                        // Optionally, you can perform any other actions after deleting the job,
                        // such as showing a success message or taking any other appropriate action.
                        console.log(`Job with id ${id} deleted successfully.`);
                    }
                })
                .catch((error) => {
                    console.error("Error deleting job:", error);
                    // Handle the error if the API call fails.
                });
        },
        async downloadCSV(jobId) {
            try {
                // Make a POST request to the Django endpoint that returns the CSV file
                const response = await axios.post(
                    `https://readerbench.com/api/v2/services/jobs/${jobId}/result`,
                    null,
                    {
                        responseType: "blob", // Set the response type to blob
                    }
                );

                // Default filename if the 'content-disposition' header is not available
                const defaultFileName = "download.csv";

                // Create a Blob object with the response data
                const blob = new Blob([response.data], {
                    type: "text/csv",
                });

                // Create a download link and trigger the download
                const url = URL.createObjectURL(blob);

                // Determine the filename
                let fileName = defaultFileName;
                if (response.headers["content-disposition"]) {
                    const contentDisposition = response.headers["content-disposition"];
                    const fileNameMatch = contentDisposition.match(
                        /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
                    );
                    if (fileNameMatch) {
                        fileName = decodeURIComponent(fileNameMatch[1]);
                    }
                }

                // Create a download link and trigger the download
                const a = document.createElement("a");
                a.href = url;
                a.download = fileName;
                a.click();

                // Release the URL object
                URL.revokeObjectURL(url);
            } catch (error) {
                console.error("Error downloading CSV:", error);
            }
        },
        getStatusClass(status) {
            if (status == 1) return "badge bg-warning";
            if (status == 2) return "badge bg-info";
            if (status == 3) return "badge bg-success";
            if (status == 4) return "badge bg-danger";
        },
        getStatusName(status) {
            if (status == 1) return "Pending";
            if (status == 2) return "In progress";
            if (status == 3) return "Finished";
            if (status == 4) return "Error";
        },
        getTaskTypeName(task_type) {
            if (task_type == 1) return "Pipeline";
            if (task_type == 2) return "CSCL";
            if (task_type == 3) return "Predict";
            if (task_type == 4) return "Indices";
            if (task_type == 5) return "Offensive";
            if (task_type == 6) return "Sentiment";
            if (task_type == 7) return "Diacritics";
            if (task_type == 8) return "Answer generation";
            if (task_type == 9) return "Test generation";
        },
        convertTimestampToDateAndHour(timestamp) {
            const milliseconds = timestamp * 1000; // Convert timestamp to milliseconds
            const dateObject = new Date(milliseconds);

            // Extract date and time components
            const year = dateObject.getFullYear();
            const month = String(dateObject.getMonth() + 1).padStart(2, "0");
            const day = String(dateObject.getDate()).padStart(2, "0");
            const hours = String(dateObject.getHours()).padStart(2, "0");
            const minutes = String(dateObject.getMinutes()).padStart(2, "0");
            const seconds = String(dateObject.getSeconds()).padStart(2, "0");

            const formattedDate = `${year}-${month}-${day}`;
            const formattedTime = `${hours}:${minutes}:${seconds}`;

            return `${formattedDate} ${formattedTime}`;
        },
        convertSecondsToHoursMinutesSeconds(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const seconds_ = Math.floor((seconds % 3600) % 60);

            return `${hours}h ${minutes}m ${seconds_}s`;
        },
        checkDatasetnullity(dataset) {
            if (dataset == null) return "-";
            else return dataset.name;
        },
        getParamsbyTaskType(data) {
            if (data.dataset != null) return "-";
            else {
                if (data.task_type == 3) return "Model: " + data.params.model;
            }
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
    },
};
</script>

<style scoped>
.action-button {
    font-size: 0.7rem;
    padding: 0.5rem;
    width: 107%;
}
</style>
