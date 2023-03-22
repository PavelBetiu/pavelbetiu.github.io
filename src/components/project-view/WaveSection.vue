<template>
<section class="pb-5 position-relative bg-gradient-dark">
    <div class="position-absolute w-100 z-index-1 top-0 mt-n3">
        <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>wave-down</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g :fill="parentColor" fill-rule="nonzero">
                    <g id="wave-down">
                        <path d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z" id="Path-Copy-2" transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "></path>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    <div class="container min-vh-65">
        <div class="row pt-8">
            <div class="col-md-8 text-start mb-5 mt-5">
                <h3 class="text-white z-index-1 position-relative">{{data.title}}</h3>
            </div>
        </div>

        <!-- If Description section -->
        <div v-if="data.type === DESCRIPTION" class="row pb-8">
            <div class="col-lg-6">
                <p class="text-light h6">
                    {{data.content.description}}
                </p>
            </div>
            <div class="col-lg-6">
                <img src="@/assets/images/nlp.jpg" class="img-fluid p-4 border-radius-bottom-start-circle border-radius-top-end-circle bg-gradient-light" alt="Image">
            </div>
        </div>

        <!-- If Project phases section -->
        <div v-if="data.type === PROJECT_PHASES" class="row pb-8">
            <div v-for="(phase, i) in data.content.phases" :key="i" class="row pt-2 rounded-2 d-flex justify-data.content-start" :class="$style['highlight']">
                <div class="col">
                    <h5 class="text-light z-index-1 position-relative">{{phase.phase}}</h5>
                </div>
                <div class="col">
                    <p class="text-light pt-1">
                        {{phase.description}} 
                    </p>
                </div>
            </div>
        </div>

        <!-- If Publications section -->
        <div v-if="data.type === PUBLICATIONS" class="row pb-8">
            <!-- Render Journals -->
            <div class="col">
                <h4 class="text-white z-index-1 position-relative">Journals</h4>
                <div v-for="(journal,i) in data.content.journals" :key="i" class="row">
                    <a :href="journal.url" class="pt-2 rounded-2 d-flex justify-data.content-start" :class="$style['highlight']">
                        <p class="text-light">{{journal.title}}</p>
                    </a>
                </div>
            </div>

            <!-- Render Conferences -->
            <div class="col">
                <h4 class="text-white z-index-1 position-relative">Conferences</h4>
                <div v-for="(conference,i) in data.content.conferences" :key="i" class="row">
                    <a :href="conference.url" class="pt-2 rounded-2 d-flex justify-data.content-start" :class="$style['highlight']">
                        <p class="text-light">{{conference.title}}</p>
                    </a>
                </div>
            </div>
        </div>

    </div>
    
    <div class="position-absolute w-100 bottom-0 mn-n1 mt-3">
        <svg width="100%" viewBox="0 -1 1920 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>wave-up</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(0.000000, 5.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g id="wave-up" transform="translate(0.000000, -5.000000)">
                        <path d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z" :fill="parentColor"></path>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</section>
</template>

<script>
import { WaveSectionInput } from '@/components/project-view/wave-section-input';
import {
    PROJECT_PHASES,
    DESCRIPTION,
    PUBLICATIONS
} from './section-constants';

export default {
    name: "WaveSection",
    props: {
        data: {
            type: WaveSectionInput,
            required: true
        },
        parentColor: {
            type: String,
            default: '#ffffff',
            required: false
        }
    },
    data() {
        return {
            PROJECT_PHASES,
            DESCRIPTION,
            PUBLICATIONS
        }
    }
};
</script>

<style module>
.highlight:hover {
    background: rgb(255, 255, 255);
    /* make this whatever you want */
    -webkit-text-fill-color: rgb(0, 5, 53);
}
</style>
