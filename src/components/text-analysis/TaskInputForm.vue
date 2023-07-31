<template>
    <div id="textAnalysisForm" class="card">
        <div class="card-header text-center pt-4 pb-3 d-flex justify-content-center">
            <span class="badge rounded-pill bg-light text-dark">{{ task['name'] }}</span>
        </div>
        <div class="card-body text-lg-left text-center px-5 pb-2">
            <div class="form-group">
                <textarea v-if="!isLoading && !doneProcessing" class="form-control" id="textInputBox" rows="15"
                    v-model="text" placeholder="Please insert your text here..."></textarea>
                <textarea v-else-if="isLoading || doneProcessing" class="form-control" id="textInputBoxDisabled"
                    rows="15" v-model="text" disabled></textarea>
            </div>
            <div v-if="doneProcessing" id="textLabelResponse"><p class="badge bg-gradient-secondary">{{textLabelResponse}}</p></div>

        </div>
        <div class="card-footer text-center pt-3 pb-1 px-5 d-flex justify-content-center">
            <button v-if="!isLoading && !doneProcessing" type="button" class="btn bg-gradient-primary w-100"
                @click="process()">Process</button>
            <button v-else-if="isLoading" type="button" class="btn bg-gradient-primary w-100" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Processing...
            </button>
            <button v-else-if="doneProcessing" type="button" class="btn bg-gradient-primary w-100" @click="clear()">
                New Process
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TaskInputForm',
    props: ['task'],
    data() {
        return {
            text: '',
            isLoading: false,
            doneProcessing: false,
            textLabelResponse: '',
        };
    },
    methods: {
        clear() {
            this.text = '';
            this.doneProcessing = false;
            this.textLabelResponse = '';
        },
        process() {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                this.doneProcessing = true;

                console.log(this.task['labels']);

                // randomize label from task['labels']
                //this.textLabelResponse = this.task['labels'][Math.floor(Math.random() * this.task['labels'].length)];
                this.textLabelResponse = 'Insult'
            }, 1500);
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

#textLabelResponse {
    font-size: 1.5rem;
    font-weight: 500;
    color: #6c757d;
}

* {
    font-family: 'Roboto', sans-serif;
}
</style>