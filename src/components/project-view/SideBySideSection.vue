<template>
<section class="p-5 position-relative">
    <div class="row p-2">

        <!-- Left side of the section -->
        <!-- Title and icon -->
        <div class="row">
            <div class="col d-flex justify-content-end pt-1">
                <div :class="$style['title-section-right']">
                    <h3>{{data.leftSection.title}}</h3>
                </div>
            </div>
            <div class="col">
                <div :class="$style[overlap-icon-right]">
                    <img :src="require(`@/assets/images/${data.leftSection.image}`)" style="width: 50px; height: 50px">
                </div>
            </div>
        </div>

        <!--Content If About section -->
        <div v-if="data.leftSection.type === ABOUT" class="row p-4 d-flex justify-content-center">
            <div class="row p-4 w-45 shadow-lg" :class="$style['div-about']">
                <div class="col-7">
                    <div class="row">
                        <p class="h5 text-primary">Project number: </p>
                        <p class="font-weight-bolder d-flex justify-content-end">{{data.leftSection.content.projectNumber}}</p>
                    </div>
                    <div class="row">
                        <p class="h5 text-primary">Contract number: </p>
                        <p class="font-weight-bolder d-flex justify-content-end">{{data.leftSection.content.contractNumber}}</p>
                    </div>
                    <div class="row">
                        <p class="h5 text-primary">Funding Agency: </p>
                        <p class="font-weight-bolder d-flex justify-content-end">{{data.rightSection.content.name}}</p>
                    </div>
                </div>
                <div v-if="data.rightSection.type === FUNDING_AGENCY" class="col-auto d-flex justify-content-center">
                    <img :src="require(`@/assets/images/${data.rightSection.content.logo}`)" alt="ates" class="rounded" :class="$style['logo']"/>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div v-if="data.leftSection.type !== PROJECT_ACTIVITIES && data.leftSection.type !== ABOUT" class="row justify-content-start m-5">
            <div class="col-6  d-flex justify-content-end">
                <!-- A specific structure will be rendered based on the specified content inside data.leftSection variable-->

                <!-- If Objectives section -->
                <div v-if="data.leftSection.type === OBJECTIVES" class="card w-80 p-4" :class="$style['content-section-left']">
                    <p v-for="(objective,i) in data.leftSection.content.objectives" :key="i" class="text-darker p-3 h6">{{objective}}</p>
                </div>
            </div>
        </div>

        <!-- Content If Project Activities section -->
        <div v-if="data.leftSection.type === PROJECT_ACTIVITIES" class="container p-5">
            <GanttChart :data="getGanttData()"/>
        </div>

        <!-- Right side of the section -->
        <!-- Icon and title -->
        <!-- Project activities doesn't have a right section and Funding Agency is no longer a standalone section -->
        <div v-if="data.leftSection.type !== PROJECT_ACTIVITIES && data.rightSection.type != FUNDING_AGENCY" class="row">
            <div class="col d-flex justify-content-end">
                <div :class="$style['overlap-icon-left']">
                    <img :src="require(`@/assets/images/${data.rightSection.image}`)" style="width: 50px; height: 50px">
                </div>
            </div>
            <div class="col d-flex justify-content-start pt-1">
                <div :class="$style['title-section-left']">
                    <h3>{{data.rightSection.title}}</h3>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div v-if="data.leftSection.type !== PROJECT_ACTIVITIES" class="row d-flex justify-content-end">
            <div class="col-6 ">
                <!-- A specific structure will be rendered based on the specified content inside data.rightSection.content variable-->

                <!-- If Team section -->
                <div v-if="data.rightSection.type === TEAM" class="row w-60 m-5 py-4 pl-4 card">
                    <!-- For each team member render a line that will contain
                    the name and the social links of the person -->
                    <div v-for="(member, i) in data.rightSection.content.team" :key="i" class="row">

                        <!-- Member's name -->
                        <div class="col d-flex justify-content-start">
                            <h6 class="pt-2 text-darker">{{member.name}}</h6>
                        </div>

                        <!-- Member's social links -->
                        <div class="col d-flex justify-content-end">
                            <a v-if="member.links['dblp']" :href="member.links['dblp']" class="px-1">
                                <button type="button" class="btn btn-tumblr btn-icon-only shadow">
                                    <span class="btn-inner--icon"><img :src="require(`@/assets/images/dblp.svg`)" /></span>
                                </button>
                            </a>
                            <a v-if="member.links['gscholar']" :href="member.links['gscholar']" class="px-1">
                                <button type="button" class="btn btn-facebook btn-icon-only shadow">
                                    <span class="btn-inner--icon"><img :src="require(`@/assets/images/google-scholar-white.svg`)" /></span>
                                </button>
                            </a>
                            <a v-if="member.links['linkedin']" :href="member.links['linkedin']" class="px-1">
                                <button type="button" class="btn btn-linkedin btn-icon-only shadow">
                                    <span class="btn-inner--icon"><img :src="require(`@/assets/images/linkedin.svg`)" /></span>
                                </button>
                            </a>
                            <a v-if="member.links['rgate']" :href="member.links['rgate']" class="px-1">
                                <button type="button" class="btn btn-github btn-icon-only shadow">
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
import {
    SideBySideInput
} from "./side-by-side-input";
import GanttChart from "../widgets/GanttChart";

import { convertToGanttChartInput } from "./pv-converters.ts";

import {
    ABOUT,
    FUNDING_AGENCY,
    OBJECTIVES,
    TEAM,
    PROJECT_ACTIVITIES,
} from './section-constants';

export default {
    name: 'SideBySideSection',
    components: {
        GanttChart,
    },
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
    },
    methods: {
        print(sth) {
            console.log(sth);
        },
        getGanttData() {
            return convertToGanttChartInput(this.data.leftSection.content.activities)
        }
    },
}
</script>

<style module>
.overlap-icon-right {
    position: relative;
    right: 35px;
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
    left: 37px;
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

.div-about {
    background-color: white;
    border-radius: 20px;
}
</style>
