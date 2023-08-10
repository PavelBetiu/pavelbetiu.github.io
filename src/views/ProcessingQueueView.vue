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
            <Table :data="tableInputData" isScrollable="true" />
        </div>
    </div>
    </template>
    
    <script>
    import axios from "axios";
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
                    }
                ],
                tableInputData: [],
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
                ProcessingQueueService.getJobsData().then((data) => {
                    this.tableInputData = convertToProcessingQueueTable(data, this.actions);
                }).catch((error) => {
                    console.log(error);
                });
            },
            performAction(id) {
                // Perform your desired action here, e.g., show a dialog, open a modal, etc.
                // You can use the "id" parameter to identify the row or data related to the clicked action.
                alert(`Performing action for id: ${id}`)
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
                        console.error('Error deleting job:', error);
                        // Handle the error if the API call fails.
                    });
            },
            
        }
    }
    </script>
    
    <style>
    
    </style>