<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
        <span class="mask bg-gradient-info" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')' }"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 class="text-white">ATES</h1>
                    <p class="h3 mb-4 text-white opacity-9">AUTOMATED TEXT EVALUATION AND SIMPLIFICATION</p>
                </div>
            </div>
        </div>
        <div class="position-absolute w-100 z-index-1 bottom-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="moving-waves">
                    <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.4)" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(39,234,245,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0, 199, 255, 0.6)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(81, 0, 109, 0.6)" />
                    <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1)" />
                </g>
            </svg>
        </div>
    </div>
</header>
<!-- About and Funding Agency section -->
<SideBySideSection :data="convertToSideBySideInput(project, ABOUT, FUNDING_AGENCY)" />

<!-- Description section -->
<WaveSection :data="convertToWaveSectionInput(project, DESCRIPTION)" />

<!-- Objective and Team section -->
<SideBySideSection :data="convertToSideBySideInput(project, OBJECTIVES, TEAM)" />

<!-- Project Phases section -->
<WaveSection :data="convertToWaveSectionInput(project, PROJECT_PHASES)" />

<!-- Project Activities section -->
<SideBySideSection :data="convertToSideBySideInput(project, PROJECT_ACTIVITIES)" />

<!-- Publications section (Journals and Conferences) -->
<WaveSection :data="convertToWaveSectionInput(project, PUBLICATIONS)" />
</template>

<script>
import SideBySideSection from '@/components/project-view/SideBySideSection.vue'
import WaveSection from '@/components/project-view/WaveSection.vue'
import { convertToSideBySideInput, convertToWaveSectionInput } from "@/components/project-view/pv-converters"
import { ProjectsAPI } from "@/services/projects-api"

import {
    ABOUT,
    FUNDING_AGENCY,
    OBJECTIVES,
    TEAM,
    PROJECT_ACTIVITIES,
    PROJECT_PHASES,
    DESCRIPTION,
    PUBLICATIONS
} from '../components/project-view/section-constants';

export default {
    name: 'ProjectView',
    components: {
        SideBySideSection,
        WaveSection,
    },
    methods: {
        convertToSideBySideInput,
        convertToWaveSectionInput
    },
    data() {
        return {
            project: undefined,
            // Constants
            ABOUT,
            FUNDING_AGENCY,
            OBJECTIVES,
            TEAM,
            PROJECT_ACTIVITIES,
            PROJECT_PHASES,
            DESCRIPTION,
            PUBLICATIONS
        }
    },
    created() {
        this.project = ProjectsAPI.getProjectLong(this.$route.params.link);
    }
}
</script>

<style>
</style>
