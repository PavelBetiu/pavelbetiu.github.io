<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
        <span class="mask bg-gradient-info" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')' }"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 class="text-white">{{this.$route.params.acronym}}</h1>
                    <p class="h3 mb-4 text-white opacity-9">{{this.$route.params.title}}</p>
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
<!-- Sectiune side by side -->
<section class="p-4 m-5 position-relative">
    <div class="row border border-primary">
        <div class="row border border-primary">
            <div class="col border border-primary d-flex justify-content-end pt-3 ">
                <div class="title-section-right">
                    <h3>About</h3>
                </div>
            </div>
            <div class="col border border-primary">
                <div class="overlap-icon-right">
                    <img src="../assets/images/about-icon.svg" style="width: 70px; height: 70px">
                </div>
            </div>
        </div>
        <div class="row border border-primary">
            <div class="col border border-primary d-flex justify-content-end">
                <div class="content-section-right">
                    <div class="d-flex justify-content-center">
                        <p class="h5 text-primary p-2">Project number: </p>
                        <p class="h5 p-2">{{this.$route.params.projectNumber}}</p>
                    </div>
                    <div class="d-flex justify-content-center">
                        <p class="h5 text-primary p-2">Contract number: </p>
                        <p class="h5 p-2">{{this.$route.params.contractNumber}}</p>
                    </div>
                </div>

            </div>
            <div class="col border border-primary">
                <span></span>
            </div>
        </div>
        <div class="row border border-primary">
            <div class="col border border-primary d-flex justify-content-end">
                <div class="overlap-icon-left">
                    <img src="../assets/images/money-svgrepo-com.svg" style="width: 70px; height: 70px">
                </div>
            </div>
            <div class="col border border-primary d-flex justify-content-start pt-3">
                <div class="title-section-left">
                    <h3>Funding Agency</h3>
                </div>
            </div>
        </div>
        <div class="row border border-primary d-flex justify-content-end">
            <div class="col-6 border border-primary">
                <div class="row border border-primary">
                    <div class="col border border-primary">
                        <div class="d-flex justify-content-start">
                            <p class="h5 text-primary p-3">Name: </p>
                            <p class="h5 p-3">{{this.$route.params.fundingAgency}}</p>
                        </div>
                    </div>
                    <div class="col-6 border border-primary">
                        <img :src="require(`../assets/images/ates.jpeg`)" alt="ates" class="shadow-xl rounded logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Sectiune wave -->
<section class="pb-5 position-relative bg-gradient-dark">
    <div class="position-absolute w-100 z-index-1 top-0 mt-n3">
        <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>wave-down</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="#FFFFFF" fill-rule="nonzero">
                    <g id="wave-down">
                        <path d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z" id="Path-Copy-2" transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "></path>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    <div class="container">
        <div class="row pt-7">
            <div class="col-md-8 text-start mb-5 mt-5">
                <h3 class="text-white z-index-1 position-relative">Description</h3>
            </div>
        </div>
        <div class="row pb-8">
            <div class="col-lg-6 col-12">
                <p class="text-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsums</p>
            </div>
            <div class="col-lg-6 col-12">

            </div>
        </div>
    </div>
    <div class="position-absolute w-100 bottom-0 mn-n1 mt-3">
        <svg width="100%" viewBox="0 -1 1920 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>wave-up</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(0.000000, 5.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g id="wave-up" transform="translate(0.000000, -5.000000)">
                        <path d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z" fill="#ffffff"></path>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</section>
