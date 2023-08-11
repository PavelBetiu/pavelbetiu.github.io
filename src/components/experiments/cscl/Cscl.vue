<template>
<div class="body">
    <div class="container">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 d-flex justify-content-center flex-column">
                <div class="card d-flex blur justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                    <div class="text-center">
                        <h3 class="text-gradient text-primary">CSCL</h3>
                    </div>

                    <ul class="nav nav-tabs" id="formTabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" :class="{active: isActiveXML}" id="xml-tab" data-toggle="tab" role="tab" aria-controls="xml" :aria-selected="!isActiveXML" @click="selectTab(0)">Import XML</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{active: !isActiveXML}" id="json-tab" data-toggle="tab" role="tab" aria-controls="json" :aria-selected="isActiveXML" @click="selectTab(1)">Import JSON</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="formTabsContent">
                        <div v-if="isActiveXML" class="tab-pane fade" :class="isActiveXML ? 'show active' : ''" id="xml" role="tabpanel" aria-labelledby="xml-tab">
                            <form autocomplete="off">
                                <div class="card-body pb-2">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Language</label>
                                            <div class="input-group mb-4">
                                                <select class="form-control" name="language-button" id="language-button" v-model="language">
                                                    <option value="fr" selected>French</option>
                                                    <option value="en">English</option>
                                                    <option value="ro">Romanian</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label>XML File</label>
                                            <div class="input-group mb-4">
                                                <input type="file" class="form-control" @change="updateFile">
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div v-else class="tab-pane fade" :class="!isActiveXML ? 'show active' : ''" id="json" role="tabpanel" aria-labelledby="json-tab">
                            <form autocomplete="off">
                                <div class="card-body pb-2">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-md-6">
                                            <label>JSON File</label>
                                            <div class="input-group mb-4">
                                                <input type="file" class="form-control" @change="updateFile">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="row">
                            <div class="col-md-12 text-center">
                                <button v-if="!isLoading" type="button" class="btn bg-gradient-primary mt-3 mb-0" @click="process()">Process</button>
                                <button v-else type="button" class="btn bg-gradient-primary mt-3 mb-0" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Processing...
                                </button>
                            </div>
                            <div class="col-md-12 text-center">
                                <a id="downloadAnchorElem" v-if="jsonReceived">
                                    <button type="button" class="btn bg-gradient-primary mt-3 mb-0" @click="exportFile()">Export JSON</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-center flex-column">
                <CsclResult :data="data" v-if="data" />
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
    CSCL_SERVICE
} from '@/services/cscl-service.interface';
import CsclResult from './CsclResult';
import axios from 'axios';

export default {
    name: 'Cscl',
    components: {
        CsclResult,
    },
    data() {
        return {
            language: 'fr',
            data: undefined,
            isLoading: false,
            jsonReceived: false,
            isActiveXML: true,
        };
    },
    setup() {
        return {
            csclService: inject(CSCL_SERVICE),
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
                this.isActiveXML = true;
            } else {
                this.isActiveXML = false;
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.body {
    background-color: #f8f9fa;
}
</style>
