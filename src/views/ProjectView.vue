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
<SideBySideSection :leftType="ABOUT" :leftTitle="sections['about'].title" :leftContent="sections['about'].content" :leftImage="sections['about'].image" :rightType="FUNDING_AGENCY" :rightTitle="sections['funding_agency'].title" :rightContent="sections['funding_agency'].content" :rightImage="sections['funding_agency'].image" />

<!-- Description section -->
<WaveSection :type="DESCRIPTION" :title="sections['description'].title" :content="sections['description'].content" />

<!-- Objective and Team section -->
<SideBySideSection :leftType="OBJECTIVES" :leftTitle="sections['objectives'].title" :leftContent="sections['objectives'].content" :leftImage="sections['objectives'].image" :rightType="TEAM" :rightTitle="sections['team'].title" :rightContent="sections['team'].content" :rightImage="sections['team'].image" />

<!-- Project Phases section -->
<WaveSection :type="PROJECT_PHASES" :title="sections['project_phases'].title" :content="sections['project_phases'].content" />

<!-- Project Activities section -->
<SideBySideSection :leftType="PROJECT_ACTIVITIES" :leftTitle="sections['project_activities'].title" :leftContent="sections['project_activities'].content" :leftImage="sections['project_activities'].image" />

<!-- Publications section (Journals and Conferences) -->
<WaveSection :type="PUBLICATIONS" :title="sections['publications'].title" :content="sections['publications'].content" />
</template>

