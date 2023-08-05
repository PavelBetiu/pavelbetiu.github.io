<template>
    <div :class="$style['body']">
        <div class="container">
            <div class="row">
                <div class="col-lg-1"></div>
                <div class="col-lg-10 d-flex justify-content-center flex-column">
                    <div class="card d-flex blur justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                        <div class="text-center">
                            <p class="h4 text-gradient text-primary">Dataset visualization</p>
                        </div>

                        <div v-if="datasetInfo === null" class="d-flex justify-content-center align-items-center ds-visual">
                            <p-progress-spinner/>
                        </div>

                        <div v-else class="ds-visual">
                            <!-- List all datasetInfo properties -->
                            <div class="row py-4 my-4">
                                <div class="col-lg-2">
                                    <p class="h6 text-gradient text-primary">Name</p>
                                    <p class="h6">{{ datasetInfo.name }}</p>
                                </div>
                                <div class="col-lg-2">
                                    <p class="h6 text-gradient text-primary">Language</p>
                                    <p class="h6">{{ getLanguageName(datasetInfo.language) }}</p>
                                </div>
                                <div class="col-lg-2">
                                    <p class="h6 text-gradient text-primary">No of tasks</p>
                                    <p class="h6">{{ datasetInfo.number_of_tasks }}</p>
                                </div>
                                <div class="col-lg-2">
                                    <p class="h6 text-gradient text-primary">No of entries</p>
                                    <p class="h6">{{ datasetInfo.number_of_entries }}</p>
                                </div>
                                <div class="col-lg-2">
                                    <p class="h6 text-gradient text-primary">Process status</p>
                                    <label :class="getClassByStatus(datasetInfo.processed)">{{ status[datasetInfo.processed] }}</label>
                                </div>
                                <div class="col-lg-2">
                                    <p class="h6 text-gradient text-primary">Indices</p>
                                    <label class="badge rounded-pill bg-secondary">Not available</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <button v-if="datasetInfo.processed !== 1 && datasetInfo.processed !== 2" @click="processDataset" class="btn btn-primary btn-sm mx-4"> Process </button>
                                <button v-if="datasetInfo.processed === 3" @click="viewResults" class="btn btn-success btn-sm mx-4"> View results </button>
                                <button class="btn btn-secondary btn-sm mx-4" disabled> Get indeces </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-lg-1">
    
                </div>
            </div>
    
        </div>
    </div>
    </template>
    
    <script>
    import {
        inject
    } from 'vue';

    import {
        TOAST_SERVICE
    } from "@/services/toast-service.interface"

    import {
        DATASETS_SERVICE
    } from "@/services/datasets-service.interface"
    
    export default {
        name: "DatasetView",
        props: {
            dataset_id: {
                type: String,
                required: true
            },
            gta: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                toastService: null,
                datasetsService: null,
                datasetId: null,
                datasetInfo: null,
                languages: [],
                status: {
                    0: "NOT PROCESSED",
                    1: "PENDING",
                    2: "IN PROGRESS",
                    3: "COMPLETED",
                    4: "FAILED"
                }
            }
        },
        created() {
            this.toastService = inject(TOAST_SERVICE);
            this.datasetService = inject(DATASETS_SERVICE);
        },
        mounted() {
            this.datasetId = this.$route.params.dataset_id;

            // Getting languages from the backend
            this.datasetService.getLanguages().then((response) => {
                this.languages = response['languages'];

                // Getting dataset info
                this.datasetService.getDataset(this.datasetId).then((response) => {
                    this.datasetInfo = response;
                }).catch((error) => {
                    this.error("Error", "Error loading dataset");
                })

            }).catch((error) => this.error("Error", error));
        },
        methods: {
            viewResults() {
                this.$router.push({
                    path: `/models`,
                    query: {
                        filterBy: 'dataset_id',
                        datasetId: this.$route.params.dataset_id
                    }
                });
            },
            processDataset() {
                this.datasetService.processDataset({ dataset_id: this.datasetId}).then((response) => {
                    this.success("Success", "Dataset processing has been queued");
                    this.datasetInfo = null
                    this.datasetService.getDataset(this.datasetId).then((response) => {
                        this.datasetInfo = response;
                    }).catch((error) => {
                        this.error("Error", "Error reloading dataset");
                    })
                }).catch((error) => {
                    this.error("Error", "Error while queuing dataset processing");
                })
            },
            getLanguageName(id) {
                return this.languages.find((language) => language.id === id).label;
            },
            getClassByStatus(status) {
                const status_class = {
                    0: "badge rounded-pill bg-secondary",
                    1: "badge rounded-pill bg-warning",
                    2: "badge rounded-pill bg-info",
                    3: "badge rounded-pill bg-success",
                    4: "badge rounded-pill bg-danger"
                }

                return status_class[status]
            },
            success(header, footer) {
                this.toastService && this.toastService.success(footer, header)
            },
            info(header, footer) {
                this.toastService && this.toastService.info(footer, header, -1)
            },
            error(header, footer) {
                this.toastService && this.toastService.error(footer, header, -1)
            }
        }
    }
    </script>
    
    <style module>
    .body {
        background-color: #f8f9fa;
    }
    
    </style>
    
    <style scoped>
    .ds-visual {
        min-height: 30vh;
    }
    </style>