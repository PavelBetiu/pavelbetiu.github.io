<template>
<div v-if="project.ue" class="container-navbar">
    <div class="navbar-fonduri">
        <img src="@/assets/images/sigle/ue_logo.jpg" alt="">
        <img src="@/assets/images/sigle/guvern.jpg" alt="">
        <img src="@/assets/images/sigle/instrumente_structurale.jpg" alt="">
    </div>
</div>

<header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
        <span class="mask bg-gradient-info opacity-1" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')' }"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 class="display-1 font-weight-bold" :class="$style['project-acronym']">{{project.acronym}}</h1>
                    <p class="h2 font-weight-light" :class="$style['project-title']">{{project.title}}</p>
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
                    <use xlink:href="#gentle-wave" x="48" y="16" :fill="bg_color" />
                </g>
            </svg>
        </div>
    </div>
</header>
<div :class="$style['body']">
    <!-- About and Funding Agency section -->
    <SideBySideSection :data="convertToSideBySideInput(project, ABOUT, FUNDING_AGENCY)" :parentColor="bg_color" />

    <!-- Description section -->
    <WaveSection :data="convertToWaveSectionInput(project, DESCRIPTION)" :parentColor="bg_color" />

    <!-- Objective and Team section -->
    <SideBySideSection :data="convertToSideBySideInput(project, OBJECTIVES, TEAM)" :parentColor="bg_color" />

    <!-- Project Phases section -->
    <WaveSection v-if="project.projectPhases" :data="convertToWaveSectionInput(project, PROJECT_PHASES)" :parentColor="bg_color" />

    <!-- Project Activities section -->
    <SideBySideSection v-if="project.projectActivities" :data="convertToSideBySideInput(project, PROJECT_ACTIVITIES)" :parentColor="bg_color" />

    <!-- Publications section (Journals and Conferences) -->
    <WaveSection :data="convertToWaveSectionInput(project, PUBLICATIONS)" :parentColor="bg_color" />
</div>

<footer v-if="project.ue">
    <div class="row ue-disclaimer">
        <div class="col-lg-3"></div>
        <div class="col-lg-3">
            <h5 class="text-dark font-weight-light mx-4 p-4">
                Pentru informații detaliate despre celelalte programe cofinanțate de Uniunea Europeană, vă invităm să vizitați www.fonduri-ue.ro
            </h5>
        </div>
        <div class="col-lg-3">
            <h5 class="text-dark  mb-0 font-weight-light mx-4 p-4">
                Conținutul acestui material nu reprezintă în mod obligatoriu poziția oficială a Uniunii Europene sau a Guvernului României
            </h5>
        </div>
        <div class="col-lg-3"></div>
    </div>
</footer>

</template>

<script>
import SideBySideSection from '@/components/project-view/SideBySideSection.vue'
import WaveSection from '@/components/project-view/WaveSection.vue'
import {
    convertToSideBySideInput,
    convertToWaveSectionInput
} from "@/components/project-view/pv-converters"
import {
    ProjectsAPI
} from "@/services/projects-api"

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
        WaveSection
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
            PUBLICATIONS,

            // Set the background color of the page
            bg_color: '#f8f9fa'
        }
    },
    created() {
        this.project = ProjectsAPI.getProjectLong(this.$route.params.link);
    }
}
</script>

<style module>
.body {
    background-color: v-bind(bg_color);
}

.project-title {
    color: whitesmoke;
    text-shadow: 3px 3px 4px black;
}

.project-acronym {
    color: rgb(70, 209, 255);
    text-shadow: 3px 3px 4px black;
}

.services-container {
    border-bottom: 1px solid #ff0000;
    height: 200px;
}

</style>

<style>

.navbar-fonduri {
    align-items: center;
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    max-width: 1000px;
    padding: 0.5rem 0;
    margin-top: 6rem;
    width: 100%;
    gap: 22rem;
}

.container-navbar {
    display: flex;
    justify-content: center;
    width: 100%;
}

.ue-disclaimer {
    background-color: v-bind(bg_color);
}
</style>