<script>
import SideBySideSection from '../components/project-view/SideBySideSection.vue'
import WaveSection from '../components/project-view/WaveSection.vue'

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
    data() {
        return {
            sections: {
                about: {
                    title: 'About',
                    content: {
                        project_number: 'PN-III-P1-1.1-TE-2019-2209',
                        contract_number: 'TE 70 / 2020',
                    },
                    image: 'about-icon.svg'
                },
                funding_agency: {
                    title: 'Funding Agency',
                    content: {
                        name: 'UEFISCDI',
                        logo: 'funding_agencies_logos/uefiscdi.png'
                    },
                    image: 'funding-agency-icon.svg'
                },
                description: {
                    title: 'Description',
                    content: {
                        description: 'Writing is an essential learning activity that requires both practice and experience. Writing is performed in academic environments, at workspaces, or for personal purposes, and people\'s ability to clearly and concisely express their ideas in a coherent manner is an essential skill, difficult to both evaluate and improve.\n\nATES (Automated Text Evaluation and Simplification) aims to help users improve the quality of their writing, in both English and Romanian languages, by providing immediate feedback, tailored to their writing style.\n\nComplex Natural Language Processing techniques, including deep learning models, will be used to automatically score essays relying on textual complexity indices, together with word embeddings, applied on annotated datasets of documents.\n\nIn addition, textual complexity indices, combined with various features of the cohesion graph, will trigger rules to improve the text by comparison to baseline domain-specific documents.\n\nThe system will also make suggestions for text simplification in order to improve its readability. For this matter, machine translation models will be trained on existing text simplification datasets, augmented with paraphrases, and ordered by readability scores.\n\nMoreover, the overall complexity of the text will be measured by automatically computing word Age of Acquisition (AoA) scores through incremental semantic models and regression analyses, in order to approximate the age when people adequately learn a word’s meaning.'
                    }
                },
                objectives: {
                    title: 'Objectives',
                    content: {
                        objectives: [
                            'The general objective of the ATES (Automated Text Evaluation Simplification) project is to enable writers to improve the quality of their writing, in both English and Romanian languages.',
                            'Writers will receive immediate feedback when typing the input text through personalized recommendations and highlights of different text elements that can be improved with an easy-to-use and intuitive user interface.',
                            'The system will automatically evaluate the texts and provide guidance and instructions to allow users to adjust them accordingly to the targeted audience (e.g., belletristic, scientific writing styles), through text adjustments and simplification mechanisms.',
                            'Our aim is to increase the reading ease of resulted materials and to incrementally refine the user\'s writing style, transcending towards a higher writing proficiency.',
                            'This objective will consider multiple experiments performed towards assessing text difficulty, before and after any automated adjustments are made.'
                        ]
                    },
                    image: 'objective-icon.svg'
                },
                team: {
                    title: 'Team',
                    content: {
                        team: [{
                                name: 'Mihai Dascalu',
                                links: {
                                    dblp: 'http://dblp1.uni-trier.de/pers/hd/d/Dascalu:Mihai',
                                    gscholar: 'https://scholar.google.com/citations?user=3L9yY8UAAAAJ&hl=en',
                                    linkedin: 'https://www.linkedin.com/in/mihai-dascalu-8a57ab10a',
                                    rgate: 'https://www.researchgate.net/profile/Mihai_Dascalu'
                                }
                            },
                            {
                                name: 'Stefan Ruseti',
                                links: {
                                    dblp: 'http://dblp.uni-trier.de/pers/hd/r/Ruseti:Stefan',
                                    gscholar: 'https://scholar.google.com/citations?user=aEyJTykAAAAJ&hl=en',
                                    linkedin: 'https://www.linkedin.com/in/stefan-ruseti-97a011a1',
                                    rgate: 'https://www.researchgate.net/profile/Stefan_Ruseti'
                                }
                            },
                            {
                                name: 'Dragos Corlatescu',
                                links: {
                                    dblp: 'https://dblp.uni-trier.de/pers/hd/c/Corlatescu:Dragos',
                                    gscholar: 'https://scholar.google.com/citations?user=rfr85cYAAAAJ&hl=en',
                                    linkedin: 'https://www.linkedin.com/in/dragos-corlatescu-0b815a78',
                                    rgate: 'https://www.researchgate.net/profile/Dragos_Georgian_Corlatescu'
                                }
                            },
                            {
                                name: 'Gabriel Dutu-Robu',
                                links: {
                                    dblp: 'http://dblp.uni-trier.de/pers/hd/g/Gutu:Gabriel=Marius',
                                    gscholar: 'https://scholar.google.com/citations?user=-pGqq7QAAAAJ&hl=en',
                                    linkedin: 'https://www.linkedin.com/in/gabrielgutu',
                                    rgate: 'https://www.researchgate.net/profile/Gabriel_Gutu'
                                }
                            },
                            {
                                name: 'Irina Toma',
                                links: {
                                    dblp: 'http://dblp.uni-trier.de/pers/hd/t/Toma:Irina',
                                    gscholar: 'https://scholar.google.com/citations?user=tJ8GnRUAAAAJ&hl=en',
                                    linkedin: 'https://www.linkedin.com/in/irina-toma-b51146151/',
                                    rgate: 'https://www.researchgate.net/profile/Irina_Toma'
                                }
                            },
                        ]
                    },
                    image: 'team-icon.svg'
                },
                project_phases: {
                    title: 'Project phases',
                    content: {
                        phases: [{
                                title: 'Phase 1 - 2020',
                                description: 'Gather relevant datasets'
                            },
                            {
                                title: 'Phase 2 - 2021',
                                description: 'Development of services for automatic essay scoring (O1), text simplification (O3), and prediction of AoA scores at word level (O4) - initial version'
                            },
                            {
                                title: 'Phase 3 - 2022',
                                description: 'Development of automatic essay scoring services (O1), automate writing evaluation (O2), text simplification (O3), and prediction of AoA scores at word level (O4) - final version'
                            },
                        ]
                    },
                },
                project_activities: {
                    title: 'Project activities',
                    content: {
                        activities: [{
                                status: 'COMPLETED (PHASE 1)',
                                description: 'A1. Gather relevant datasets'
                            },
                            {
                                status: 'COMPLETED (PHASE 2)',
                                description: 'A2. Build multi-lingual automated AoA models'
                            },
                            {
                                status: 'COMPLETED (PHASE 1)',
                                description: 'A2.1. Create baseline English model'
                            },
                            {
                                status: 'COMPLETED (PHASE 2)',
                                description: 'A2.2. Train AoA models for additional languages'
                            },
                            {
                                status: 'COMPLETED (PHASE 2)',
                                description: 'A2.3. Bridge word learning rates modeled by automated AoA scores across languages',
                            },
                            {
                                status: 'ONGOING',
                                description: 'A3. Automated Essay Scoring',
                            },
                            {
                                status: 'COMPLETED (PHASE 2)',
                                description: 'A3.1. Train models that combine ReaderBench textual complexity indices with word embeddings',
                            },
                            {
                                status: 'COMPLETED (PHASE 2)',
                                description: 'A3.2. Assess multi-lingual AES models',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A3.3. Develop and deploy a dedicated service that takes as input a collection of documents and their scores and establishes the most predictive model',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A4. Automated Writing Evaluation',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A4.1. Run experiments on paragraph restructuring',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A4.2. Generate rules for a given domain based on textual complexity indices and PCA components to provide feedback',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A4.3. Detect out-of-place phrases',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A5. Text simplification',
                            },
                            {
                                status: 'COMPLETED (PHASE 2)',
                                description: 'A5.1. Prepare datasets consisting of proper alignments',
                            },
                            {
                                status: 'COMPLETED (PHASE 2)',
                                description: 'A5.2. Train multiple sequence-to-sequence models',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A5.3. Analyze results and iteratively improve methods',
                            },
                            {
                                status: 'COMPLETED (PHASE 3)',
                                description: 'A6. Dissemination of results',
                            },
                        ]
                    },
                    image: 'task.svg'
                },
                publications: {
                    title: 'Publications',
                    content: {
                        journals: [
                            '1.Dascalu, M.-D., Ruseti, S., Dascalu, M., McNamara, D. S., Carabas, M., Rebedea, T., & Trausan-Matu, S. (2021). Before and during COVID-19: A Cohesion Network Analysis of Students’ Online Participation in Moodle Courses. Computers in Human Behavior, 121. (Q1 journal, WOS:000651382100007, IF: 6,829)', 
                            '2.Nicula, B., Dascalu, M., Newton, N., Orcutt, E., & McNamara, D. S. (2021). Automated Paraphrase Quality Assessment using Language Models and Transfer Learning. Computers, 10(12).', 
                            '3.Botarleanu, R.-M., Dascalu, M., Watanabe, M., Crossley, S. A., & McNamara, D. S. (submitted). Age of Exposure 2.0: Estimating Word Complexity using Iterative Models of Word Embeddings. Behavior Research Methods. (Q1 journal, IF: 6,242)',
                            '4.Corlatescu, D., Ruseti, S., & Dascalu, M. (submitted). ReaderBench Learns Russian: Multilevel Analysis of Russian Text Characteristics. Russian Journal of Linguistics. (Q1 journal)',
                            '5.Masala, M., Ruseti, S., Rebedea, T., Dascalu, M., Gutu-Robu, G., & Trausan-Matu, S. (submitted). Identifying the Structure of CSCL Conversations using String Kernels. Mathematics. (Q1 journal, IF: 2,258)'
                        ],
                        conferences: [
                            '1.Zaharia, G.-E., Smadu, R.-A., Cercel, D.-C., & Dascalu, M. (2022). Domain Adaptation in Multilingual and Multi-Domain Monolingual Settings for Complex Word Identification. In 60th Annual Meeting of the Association for Computational Linguistics (ACL22) (pp. 70–80). Dublin, Ireland: ACL. (Conferinta Categoria A* conferm CORE Ranking)', 
                            '2.Botarleanu, R., Dascalu, M., Allen, L. K., Crossley, S. A., & McNamara, D. S. (2022). Multitask Summary Scoring with Longformers. In 23rd Int. Conf. on Artificial Intelligence in Education (AIED 2022) (pp. 756–761). Durham, UK (Online): Springer. (Conferinta Categoria A conferm CORE Ranking)',
                            '3.Botarleanu, R.-M., Dascalu, M., Crossley, S. A., & McNamara, D. S. (2022). Automated Paragraph Detection using Cohesion Network Analysis and Clustering. In 7th Int. Conf. on Smart Learning Ecosystems and Regional Development (SLERD 2022). Bucharest, Romania: Springer.',
                            '4.Dutulescu, A., Ruseti, S., & Dascalu, M. (2022). Unsupervised Extractive Summarization with BERT. In 24th International Symposium on Symbolic and Numeric Algorithms for Scientific Computing (SYNASC 2022). Linz, Austria (Online): IEEE.',
                            '5.Botarleanu, R.-M., Dascalu, M., Watanabe, M., McNamara, D. S., & Crossley, S. A. (2021). Multilingual Age of Exposure. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 77–87). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                            '6.Masala, M., Ruseti, S., Dascalu, M., & Dobre, C. (2021). Extracting and Clustering Main Ideas from Student Feedback using Language Models. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 282–292). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                            '7.Ruseti, S., Dascalu, M.-D., Corlatescu, D.-G., Dascalu, M., Trausan-Matu, S., & McNamara, D. S. (2021). Exploring Dialogism using Language Models. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 296–301). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                            '8.Corlatescu, D.-G., Dascalu, M., & McNamara, D. S. (2021). Automated Model of Comprehension v2.0. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 119–123). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                            '9.Niculescu, M., Ruseti, S., & Dascalu, M. (2021). RoGPT2: Romanian GPT2 for Text Generation. In 33rd Int. Conf. on Tools with Artificial Intelligence (ICTAI 2021). Washington DC, USA (Online): IEEE. (Category B conference in accordance to CORE Ranking)',
                            '10.Nicula, B., Dascalu, M., Newton, N., Orcutt, E., & McNamara, D. S. (2021). Automated Paraphrase Quality Assessment using Recurrent Neural Networks and Language Models. In 17th Int. Conf. on Intelligent Tutoring Systems (ITS 2021) (pp. 321–328). Athens, Greece (Online): Springer. (Category B conference in accordance to CORE Ranking)',
                            '11.Botarleanu, R.-M., Dascalu, M., Allen, L. K., Crossley, S. A., & McNamara, D. S. (2021). Automated Summary Scoring with ReaderBench. In 17th Int. Conf. on Intelligent Tutoring Systems (ITS 2021) (pp. 310–320). Athens, Greece (Online): Springer. (Category B conference in accordance to CORE Ranking)',
                            '12.Ionita, R. F., Corlatescu, D.-G., Dascalu, M., & McNamara, D. S. (2021). Predicting the Global Impact of Authors from the Learning Analytics Community – A Case Study grounded in CNA. In 23rd Conference on Control Systems and Computer Science (pp. 439–446). Bucharest, Romania (Online): IEEE.',
                            '13.Dascalu, M.-D., Ruseti, S., Dascalu, M., McNamara, D. S., & Trausan-Matu, S. (2021). Dialogism Meets Language Models for Evaluating Involvement in CSCL Conversations. In 6th Int. Conf. on Smart Learning Ecosystems and Regional Development (SLERD 2021) (pp. 67–78). Bucharest, Romania (Online): Springer.',
                            '14.Corlatescu, D.-G., Ruseti, S., & Dascalu, M. (2021). Romanian Syllabification using Deep Neural Networks. In 6th Int. Conf. on Smart Learning Ecosystems and Regional Development (SLERD 2021) (pp. 93–102). Bucharest, Romania (Online): Springer.'
                        ]
                    }
                },
            },
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
}
</script>

<style>
</style>
