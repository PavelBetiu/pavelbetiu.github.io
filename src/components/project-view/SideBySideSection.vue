<template>
<section class="p-4 m-5 position-relative">
    <div class="row ">

        <!-- Left side of the section -->
        <!-- Title and icon -->
        <div class="row">
            <div class="col  d-flex justify-content-end pt-3 ">
                <div class="title-section-right">
                    <h3>{{data.leftSection.title}}</h3>
                </div>
            </div>
            <div class="col ">
                <div class="overlap-icon-right">
                    <img :src="require(`@/assets/images/${data.leftSection.image}`)" style="width: 70px; height: 70px">
                </div>
            </div>
        </div>

        <!-- Content -->
        <div v-if="data.leftSection.type !== PROJECT_ACTIVITIES" class="row justify-content-start m-5">
            <div class="col-6  d-flex justify-content-end">
                <!-- A specific structure will be rendered based on the specified content inside data.leftSection variable-->

                <!-- If About section -->
                <div v-if="data.leftSection.type === ABOUT" class="content-section-left">
                    <div class="d-flex justify-content-start pr-6">
                        <p class="h5 text-primary p-2">Project number: </p>
                        <p class="h5 p-2">{{data.leftSection.content.projectNumber}}</p>
                    </div>
                    <div class="d-flex justify-content-start">
                        <p class="h5 text-primary p-2">Contract number: </p>
                        <p class="h5 p-2">{{data.leftSection.content.contractNumber}}</p>
                    </div>
                </div>

                <!-- If Objectives section -->
                <div v-if="data.leftSection.type === OBJECTIVES" class="content-section-left">
                    <p v-for="(objective,i) in data.leftSection.content.objectives" :key="i" class="text-darker p-3 h6">{{objective}}</p>
                </div>
            </div>
        </div>

        <!-- Content If Project Activities section -->
        <div v-if="data.leftSection.type === PROJECT_ACTIVITIES" class="container p-5">
            <div v-for="(activity, i) in data.leftSection.content.activities" :key="i" class="row p-2 highlight rounded-2 d-flex justify-content-center">
                <div class="col-6 d-flex justify-content-center">
                    <h5 class="text-dark z-index-1 position-relative">{{activity.status}}</h5>
                </div>
                <div class="col">
                    <p class="text-dark z-index-1 position-relative">{{activity.description}}</p>
                </div>
            </div>
        </div>

        <!-- Right side of the section -->
        <!-- Icon and title -->
        <!-- Project activities doesn't have a right section -->
        <div v-if="data.leftSection.type !== PROJECT_ACTIVITIES" class="row">
            <div class="col  d-flex justify-content-end">
                <div class="overlap-icon-left">
                    <img :src="require(`@/assets/images/${data.rightSection.image}`)" style="width: 70px; height: 70px">
                </div>
            </div>
            <div class="col  d-flex justify-content-start pt-3">
                <div class="title-section-left">
                    <h3>{{data.rightSection.title}}</h3>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div v-if="data.leftSection.type !== PROJECT_ACTIVITIES" class="row  d-flex justify-content-end">
            <div class="col-6 ">
                <!-- A specific structure will be rendered based on the specified content inside data.rightSection.content variable-->

                <!-- If Funding agency section -->
                <div v-if="data.rightSection.type === FUNDING_AGENCY" class="row ">
                    <div class="col-5">
                        <div class="d-flex justify-content-start pl-6">
                            <p class="h5 text-primary p-3">Name: </p>
                            <p class="h5 p-3">{{data.rightSection.content.name}}</p>
                        </div>
                    </div>
                    <div class="col-6 ">
                        <img :src="require(`@/assets/images/${data.rightSection.content.logo}`)" alt="ates" class="shadow-xl rounded logo" />
                    </div>
                </div>

                <!-- If Team section -->
                <div v-if="data.rightSection.type === TEAM" class="row m-5">
                    <!-- For each team member render a line that will contain
                    the name and the social links of the person -->
                    <div v-for="(member, i) in data.rightSection.content.team" :key="i" class="row ">

                        <!-- Member's name -->
                        <div class="col-4  d-flex justify-content-start">
                            <h6 class="pt-2 text-darker">{{member.name}}</h6>
                        </div>

                        <!-- Member's social links -->
                        <div class="col-8 ">
                            <a v-if="member.links['dblp']" :href="member.links['dblp']" class="px-1 shadow">
                                <button type="button" class="btn btn-tumblr btn-icon-only">
                                    <span class="btn-inner--icon"><img :src="require(`@/assets/images/dblp.svg`)" /></span>
                                </button>
                            </a>
                            <a v-if="member.links['gscholar']" :href="member.links['gscholar']" class="px-1 shadow">
                                <button type="button" class="btn btn-facebook btn-icon-only">
                                    <span class="btn-inner--icon"><img :src="require(`@/assets/images/google-scholar-white.svg`)" /></span>
                                </button>
                            </a>
                            <a v-if="member.links['linkedin']" :href="member.links['linkedin']" class="px-1 shadow">
                                <button type="button" class="btn btn-linkedin btn-icon-only">
                                    <span class="btn-inner--icon"><img :src="require(`@/assets/images/linkedin.svg`)" /></span>
                                </button>
                            </a>
                            <a v-if="member.links['rgate']" :href="member.links['rgate']" class="px-1 shadow">
                                <button type="button" class="btn btn-github btn-icon-only">
                                    <span class="btn-inner--icon"><img :src="require(`@/assets/images/researchgate.svg`)" /></span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { SideBySideInput } from "./side-by-side-input";

import {
    ABOUT,
    FUNDING_AGENCY,
    OBJECTIVES,
    TEAM,
    PROJECT_ACTIVITIES,
} from './section-constants';

export default {
    name: 'SideBySideSection',
    components: {},
    props: {
        data: SideBySideInput
    },
    data() {
        return {
            ABOUT,
            FUNDING_AGENCY,
            OBJECTIVES,
            TEAM,
            PROJECT_ACTIVITIES,
        }
    }
}
</script>

<style scoped>
.overlap-icon-right {
    position: relative;
    right: 45px;
    z-index: 0;
}

.title-section-right {
    position: relative;
    right: 50px;
    z-index: 0;
}

.content-section-right {
    position: relative;
    z-index: 0;
}

.overlap-icon-left {
    position: relative;
    left: 52px;
    z-index: 0;
}

.title-section-left {
    position: relative;
    left: 50px;
    z-index: 0;
}

.content-section-left {
    position: relative;
    left: 10px;
    z-index: 0;
}

.logo {
    width: 250px;
    height: 200px;
    margin: 0 auto;
    object-position: center;
}

.highlight:hover {
    background: linear-gradient(310deg, #141727 0%, #3A416F 100%);;
    /* make this whatever you want */
    -webkit-text-fill-color: rgb(255, 255, 255);
}
</style>
