<template>
<header class="bg-gradient-dark">
    <div class="page-header min-vh-75">
        <span class="mask bg-gradient-info" v-bind:style="{ 'background-image': 'url(' + require('@/assets/img/curved-images/curved5-small.jpg') + ')' }"></span>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center mx-auto my-auto">
                    <h1 class="text-white">Projects</h1>
                    <p class="lead mb-4 text-white opacity-8">Check out our projects</p>
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
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1)" />
                </g>
            </svg>
        </div>
    </div>
</header>
<section class="p-5 m-5 position-relative">
    <div class="container">
        <ProjectSingle v-for="(p, i) in projects" :key="i" :title="p['title']" :link="p['link']" :isExternalURL="p['isExternalURL']" :img="p['img']" :desc="p['desc']" :imageDesc="p['imageDesc']" :pageInfo="p['pageInfo']"/>
    </div>
</section>
</template>

<script>
import ProjectSingle from "../components/ProjectSingle.vue"

export default {
    name: 'ProjectsView',
    components: {
        ProjectSingle,
    },
    data() {
        return {
            projects: [{
                    title: 'AUTOMATED TEXT EVALUATION AND SIMPLIFICATION',
                    link: 'ates',
                    isExternalURL: false,
                    img: 'ates.jpeg',
                    desc: 'The project wants to enable writers to improve the quality of their writing, in both English and Romanian languages, with immediate feedback when typing the input text through personalized recommendations and highlights of different text elements that can be improved',
                    imageDesc: 'Automated text evaluation for tutors and learners',
                    pageInfo: {
                        'title': 'Lorem ipsum title',
                        'acronym': 'Lorem ipsum acronym',
                        'projectNumber': 'Lorem ipsum project nb',
                        'contractNumber': 'Lorem ipsum contract nb',
                        'fundingAgency': 'Lorem ipsum funding agency',
                        'fundingAgencyLogo': 'Lorem ipsum fa logo',
                        'description': 'Lorem ipsum and some long description',
                        'objectives': 'Lorem ipsum',
                        'team': 'Lorem ipsum',
                        'projectPhases': 'Lorem ipsum',
                        'projectActivities': 'Lorem ipsum',
                        'notableResults': 'Lorem ipsum',
                        'publications': 'Lorem ipsum',
                    }
                },
                {
                    title: 'ROBOTS AND SOCIETY: COGNITIVE SYSTEMS FOR PERSONAL ROBOTS AND AUTONOMOUS VEHICLES (ROBIN)',
                    link: 'robin',
                    isExternalURL: false,
                    img: 'robin.jpeg',
                    desc: 'User-centered project designing software and services modules for the use of robots in an interconnected digital society that enables companies to develop complex, intelligent and performing products and services for these users as well as society as a whole.',
                    imageDesc: 'Use of robots in an interconnected digital society',
                    pageInfo: {
                        'title': 'Lorem ipsum',
                        'acronym': 'Lorem ipsum',
                        'projectNumber': 'Lorem ipsum',
                        'contractNumber': 'Lorem ipsum',
                        'fundingAgency': 'Lorem ipsum',
                        'fundingAgencyLogo': 'Lorem ipsum',
                        'description': 'Lorem ipsum',
                        'objectives': 'Lorem ipsum',
                        'team': 'Lorem ipsum',
                        'projectPhases': 'Lorem ipsum',
                        'projectActivities': 'Lorem ipsum',
                        'notableResults': 'Lorem ipsum',
                        'publications': 'Lorem ipsum',
                    }
                },
                {
                    title: 'VIRTUAL LIBRARY OF ROMANIAN LITERATURE: SYSTEMATIZATION AND DIGITIZATION (INTELLIT)',
                    link: 'intelit',
                    isExternalURL: false,
                    img: 'intellit_picture.jpg',
                    desc: 'Development of automated software tools for semantic search and analysis in the Romanian literary heritage based on advanced Natural Language Processing techniques that facilitate the analysis of large volumes of text.',
                    imageDesc: 'Semantic search and analysis in the Romanian literary heritage',
                    pageInfo: {
                        'title': 'Lorem ipsum',
                        'acronym': 'Lorem ipsum',
                        'projectNumber': 'Lorem ipsum',
                        'contractNumber': 'Lorem ipsum',
                        'fundingAgency': 'Lorem ipsum',
                        'fundingAgencyLogo': 'Lorem ipsum',
                        'description': 'Lorem ipsum',
                        'objectives': 'Lorem ipsum',
                        'team': 'Lorem ipsum',
                        'projectPhases': 'Lorem ipsum',
                        'projectActivities': 'Lorem ipsum',
                        'notableResults': 'Lorem ipsum',
                        'publications': 'Lorem ipsum',
                    }
                },
                {
                    title: 'EMPOWERING ELDERLY PEOPLE IN CONVERSATIONS WITH PROFESSIONALS (PREPDOC)',
                    link: 'prepdoc',
                    isExternalURL: false,
                    img: 'prepdoc_picture.jpg',
                    desc: 'Application for elderly people to prepare themselves for conversations with healthcare professionals, so that they arrive at a consult with a better description of their situation, and trust in the professional. Bring the application to the market (healthcare practices, nursing homes).',
                    imageDesc: 'Elderly people can prepare themselves for conversations with healthcare professionals',
                    pageInfo: {
                        'title': 'Lorem ipsum',
                        'acronym': 'Lorem ipsum',
                        'projectNumber': 'Lorem ipsum',
                        'contractNumber': 'Lorem ipsum',
                        'fundingAgency': 'Lorem ipsum',
                        'fundingAgencyLogo': 'Lorem ipsum',
                        'description': 'Lorem ipsum',
                        'objectives': 'Lorem ipsum',
                        'team': 'Lorem ipsum',
                        'projectPhases': 'Lorem ipsum',
                        'projectActivities': 'Lorem ipsum',
                        'notableResults': 'Lorem ipsum',
                        'publications': 'Lorem ipsum',
                    }
                },
                {
                    title: 'REVITALIZING LIBRARIES AND CULTURAL HERITAGE THROUGH ADVANCED TECHNOLOGIES (LIB2LIFE)',
                    link: 'lib2life',
                    isExternalURL: false,
                    img: 'lib2life_picture.jpg',
                    desc: 'Implements a mechanism for indexing and searching for relevant documents based on keywords and providing documents similar to a given document.',
                    imageDesc: 'Relevant documents are provided based on keywords and through analyses of other documents',
                    pageInfo: {
                        'title': 'Lorem ipsum',
                        'acronym': 'Lorem ipsum',
                        'projectNumber': 'Lorem ipsum',
                        'contractNumber': 'Lorem ipsum',
                        'fundingAgency': 'Lorem ipsum',
                        'fundingAgencyLogo': 'Lorem ipsum',
                        'description': 'Lorem ipsum',
                        'objectives': 'Lorem ipsum',
                        'team': 'Lorem ipsum',
                        'projectPhases': 'Lorem ipsum',
                        'projectActivities': 'Lorem ipsum',
                        'notableResults': 'Lorem ipsum',
                        'publications': 'Lorem ipsum',
                    }
                },
                {
                    title: 'EARLY NUTRITION EACADEMY SOUTHEAST ASIA (ENEA SEA)',
                    link: 'https://www.enea-sea.eu/en/home/',
                    isExternalURL: true,
                    img: 'enea_logo_cropped.jpg',
                    desc: 'ENeA SEA develops innovative e-learning for practicing doctors in the field of early nutrition in Southeast Asia. EU, Thai and Malaysian partners comprised of universities/institutions and professional organizations in nutrition are jointly developing science-based education, tailored to the needs of the Southeast Asian region. The goal of the project is to offer the latest recommendations for everyday practice and maximise outreach to the wider healthcare community.',
                    imageDesc: 'Innovative e-learning for practicing doctors in the field of early nutrition in Southeast Asia',
                    pageInfo: {

                    }
                },
                {
                    title: 'INNOVATIVE TECHNOLOGY HUB BASED ON SEMANTIC MODELS AND HIGH PERFORMANCE COMPUTING (HUB-TECH)',
                    link: 'hub-tech',
                    isExternalURL: false,
                    img: 'hub_screenshot.png',
                    desc: 'HUB-TECH is an innovative technology hub that aggregates technological and human resources to facilitate the process of writing research topics/optimized technical solutions by semantically recommending relevant textual resources to be consulted (for example, scientific papers, doctoral theses, patents, results of RDI projects, etc.), introduction of mechanisms for partial generation of documentation, and creation of a discussion forum to provide personalized support for the marketing of products and services.',
                    imageDesc: 'Relevant textual resources to be consulted (scientific papers, doctoral theses, patents, etc.) to facilitate the process of writing research topics',
                    pageInfo: {
                        'title': 'Lorem ipsum',
                        'acronym': 'Lorem ipsum',
                        'projectNumber': 'Lorem ipsum',
                        'contractNumber': 'Lorem ipsum',
                        'fundingAgency': 'Lorem ipsum',
                        'fundingAgencyLogo': 'Lorem ipsum',
                        'description': 'Lorem ipsum',
                        'objectives': 'Lorem ipsum',
                        'team': 'Lorem ipsum',
                        'projectPhases': 'Lorem ipsum',
                        'projectActivities': 'Lorem ipsum',
                        'notableResults': 'Lorem ipsum',
                        'publications': 'Lorem ipsum',
                    }
                },
                {
                    title: 'REALISING AN APPLIED GAMING ECOSYSTEM (RAGE)',
                    link: 'http://rageproject.eu/',
                    isExternalURL: true,
                    img: 'rage_logo.png',
                    desc: 'RAGE aims to develop, transform and enrich advanced technologies from the leisure games industry into self-contained gaming assets (i.e. solutions showing economic value potential) that support game studios at developing applied games easier, faster and more cost-effectively. These assets will be available along with a large volume of high-quality knowledge resources through a self-sustainable Ecosystem, which is a social space that connects research, gaming industries, intermediaries, education providers, policy makers and end-users. RAGE - Realising an Applied Gaming Eco-system, is a 48-months Technology and Know-How driven Research and Innovation project co-funded by EU Framework Programme for Research and Innovation, Horizon 2020.',
                    imageDesc: 'Delivering access to advanced gaming technology resources and state-of-the-art knowledge to develop Applied Games easier, faster and more cost-effectively',
                    pageInfo: {
                        
                    }
                },
                {
                    title: 'LANGUAGE TECHNOLOGIES FOR LIFELONG LEARNING (LTFLL)',
                    link: 'http://www.ltfll-project.org/',
                    img: 'ltfll-logo3.png',
                    isExternalURL: true,
                    desc: 'The outcomes of the LTfLL project are prototypes of next-generation services built on advanced research on the application of language technologies in education. Their exploitation to a consumer market requires some further development (on usability, transferability to other domains and other learning environments, etc.).The target groups (as targeted people) of the LTfLL outcomes can be grouped in three: Researchers and developers, Content service providers and End-users of the LTfLL services. The LTfLL project is partially supported/co-funded by the European Union under the Information and Communication Technologies (ICT) theme of the 7th Framework Programme for R&D (FP7-ICT-2007-1-4.1)',
                    imageDesc: 'Finding new innovative ways to tackle this newest challenge is one of the ambitions of the Language Technologies for Lifelong Learning project (LTfLL). Its two baseline objectives are: (a) helping people learn, and, (b) helping tutors/teachers to support learners.',
                    pageInfo: {

                    }
                }
            ]
        }
    }
};
</script>

<style>

</style>
