<template>
<div class="body">
    <div class="container">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 d-flex justify-content-center flex-column">
                <div class="card d-flex blur justify-content-center p-4 shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
                    <div class="text-center">
                        <h3 class="text-gradient text-primary">Speech-to-Text</h3>
                    </div>
                    <div class="tab-content" id="formTabsContent">
                        <div class="row">
                            <div class="col-md-12 pb-2">
                                <form autocomplete="off">
                                    <label>Audio File</label>
                                    <input type="file" class="form-control" @change="updateFile">
                                </form>
                            </div>
                        </div>
                        <div v-if="text" class="row">
                            <div class="col-md-12 text-center">
                                {{ text }}
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-center flex-column">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Speech-to-Text',

    data() {
        return {
            isLoading: false,
            text: null,
        };
    },

    methods: {
        updateFile(event) {
            if (event.target.files.length > 0) {
                this.file = event.target.files[0];
            }
        },

        async process() {
            if (!this.file) {
                alert("Please select a file");
                return;
            }

            this.isLoading = true;
            this.text = null;

            const data = new FormData();
            data.append('files[]', this.file);

            const response = await axios.post('https://api.echo.readerbench.com/api/decode', data, {
                transformRequest: (data, headers) => {
                    delete headers['Authorization'];
                    return data;
                }
            });

            this.isLoading = false;
            this.text = response.data.result[0].text;
        },
    },
};
</script>

<style lang="scss" scoped>
.body {
    background-color: #f8f9fa;
}
</style>
