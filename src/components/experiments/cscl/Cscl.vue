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
                    <form autocomplete="off">
                        <div class="card-body pb-2">
                            <div class="row">
                                <div class="col-md-2">
                                    <label>Language</label>
                                    <div class="input-group mb-4">
                                        <select class="form-control" name="language-button" id="language-button" v-model="language">
                                            <option value="fr" selected>French</option>
                                            <option value="en">English</option>
                                            <option value="ro">Romanian</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <label>File</label>
                                    <div class="input-group mb-4">
                                        <input type="file" class="form-control" @change="updateFile">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <label>File type</label>
                                    <div class="input-group mb-4">
                                        <select class="form-control" name="ftype-button" id="ftype-button" v-model="ftype">
                                            <option value="json">JSON</option>
                                            <option value="xml" selected>XML</option>
                                        </select>
                                    </div>
                                </div>
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
                    </form>
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
            ftype: "xml",
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
            if (!this.file || !this.language || !this.ftype) {
                alert("Please select a file, a file type and a language.");
                return;
            }

            this.isLoading = true;

            if (this.ftype === "json") {
                let reader = new FileReader();

                reader.onload = function (e) {
                    this.data = JSON.parse(e.target.result);
                }.bind(this);

                reader.readAsText(this.file);
            } else {
                this.data = await this.csclService.process({
                    file: this.file,
                    language: this.language
                });
            }

            this.isLoading = false;
            this.jsonReceived = true;
        },
        exportFile() {
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data));
            var dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", "cscl.json");
            dlAnchorElem.click();
        }
    },
};
</script>

<style lang="scss" scoped>
.body {
    background-color: #f8f9fa;
}
</style>
