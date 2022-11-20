<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
        <span class="mask bg-gradient-info" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved5-small.jpg') + ')' }"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 :class="$style['title']">Projects</h1>
                    <p :class="['lead mb-4', $style['sub-title']]">Check out our projects</p>
                </div>
            </div>
        </div>
        <div class="position-absolute w-100 z-index-1 bottom-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="moving-waves">
                    <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40)" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(39,234,245,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,215,0,0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(180, 9, 254, 0.5)" />
                    <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                    <use xlink:href="#gentle-wave" x="48" y="16" :fill="bg_color" />
                </g>
            </svg>
        </div>
    </div>
</header>
<div :class="$style['body']">
<section class="p-5 position-relative">
    <div class="container">
        <ProjectCard v-for="(project, i) in projects" :key="i" :data="project"/>
    </div>
</section>
</div>
</template>

<script>
import ProjectCard from "../components/projects-list-view/ProjectCard.vue"
import { ProjectsAPI } from "../services/projects-api"

export default {
    name: 'ProjectsListView',
    components: {
        ProjectCard,
    },
    data() {
        return {
            projects: undefined,
            bg_color: '#f8f9fa'
        }
    },
    created() {
        this.projects = ProjectsAPI.getProjectsShort()
    },
};
</script>

<style module>
.body {
    background-color: v-bind(bg_color);
}

.title {
    color: whitesmoke;
    text-shadow: 3px 3px 4px black;
}

.sub-title {
    color: whitesmoke;
    text-shadow: 4px 4px 5px black;
}
</style>
