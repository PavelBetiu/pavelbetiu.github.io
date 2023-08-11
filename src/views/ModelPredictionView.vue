<template>
<div :class="$style['body']">
    <div class="container">
        <div class="d-flex justify-content-center">
            <p class="h4 text-gradient text-primary my-7 text-shadow">Model Prediction</p>
        </div>
        <div class="row">

            <div class="col-6">
                <label class="h6 text-primary" for="model-description">Model description</label>
                <div class="model-description-box shadow">
                    <ul v-if="modelInfo.type == 'XGBOOST'" class="list-group">
                        <li v-for="[idx, params] of modelInfo.params.entries()" :key="idx" class="list-group-item d-flex flex-column justify-content-center align-items-center">
                            <div v-for="param of Object.keys(params)" :key="param" class="d-flex w-100 justify-content-between align-items-center">
                                <h6 id="param-key">{{ param }}</h6>
                                <span id="param-value" class="badge rounded-pill bg-secondary">{{ params[param] }}</span>
                            </div>
                        </li>
                    </ul>
                    <ul v-else-if="modelInfo.type == 'TRANSFORMER'" class="list-group">
                        <li v-for="param of Object.keys(modelInfo.params)" :key="param" class="list-group-item d-flex justify-content-between align-items-center">
                            <h6 id="param-key">{{ param }}</h6>
                            <span v-if="param === 'features' && JSON.parse(modelInfo.params[param].use === false)" id="param-value" class="badge rounded-pill bg-secondary">NO</span>
                            <span v-else-if="param === 'features' && JSON.parse(modelInfo.params[param].use === true)" id="param-value" class="badge rounded-pill bg-secondary">{{Object.keys(modelInfo.params[param])[1]}}: {{ modelInfo.params[param][Object.keys(modelInfo.params[param])[1]] }}</span>
                            <span v-else id="param-value" class="badge rounded-pill bg-secondary">{{ modelInfo.params[param] }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col-6">
                <!-- Tab buttons -->
                <ul class="nav nav-tabs" id="formTabs" role="tablist">
                    <li class="nav-item"> 
                        <a class="nav-link" :class="{active: isActiveTextArea}" id="textarea-tab" data-toggle="tab" role="tab" aria-controls="textarea" :aria-selected="!isActiveTextArea" @click="selectTab(0)">Text</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{active: !isActiveTextArea}" id="csv-tab" data-toggle="tab" role="tab" aria-controls="csv" :aria-selected="isActiveTextArea" @click="selectTab(1)">CSV</a>
                    </li>
                </ul>

                <!-- Text prediction area -->
                <div v-if="isActiveTextArea" class="prediction-tab justify-content-center shadow">
                    <form @submit="onSubmit" class="flex flex-column gap-2">
                        <div class="card-body text-lg-left text-center px-5 pb-2">
                            <div class="form-group">
                                <textarea v-if="!isLoading && !doneProcessing" class="form-control" id="textInputBox" rows="7" v-model="text" placeholder="Please insert your text here..."></textarea>
                                <textarea v-else-if="isLoading || doneProcessing" class="form-control" id="textInputBoxDisabled" rows="7" v-model="text" disabled></textarea>
                            </div>
                        </div>
                        <div class="card-footer text-center pt-3 pb-1 px-5 d-flex justify-content-center mb-3">
                            <button v-if="!isLoading && !doneProcessing" type="button" class="btn bg-gradient-primary mb-0" @click="predictText()">Predict</button>
                            <button v-else-if="isLoading" type="button" class="btn bg-gradient-primary mb-0" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Processing...
                            </button>
                            <button v-else-if="doneProcessing" type="button" class="btn bg-gradient-primary mb-0" @click="clear()">
                                New Predict
                            </button>
                        </div>
                    </form>
                </div>

                <!-- CSV prediction area -->
                <div v-if="!isActiveTextArea" class="prediction-tab justify-content-center shadow">
                    <div class="px-5">
                        <Droparea @droparea:select="selectCSV" @droparea:clear="clearCSV" @droparea:remove="removeCSV" chooseMessage="Choose CSV file" accept=".csv" infoMessage="Please upload here your CSV file." :onFileLimitExceedsCallback="onFileLimitExceedsCallback" :reloadKey="childKey"> </Droparea>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button v-if="!isSubmitting" type="button" class="btn bg-gradient-primary my-4" @click="submitCSV()">Submit</button>
                        <button v-else type="button" class="btn bg-gradient-primary my-4" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Submitting...
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <div id="results-table">
            <div v-if="predictionResults !== null && !isActiveCSV" class="row d-flex justify-content-center py-4">
                <div class="col-6">
                    <p class="h6 text-primary d-inline-flex py-1">
                        Results
                    </p>
                    <div class="d-flex flex-column align-items-center results-table-card shadow">
                        <div class="results-table overflow-hidden">
                            <Table :data="resultsTableInput" :withCustomBody="true">
                                <template #column="{rowData, currentColumnData}">
                                    <div v-if="currentColumnData.key == 'result'">
                                        <div v-if="Object.keys(rowData[currentColumnData.key]).length > 0" class="d-flex flex-row">
                                            <div v-for="param of Object.keys(rowData[currentColumnData.key])" :key="param" class="list-group-item d-flex justify-content-between align-items-center">
                                                <div v-if="param !== 'maxKey'" class="p-1">
                                                    <span v-if="param === rowData[currentColumnData.key]['maxKey']" class="badge bg-success">{{param}}: {{ rowData[currentColumnData.key][param] }}</span>
                                                    <span v-else class="badge bg-light text-dark">{{param}}: {{ rowData[currentColumnData.key][param] }}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span v-else class="badge bg-light text-dark">
                                            {{ rowData[currentColumnData.key] }}
                                        </span>
                                    </div>
                                    <div v-else>
                                        {{ rowData[currentColumnData.key] }}
                                    </div>
                                </template>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Droparea from '../components/Droparea.vue';
import Table from '../components/widgets/Table.vue'

import axios from 'axios';
import {
    ref
} from 'vue';
import {
    inject
} from 'vue';
import {
    TOAST_SERVICE
} from "@/services/toast-service.interface"
import {
    ModelService
} from "@/services/models-service";
import {
    convertToModelPredictionResultTable
} from "@/utils/converters-utils.ts"

export default {
    name: 'Cscl',
    components: {
        Droparea,
        Table
    },
    data() {
        return {
            modelID: null,
            modelInfo: null,
            childKey: 0,
            isLoading: false,
            doneProcessing: false,
            predictionResults: null,

            isActiveTextArea: true,
            text: '',

            isActiveCSV: false,
            csvFile: null,
            isSubmitting: false,
            
            modelService: null,
            toastService: inject(TOAST_SERVICE),
        };
    },
    created() {
        let modelInfoB64 = this.$route.query['data']
        this.modelID = this.$route.params['id']

        this.modelInfo = JSON.parse(atob(modelInfoB64))
        this.modelService = new ModelService()
    },
    methods: {
        clear() {
            this.text = '';
            this.doneProcessing = false;
            this.clearCSV();
            this.predictionResults = null;
        },
        selectTab(tab) {
            if (tab === 0) {
                this.isActiveTextArea = true;
                this.isActiveCSV = false;
            } else {
                this.isActiveTextArea = false;
                this.isActiveCSV = true;
            }
        },

        selectCSV(event) {
            this.csvFile = [...event.files][0];
        },
        clearCSV() {
            this.csvFile = null;
        },
        removeCSV(event) {
            this.csvFile = null;
        },
        onFileLimitExceedsCallback() {
            this.info('Warning', 'File limit exceeds');
        },
        submitCSV() {
            if (this.csvFile === null) {
                this.info('Upload a CSV file and then submit the form', 'Warning');
            }
            else {
                this.isSubmitting = true;

                this.modelService.submitCSV(this.modelID, this.csvFile).then((response) => {
                    this.success('File submitted successfully', 'Check out the Processing Queue page for the status of the job');
                    this.csvFile = null;
                    this.childKey += 1;
                    this.isSubmitting = false;

                }).catch((error) => {
                    console.log(error)
                    this.error("Fail", error.message)
                    this.csvFile = null;
                    this.childKey += 1;
                    this.isSubmitting = false;
                });
            }
        },
        predictText() {
            if (this.text === '') {
                this.info('Enter some text and then press Predict button', 'Warning');
                return;
            }
            
            this.isLoading = true;

            this.modelService.textPredict(this.modelID, this.text).then((response) => {
                this.success("Success", "Prediction successful")
                this.predictionResults = response.data;
                console.log(this.predictionResults)
                this.isLoading = false;
                this.doneProcessing = true;
                this.scrollToElement("results-table")

            }).catch((error) => {
                this.error("Prediction failed", error.message)
                this.predictionResults = null;
                this.isLoading = false;
                this.doneProcessing = false;
            });
        },
        success(header, footer) {
            this.toastService && this.toastService.success(footer, header, 10000)
        },
        info(header, footer) {
            this.toastService && this.toastService.info(footer, header)
        },
        error(header, footer) {
            this.toastService && this.toastService.error(footer, header, -1)
        },
        scrollToElement(id) {
            const container = document.getElementById(id);
            container.scrollIntoView({ behavior: 'smooth' });
        }
    },
    computed: {
        resultsTableInput() {
            return convertToModelPredictionResultTable(this.predictionResults)
        }
    }
};
</script>

<style module>
.body {
    background-color: #f8f9fa;
    min-height: 100vh;
}
</style>

<style scoped>
.model-description-box {
    border-radius: 10px;
}

.prediction-tab {
    background-color: white;
    border-radius: 0 0 10px 10px;
    min-height: 41.4vh;
    border-bottom-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-width: 1px;
    border-color: #49505727;
    padding-top: 6vh;
}

* {
    font-family: 'Roboto', sans-serif;
}

.results-table {
    border-radius: 10px;
    width: 100%;
}

.results-table-card {
    border: solid;
    border-radius: 10px;
    border-width: 1px;
    border-color: #49505727;
    background-color: white;
}

.shadow {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.text-shadow {
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.171);
}

</style>
