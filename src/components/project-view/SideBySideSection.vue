<template>
<section class="p-4 m-5 position-relative">
    <div class="row ">

        <!-- Left side of the section -->
        <!-- Title and icon -->
        <div class="row">
            <div class="col  d-flex justify-content-end pt-3 ">
                <div class="title-section-right">
                    <h3>{{leftTitle}}</h3>
                </div>
            </div>
            <div class="col ">
                <div class="overlap-icon-right">
                    <img :src="require(`@/assets/images/${leftImage}`)" style="width: 70px; height: 70px">
                </div>
            </div>
        </div>

        <!-- Content -->
        <div v-if="leftType !== PROJECT_ACTIVITIES" class="row justify-content-start m-5">
            <div class="col-6  d-flex justify-content-end">
                <!-- A specific structure will be rendered based on the specified content inside leftContent variable-->

                <!-- If About section -->
                <div v-if="leftType === ABOUT" class="content-section-left">
                    <div class="d-flex justify-content-start pr-6">
                        <p class="h5 text-primary p-2">Project number: </p>
                        <p class="h5 p-2">{{leftContent.project_number}}</p>
                    </div>
                    <div class="d-flex justify-content-start">
                        <p class="h5 text-primary p-2">Contract number: </p>
                        <p class="h5 p-2">{{leftContent.contract_number}}</p>
                    </div>
                </div>

                <!-- If Objectives section -->
                <div v-if="leftType === OBJECTIVES" class="content-section-left">
                    <p v-for="(objective,i) in leftContent.objectives" :key="i" class="text-darker p-3 h5">{{objective}}</p>
                </div>
            </div>
        </div>

        <!-- Content If Project Activities section -->
        <div v-if="leftType === PROJECT_ACTIVITIES" class="container p-5">
            <div v-for="(activity, i) in leftContent.activities" :key="i" class="row p-4 highlight rounded-2 d-flex justify-content-center">
                <div class="col-6 d-flex justify-content-center">
                    <h5 class="text-dark z-index-1 position-relative">{{activity.status}}</h5>
                </div>
                <div class="col">
                    <h5 class="text-dark z-index-1 position-relative">{{activity.description}}</h5>
                </div>
            </div>
        </div>

        <!-- Right side of the section -->
        <!-- Icon and title -->
        <!-- Project activities doesn't have a right section -->
        <div v-if="leftType !== PROJECT_ACTIVITIES" class="row">
            <div class="col  d-flex justify-content-end">
                <div class="overlap-icon-left">
                    <img :src="require(`@/assets/images/${rightImage}`)" style="width: 70px; height: 70px">
                </div>
            </div>
            <div class="col  d-flex justify-content-start pt-3">
                <div class="title-section-left">
                    <h3>{{rightTitle}}</h3>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div v-if="leftType !== PROJECT_ACTIVITIES" class="row  d-flex justify-content-end">
            <div class="col-6 ">
                <!-- A specific structure will be rendered based on the specified content inside rightContent variable-->

                <!-- If Funding agency section -->
                <div v-if="rightType === FUNDING_AGENCY" class="row ">
                    <div class="col-5">
                        <div class="d-flex justify-content-start pl-6">
                            <p class="h5 text-primary p-3">Name: </p>
                            <p class="h5 p-3">{{rightContent.name}}</p>
                        </div>
                    </div>
                    <div class="col-6 ">
                        <img :src="require(`@/assets/images/${rightContent.logo}`)" alt="ates" class="shadow-xl rounded logo" />
                    </div>
                </div>

                <!-- If Team section -->
                <div v-if="rightType === TEAM" class="row m-5">
                    <!-- For each team member render a line that will contain
                    the name and the social links of the person -->
                    <div v-for="(member, i) in rightContent.team" :key="i" class="row ">

                        <!-- Member's name -->
                        <div class="col-4  d-flex justify-content-start">
                            <h5 class="pt-2 text-darker">{{member.name}}</h5>
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
    props: ['leftType', 'leftTitle', 'leftContent', 'leftImage', 'rightType', 'rightTitle', 'rightContent', 'rightImage'],
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
        debugPrint() {
            console.log(this.leftType);
            console.log(this.leftTitle);
            console.log(this.leftContent);
            console.log(this.leftImage);
            console.log(this.rightType);
            console.log(this.rightTitle);
            console.log(this.rightContent);
            console.log(this.rightImage);
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
    background: rgb(53, 0, 102);
    /* make this whatever you want */
    -webkit-text-fill-color: rgb(255, 255, 255);
}
</style>
