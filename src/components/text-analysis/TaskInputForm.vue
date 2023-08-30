<template>
<div id="textAnalysisForm" class="card">

    <div class="card-header">
        <slot name="over-header">
        </slot>

        <slot name="header">
            <div class="text-center w-100 d-flex justify-content-center">
                <span class="badge rounded-pill bg-light text-dark">{{ title }}</span>
            </div>
        </slot>

        <slot name="sub-header">
        </slot>
    </div>

    <div class="card-body">
        <slot name="over-body">
        </slot>
        <slot name="body">
            <div class="text-lg-left text-center px-2">
                <div class="form-group">
                    <textarea v-if="!isLoading && !doneProcessing" class="form-control" id="textInputBox" rows="15" v-model="text" placeholder="Please insert your text here..."></textarea>
                    <textarea v-else-if="isLoading || doneProcessing" class="form-control" id="textInputBoxDisabled" rows="15" v-model="text" disabled></textarea>
                </div>
            </div>
        </slot>
        <slot name="sub-body">
        </slot>
    </div>

    <div class="card-footer">
        <slot name="over-footer">
        </slot>
        <slot name="footer">
            <div class="w-100 d-flex justify-content-center">
                <button v-if="!isLoading && !doneProcessing" type="button" class="btn bg-gradient-primary w-100" @click="process()">Process</button>

                <button v-else-if="isLoading" type="button" class="btn bg-gradient-primary w-100" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Processing...
                </button>

                <button v-else-if="doneProcessing" type="button" class="btn bg-gradient-primary w-100" @click="clear()">
                    New Process
                </button>
            </div>
        </slot>
        <slot name="sub-footer">
        </slot>
    </div>

</div>
</template>

<script>
import {
    inject
} from 'vue';
import {
    TEXT_ANALYSIS_SERVICE
} from '@/services/text-analysis-service.interface'

export default {
    name: 'TaskInputForm',
    props: {
        title: {
            type: String,
            optional: false
        },
        processText: {
            type: Function,
            optional: false
        },
        clearForm: {
            type: Function,
            optional: true,
            default: undefined
        }
    },
    data() {
        return {
            text: '',
            isLoading: false,
            doneProcessing: false,
        };
    },
    methods: {
        clear() {
            this.text = '';
            this.doneProcessing = false;

            if (this.clearForm !== undefined) {
                this.clearForm();
            }
        },
        async process() {
            this.isLoading = true;

            let valid = await this.processText(this.text);

            this.isLoading = false;

            if (valid) {
                this.doneProcessing = true;
            }
        },
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

* {
    font-family: 'Roboto', sans-serif;
}
</style>
