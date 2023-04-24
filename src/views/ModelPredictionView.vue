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
                    <Droparea> </Droparea>
                    <div class="d-flex justify-content-center mb-3">
                        <button type="button" class="btn bg-gradient-primary mt-3 mb-0" @click="exportFile()">Submit</button>
                    </div>
                </div>
                <!-- <div class="nav-wrapper position-relative end-0">
                    <ul class="nav nav-pills nav-fill p-1" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link mb-0 px-0 py-1 active" data-bs-toggle="tab" href="#text-tabs-simple" role="tab" aria-controls="text" aria-selected="true">
                                Text
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0 px-0 py-1" data-bs-toggle="tab" href="#csv-tabs-simple" role="tab" aria-controls="csv" aria-selected="false">
                                CSV
                            </a>
                        </li>
                    </ul>
                </div> -->
                <div v-if="isActiveTextArea" class="card flex justify-content-center">
                    <form @submit="onSubmit" class="flex flex-column gap-2">
                        <div class="card-body text-lg-left text-center px-5 pb-2">
                            <div class="form-group">
                                <textarea v-if="!isL && !doneProcessing" class="form-control" id="textInputBox" rows="7" v-model="text" placeholder="Please insert your text here..."></textarea>
                                <textarea v-else-if="isLoading || doneProcessing" class="form-control" id="textInputBoxDisabled" rows="7" v-model="text" disabled></textarea>
                            </div>
                            <div v-if="doneProcessing" id="textLabelResponse">
                                <p class="badge bg-gradient-secondary">{{textLabelResponse}}</p>
                            </div>

                        </div>
                        <div class="d-flex justify-content-center mb-3">
                            <button type="button" class="btn bg-gradient-primary mt-3 mb-0" @click="exportFile()">Predict</button>
                        </div>
                    </form>
                    <Toast />
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
const value = ref('Disabled');
export default {
    name: 'Cscl',
    components: {
        Droparea
    },
    data() {
        return {
            data: undefined,
            isLoading: false,
            jsonReceived: false,
            isActiveTextArea: true,
            isActiveCSV: false,
        };
    },
    methods: {
        updateFile(event) {
            if (event.target.files.length > 0) {
                this.file = event.target.files[0];
            }
        },
        async process() {
            if (!this.file || !this.language) {
                alert("Please select a file, a file type and a language.");
                return;
            }

            if (this.file.type === "text/xml") {
                this.isLoading = true;

                this.data = await this.csclService.process({
                    file: this.file,
                    language: this.language
                }).then(response => {
                    this.isLoading = false;
                    this.jsonReceived = true;
                    return response;
                }).catch(error => {
                    this.isLoading = false;
                    alert("Server error");
                });

            } else if (this.file.type === "application/json") {
                this.isLoading = true;

                let reader = new FileReader();

                reader.onload = function (e) {
                    this.data = JSON.parse(e.target.result);
                }.bind(this);

                reader.readAsText(this.file);
                this.isLoading = false;

                // Hide Export Json button if the file is already a json
                this.jsonReceived = false;
            } else {
                alert("File format is not valid. Please select a valid file. (XML or JSON)");
                return;
            }
        },
        exportFile() {
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "cscl.json");
        },
        selectTab(tab) {
            if (tab === 0) {
                this.isActiveTextArea = true;
            } else {
                this.isActiveTextArea = false;
            }
        }
    },
};
</script>

<style>

</style>