<!-- Sectiune side by side -->
<section class="p-4 m-5 position-relative">
    <div class="row border border-primary">
        <div class="row border border-primary">
            <div class="col border border-primary d-flex justify-content-end pt-3 ">
                <div class="title-section-right">
                    <h3>Objectives</h3>
                </div>
            </div>
            <div class="col border border-primary">
                <div class="overlap-icon-right">
                    <img src="../assets/images/objective-icon.svg" style="width: 70px; height: 70px">
                </div>
            </div>
        </div>
        <div class="row border border-primary justify-content-start">
            <div class="col border border-primary d-flex justify-content-end">
                <div class="content-section-right">
                    <!-- <div class="d-flex justify-content-center">
                    <p class="h5 text-primary p-2">Project number: </p>
                    <p class="h5 p-2">{{this.$route.params.projectNumber}}</p>
                </div>
                <div class="d-flex justify-content-center">
                    <p class="h5 text-primary p-2">Contract number: </p>
                    <p class="h5 p-2">{{this.$route.params.contractNumber}}</p>
                </div> -->
                </div>

            </div>
        </div>
        <div class="row border border-primary">
            <div class="col border border-primary d-flex justify-content-end">
                <div class="overlap-icon-left">
                    <img src="../assets/images/team-icon.svg" style="width: 70px; height: 70px">
                </div>
            </div>
            <div class="col border border-primary d-flex justify-content-start pt-3">
                <div class="title-section-left">
                    <h3>Team</h3>
                </div>
            </div>
        </div>
        <div class="row border border-primary d-flex justify-content-end">
            <div class="col-6 border border-primary">
                <!-- <div class="row border border-primary">
                <div class="col border border-primary">
                    <div class="d-flex justify-content-start">
                        <p class="h5 text-primary p-3">Name: </p>
                        <p class="h5 p-3">{{this.$route.params.fundingAgency}}</p>
                    </div>
                </div>
                <div class="col-6 border border-primary">
                    <img :src="require(`../assets/images/ates.jpeg`)" alt="ates" class="shadow-xl rounded logo" />
                </div>
            </div> -->
            </div>
        </div>
    </div>
</section>
<!-- Sectiune wave -->
<section class="pb-5 position-relative bg-gradient-dark">
    <div class="position-absolute w-100 z-index-1 top-0 mt-n3">
        <svg width="100%" viewBox="0 -2 1920 157" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>wave-down</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="#FFFFFF" fill-rule="nonzero">
                    <g id="wave-down">
                        <path d="M0,60.8320331 C299.333333,115.127115 618.333333,111.165365 959,47.8320321 C1299.66667,-15.5013009 1620.66667,-15.2062179 1920,47.8320331 L1920,156.389409 L0,156.389409 L0,60.8320331 Z" id="Path-Copy-2" transform="translate(960.000000, 78.416017) rotate(180.000000) translate(-960.000000, -78.416017) "></path>
                    </g>
                </g>
            </g>
        </svg>
    </div>
    <div class="container min-vh-65">
        <div class="row pt-7">
            <div class="col-md-8 text-start mb-5 mt-5">
                <h3 class="text-white z-index-1 position-relative">Project phases</h3>
            </div>
        </div>
        <div class="row pb-8">
            <div class="col-lg-6 col-12">
                <p class="text-light"></p>
            </div>
            <div class="col-lg-6 col-12">

            </div>
        </div>
    </div>
    <div class="position-absolute w-100 bottom-0 mn-n1 mt-3">
        <svg width="100%" viewBox="0 -1 1920 166" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <title>wave-up</title>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(0.000000, 5.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g id="wave-up" transform="translate(0.000000, -5.000000)">
                        <path d="M0,70 C298.666667,105.333333 618.666667,95 960,39 C1301.33333,-17 1621.33333,-11.3333333 1920,56 L1920,165 L0,165 L0,70 Z" fill="#ffffff"></path>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</section>
</template>

<script>
export default {
    name: 'ProjectView',
    components: {},
    data() {
        return {

        }
    },
    methods: {
        print() {
            console.log(this.$route.params.title);
        }
    }
};
</script>

<style>
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
    right: 50px;
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
    left: 50px;
    z-index: 0;
}

.logo {
    width: 250px;
    height: 200px;
    margin: 0 auto;
    object-position: center;
}
</style>
