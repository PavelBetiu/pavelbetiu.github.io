<template>
<div class="body">
    <div class="container">
        <div class="row">
            <div class="col-12 mt-10 mb-8">
                <h1 class="text-center">Model Prediction</h1>
            </div>
        </div>
        <div class="row mb-5">
            <div class="col-6">
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Model description</label>
                    <!-- <div class="card flex justify-content-center mt-3">
                        <p>Veni vidi vici</p>
                    </div> -->
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="13" disabled>Veni vidi vici</textarea>
                </div>
            </div>
            <div class="col-6">
                <ul class="nav nav-tabs" id="formTabs" role="tablist">
                    <li class="nav-item"> 
                        <a class="nav-link" :class="{active: isActiveTextArea}" id="textarea-tab" data-toggle="tab" role="tab" aria-controls="textarea" :aria-selected="!isActiveTextArea" @click="selectTab(0)">Text</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{active: !isActiveTextArea}" id="csv-tab" data-toggle="tab" role="tab" aria-controls="csv" :aria-selected="isActiveTextArea" @click="selectTab(1)">CSV</a>
                    </li>
                </ul>
                <div v-if="!isActiveTextArea" class="card flex justify-content-center mt-3">
                    <Droparea @droparea:select="selectCSV" @droparea:clear="clearCSV" @droparea:remove="removeCSV" chooseMessage="Choose CSV file" accept=".csv" infoMessage="Please upload here your CSV file." :onFileLimitExceedsCallback="onFileLimitExceedsCallback" :reloadKey="childKey"> </Droparea>
                    <div class="d-flex justify-content-center mb-3">
                        <button type="button" class="btn bg-gradient-primary mt-3 mb-0" @click="submitFile()">Submit</button>
                    </div>
                </div>
                <div v-if="isActiveTextArea" class="card flex justify-content-center">
                    <form @submit="onSubmit" class="flex flex-column gap-2">
                        <div class="card-body text-lg-left text-center px-5 pb-2">
                            <div class="form-group">
                                <textarea v-if="!isLoading && !doneProcessing" class="form-control" id="textInputBox" rows="7" v-model="text" placeholder="Please insert your text here..."></textarea>
                                <textarea v-else-if="isLoading || doneProcessing" class="form-control" id="textInputBoxDisabled" rows="7" v-model="text" disabled></textarea>
                            </div>
                            <div v-if="doneProcessing" id="textLabelResponse">
                                <p class="badge bg-gradient-secondary">{{textLabelResponse}}</p>
                            </div>
                        </div>
                        <div class="card-footer text-center pt-3 pb-1 px-5 d-flex justify-content-center mb-3">
                            <button v-if="!isLoading && !doneProcessing" type="button" class="btn bg-gradient-primary mb-0" @click="predictText()">Predict</button>
                            <button v-else-if="isLoading" type="button" class="btn bg-gradient-primary mb-0" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Processing...
                            </button>
                            <button v-else-if="doneProcessing" type="button" class="btn bg-gradient-primary mb-0" @click="clear()">
                                New Process
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div v-if="doneProcessing && !isActiveCSV && !isNewProcessButtonActivated" class="row mb-3 pt-4 d-flex justify-content-center">
            <div class="col-12">
                <h1 class="text-center">Results</h1>
            </div>
        </div>
        <Table v-if="doneProcessing && !isActiveCSV && !isNewProcessButtonActivated">
        </Table>
        <div v-if="doneProcessing && !isActiveCSV && !isNewProcessButtonActivated" class="row mb-5 d-flex justify-content-center">
            <div class="col-6 mt-5 mb-5 center">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table align-items-center mb-0 table-responsive">
                            <thead>
                                <tr>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Task</th>
                                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="d-flex px-2">
                                            <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-spotify.svg" class="avatar avatar-sm rounded-circle me-2">
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0 text-xs">Spotify</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">$2,500</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex px-2">
                                            <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-invision.svg" class="avatar avatar-sm rounded-circle me-2">
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0 text-xs">Invision</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">$5,000</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex px-2">
                                            <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-jira.svg" class="avatar avatar-sm rounded-circle me-2">
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0 text-xs">Jira</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">$3,400</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex px-2">
                                            <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-slack.svg" class="avatar avatar-sm rounded-circle me-2">
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0 text-xs">Slack</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">$1,000</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex px-2">
                                            <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-webdev.svg" class="avatar avatar-sm rounded-circle me-2">
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0 text-xs">Webdev</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">$14,000</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="d-flex px-2">
                                            <div>
                                                <img src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-xd.svg" class="avatar avatar-sm rounded-circle me-2">
                                            </div>
                                            <div class="my-auto">
                                                <h6 class="mb-0 text-xs">Adobe XD</h6>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="text-xs font-weight-bold mb-0">$2,300</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {
    ref
} from 'vue';
import Droparea from '../components/Droparea.vue';
import {
    inject
} from 'vue';
import {
    TOAST_SERVICE
} from "@/services/toast-service.interface"
const value = ref('Disabled');

export default {
    name: 'Cscl',
    components: {
        Droparea,
    },
    data() {
        return {
            data: undefined,
            isLoading: false,
            jsonReceived: false,
            isActiveTextArea: true,
            isActiveCSV: false,
            text: '',
            csvFile: null,
            doneProcessing: false,
            isNewProcessButtonActivated: false,
            textLabelResponse: '',
            toastService: inject(TOAST_SERVICE),
            childKey: 0,
        };
    },
    methods: {
        clear() {
            this.text = '';
            this.doneProcessing = false;
            this.textLabelResponse = '';
            this.isNewProcessButtonActivated = true;
        },
        process() {
            this.isLoading = true;
            this.isNewProcessButtonActivated = false;
            setTimeout(() => {
                this.isLoading = false;
                this.doneProcessing = true;

            }, 1500);
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
            this.toastService.info('File limit exceeds', 'Warning');
        },
        submitFile() {
            if (this.csvFile === null) {
                this.toastService.info('Upload a CSV file and then submit the form', 'Warning');
            }
            else {
                this.toastService.success('File exported successfully', 'Success');
                this.csvFile = null;
                this.childKey += 1;
            }
        },
        predictText() {
            if (this.text === '') {
                this.toastService.info('Enter some text and then press Predict button', 'Warning');
            }
            else{
                this.process();
            }
        }
    },
};
</script>

<style>
#textAnalysisForm>.card-header {
    border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
    box-shadow: 0 0.225em 0.25em rgb(10 10 10 / 10%);
    z-index: 1;
}

#textAnalysisForm>.card-footer {
    border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
    box-shadow: 0 -0.225em 0.25em rgb(10 10 10 / 10%);
    z-index: 1;
}

#textAnalysisForm>.card-body {
    background-color: #f8f9fa;
}

#textLabelResponse {
    font-size: 1.5rem;
    font-weight: 500;
    color: #6c757d;
}

.center {
    margin-left: auto;
    margin-right: auto;
}

* {
    font-family: 'Roboto', sans-serif;
}
</style>
