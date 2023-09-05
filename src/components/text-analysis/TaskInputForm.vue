<template>
<div id="textAnalysisForm" class="card">
    <div class="card-header text-center pt-4 pb-3 d-flex justify-content-center">
        <span class="badge rounded-pill bg-light text-dark">{{ task['name'] }}</span>
    </div>
    <div class="card-body text-lg-left text-center px-5 pb-2">
        <div class="form-group">
            <textarea v-if="!isLoading && !doneProcessing" class="form-control" id="textInputBox" rows="15" v-model="text" placeholder="Please insert your text here..."></textarea>
            <textarea v-else-if="isLoading" class="form-control" id="textInputBoxDisabled" rows="15" v-model="text" disabled></textarea>
            <!-- Display Highlighted Text -->
            <div v-else-if="doneProcessing" class="card-body text-lg-left text-center px-5 pb-2">
                <h3 class="mb-1">Highlighted Text:</h3>
                <div v-html="highlightedText"></div>
            </div>
        </div>
    </div>

    <!-- Display Keywords -->
    <div v-if="doneProcessing" class="card-body text-lg-left text-center px-5 pb-2">
        <h3 class="mb-1">Keywords:</h3>
        <div class="d-flex flex-wrap keywords-list">
            <div v-for="keyword of keywords" :key="keyword" class="badge bg-secondary m-2">
                {{ keyword }}
            </div>
        </div>
    </div>

    <div class="card-footer text-center pt-3 pb-1 px-5 d-flex justify-content-center">
        <button v-if="!isLoading && !doneProcessing" type="button" class="btn bg-gradient-primary w-100" @click="process()">
            Process
        </button>
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
import {
    LanguageDropdown
} from '@/components/text-analysis/LanguageDropdown.vue';
import {
    inject
} from 'vue';
import {
    TEXT_ANALYSIS_SERVICE
} from '@/services/text-analysis-service.interface';
export default {
    name: 'TaskInputForm',
    props: {
        task: Object,
        langID: Number
    },
    data() {
        return {
            text: '',
            isLoading: false,
            doneProcessing: false,
            taservice: inject(TEXT_ANALYSIS_SERVICE),
            keywords: [],
            highlightedText: '', // Added to store the highlighted text
            keywordColors: {}, // Added to store colors for keywords
        };
    },
    methods: {
        clear() {
            this.text = '';
            this.doneProcessing = false;
        },
        highlightKeywords() {
            let highlightedText = this.text;

            // Loop through keywords and apply highlighting
            this.keywords.forEach((keyword) => {
                const keywordParts = keyword.split(' ');

                // Create a regular expression pattern to match keyword parts with any words in between
                const keywordPattern = new RegExp(
                    `(${keywordParts
                .map((part) => `\\b${part}\\b`)
                .join('.*?')})`,
                    'gi'
                );

                highlightedText = highlightedText.replace(
                    keywordPattern,
                    (match) => `<span class="highlighted">${match}</span>`
                );
            });

            this.highlightedText = highlightedText;
        },
        async process() {
            this.isLoading = true;
            console.log(this.text);
            console.log(this.langID);
            const response = await this.taservice.getKeywords({
                text: this.text,
                lang: this.langID
            });
            console.log('the get keywords response is:')
            console.log(response);
            this.keywords = response.keywords;
            this.isLoading = false;
            this.doneProcessing = true;
            this.highlightKeywords();
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

.keywords-list {
    display: flex;
    justify-content: center;
    max-width: 100%;
}

* {
    font-family: 'Roboto', sans-serif;
}

.highlighted {
    background-color: yellow;
    /* Adjust the highlighting style as needed */
}
</style>
