<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
        <span class="mask bg-gradient-info" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved8.jpg') + ')' }"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 class="text-white">Services</h1>
                    <p class="lead mb-4 text-white opacity-8">Live demo of our projects</p>
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
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(39,234,245,0.8)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255, 125, 0, 0.8)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(180, 9, 254, 0.8)" />
                    <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="#f8f9fa" />
                </g>
            </svg>
        </div>
    </div>
</header>
<div class="body">
<section class="p-5 position-relative">
    <div class="container">
		<div v-for="i in Math.ceil(servicesKeys.length / 3)" :set="idx1 = i - 1" :key="i - 1">
			<div class="row">
				<div v-for="j in 3" :set="idx2 = (j-1) + (i-1) * 3" :key="(j-1) + (i-1) * 3" class="col-md-4">
					<ServiceCard v-if="idx2 < servicesKeys.length" :image="services[servicesKeys[idx2]].image" :title="services[servicesKeys[idx2]].title" :languages="services[servicesKeys[idx2]].languages" :link="services[servicesKeys[idx2]].link" :active="services[servicesKeys[idx2]].active" />
				</div>
			</div>
			<hr>
		</div>
    </div>
</section>
</div>
</template>

<script>
import ServiceCard from "../components/ServiceCard.vue"

export default {
    name: 'demo',
    components: {
        ServiceCard,
    },
	methods: {
		debugPrint: function(sth) {
			console.log(sth)
		}
	},
    data() {
        return {
            services: {
                cscl: {
					title: "CSCL",
                    languages: ['English', 'French', 'Romanian'],
                    link: '/services/cscl',
                    image: 'demo_cscl.png',
                    active: true
                },
                qgen: {
                    title: "QUESTION GENERATION",
                    languages: ['English'],
                    link: '/services/question-generation',
                    image: 'demo_qgen.png',
                    active: true
                },
                text_analysis: {
                    title: "TEXT ANALYSIS",
                    languages: ['English', 'Romanian'],
                    link: '/services/text-analysis',
                    image: 'ta_demo.png',
                    active: true
                },
                text_classification: {
                    title: "TEXT CLASSIFICATION",
                    languages: ['English', 'French', 'Romanian', 'Portuguese'],
                    link: '/datasets',
                    image: 'tc_demo.jpeg',
                    active: true
                },
                mdcna: {
					title: "MULTI-DOCUMENT CNA",
                    languages: ['English', 'French'],
                    link: '/services/multi-document-cna',
                    image: 'demo-cna.png',
                },
                keyw: {
					title: "KEYWORDS",
                    keyw: ['English', 'French'],
                    link: '/services/keywords',
                    image: 'demo_keywords.png',
                },
                amoc: {
					title: "AMOC",
                    languages: ['English', 'French'],
                    link: '/services/amoc',
                    image: 'demo_cm.png',
                },
            },
        }
    },
	computed: {
		servicesKeys: {
			get: function() {
				return Object.keys(this.services)
			}
		}
	}
}
</script>

<style>
.body {
    background-color: #f8f9fa;
}
</style>
