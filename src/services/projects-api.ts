import { ProjectDTOLong, ProjectDTOShort } from "@/data-objects/project-dto";

export class ProjectsAPI {
    private static readonly projectsShort: ProjectDTOShort[] = [
        {
            title: 'AUTOMATED TEXT EVALUATION AND SIMPLIFICATION',
            link: 'projects/ates',
            image: 'ates.jpeg',
            description: 'The project wants to enable writers to improve the quality of their writing, in both English and Romanian languages, with immediate feedback when typing the input text through personalized recommendations and highlights of different text elements that can be improved',
            imageDescription: 'Automated text evaluation for tutors and learners',
        },
        {
            title: 'ROBOTS AND SOCIETY: COGNITIVE SYSTEMS FOR PERSONAL ROBOTS AND AUTONOMOUS VEHICLES (ROBIN)',
            link: 'projects/robin',
            image: 'robin.jpeg',
            description: 'User-centered project designing software and services modules for the use of robots in an interconnected digital society that enables companies to develop complex, intelligent and performing products and services for these users as well as society as a whole.',
            imageDescription: 'Use of robots in an interconnected digital society',
        },
        {
            title: 'VIRTUAL LIBRARY OF ROMANIAN LITERATURE: SYSTEMATIZATION AND DIGITIZATION (INTELLIT)',
            link: 'projects/intelit',
            image: 'intellit_picture.jpg',
            description: 'Development of automated software tools for semantic search and analysis in the Romanian literary heritage based on advanced Natural Language Processing techniques that facilitate the analysis of large volumes of text.',
            imageDescription: 'Semantic search and analysis in the Romanian literary heritage',
        },
        {
            title: 'EMPOWERING ELDERLY PEOPLE IN CONVERSATIONS WITH PROFESSIONALS (PREPDOC)',
            link: 'projects/prepdoc',
            image: 'prepdoc_picture.jpg',
            description: 'Application for elderly people to prepare themselves for conversations with healthcare professionals, so that they arrive at a consult with a better description of their situation, and trust in the professional. Bring the application to the market (healthcare practices, nursing homes).',
            imageDescription: 'Elderly people can prepare themselves for conversations with healthcare professionals',
        },
        {
            title: 'REVITALIZING LIBRARIES AND CULTURAL HERITAGE THROUGH ADVANCED TECHNOLOGIES (LIB2LIFE)',
            link: 'projects/lib2life',
            image: 'lib2life_picture.jpg',
            description: 'Implements a mechanism for indexing and searching for relevant documents based on keywords and providing documents similar to a given document.',
            imageDescription: 'Relevant documents are provided based on keywords and through analyses of other documents',
        },
        {
            title: 'EARLY NUTRITION EACADEMY SOUTHEAST ASIA (ENEA SEA)',
            link: 'https://www.enea-sea.eu/en/home/',
            image: 'enea_logo_cropped.jpg',
            description: 'ENeA SEA develops innovative e-learning for practicing doctors in the field of early nutrition in Southeast Asia. EU, Thai and Malaysian partners comprised of universities/institutions and professional organizations in nutrition are jointly developing science-based education, tailored to the needs of the Southeast Asian region. The goal of the project is to offer the latest recommendations for everyday practice and maximise outreach to the wider healthcare community.',
            imageDescription: 'Innovative e-learning for practicing doctors in the field of early nutrition in Southeast Asia',
        },
        {
            title: 'INNOVATIVE TECHNOLOGY HUB BASED ON SEMANTIC MODELS AND HIGH PERFORMANCE COMPUTING (HUB-TECH)',
            link: 'projects/hub-tech',
            image: 'hub_screenshot.png',
            description: 'HUB-TECH is an innovative technology hub that aggregates technological and human resources to facilitate the process of writing research topics/optimized technical solutions by semantically recommending relevant textual resources to be consulted (for example, scientific papers, doctoral theses, patents, results of RDI projects, etc.), introduction of mechanisms for partial generation of documentation, and creation of a discussion forum to provide personalized support for the marketing of products and services.',
            imageDescription: 'Relevant textual resources to be consulted (scientific papers, doctoral theses, patents, etc.) to facilitate the process of writing research topics',
        },
        {
            title: 'REALISING AN APPLIED GAMING ECOSYSTEM (RAGE)',
            link: 'http://rageproject.eu/',
            image: 'rage_logo.png',
            description: 'RAGE aims to develop, transform and enrich advanced technologies from the leisure games industry into self-contained gaming assets (i.e. solutions showing economic value potential) that support game studios at developing applied games easier, faster and more cost-effectively. These assets will be available along with a large volume of high-quality knowledge resources through a self-sustainable Ecosystem, which is a social space that connects research, gaming industries, intermediaries, education providers, policy makers and end-users. RAGE - Realising an Applied Gaming Eco-system, is a 48-months Technology and Know-How driven Research and Innovation project co-funded by EU Framework Programme for Research and Innovation, Horizon 2020.',
            imageDescription: 'Delivering access to advanced gaming technology resources and state-of-the-art knowledge to develop Applied Games easier, faster and more cost-effectively',
        },
        {
            title: 'LANGUAGE TECHNOLOGIES FOR LIFELONG LEARNING (LTFLL)',
            link: 'http://www.ltfll-project.org/',
            image: 'ltfll-logo3.png',
            description: 'The outcomes of the LTfLL project are prototypes of next-generation services built on advanced research on the application of language technologies in education. Their exploitation to a consumer market requires some further development (on usability, transferability to other domains and other learning environments, etc.).The target groups (as targeted people) of the LTfLL outcomes can be grouped in three: Researchers and developers, Content service providers and End-users of the LTfLL services. The LTfLL project is partially supported/co-funded by the European Union under the Information and Communication Technologies (ICT) theme of the 7th Framework Programme for R&D (FP7-ICT-2007-1-4.1)',
            imageDescription: 'Finding new innovative ways to tackle this newest challenge is one of the ambitions of the Language Technologies for Lifelong Learning project (LTfLL). Its two baseline objectives are: (a) helping people learn, and, (b) helping tutors/teachers to support learners.',
        }
    ]
    private static readonly projectsLong: ProjectDTOLong[] = [
        {
            title: 'AUTOMATED TEXT EVALUATION AND SIMPLIFICATION',
            acronym: 'ATES',
            projectNumber: 'PN-III-P1-1.1-TE-2019-2209',
            contractNumber: 'TE 70 / 2020',
            fundingAgency: {
                name: 'UEFISCDI',
                logo: 'funding_agencies_logos/uefiscdi.png',
            },
            description: 'Writing is an essential learning activity that requires both practice and experience. Writing is performed in academic environments, at workspaces, or for personal purposes, and people\'s ability to clearly and concisely express their ideas in a coherent manner is an essential skill, difficult to both evaluate and improve.\n\nATES (Automated Text Evaluation and Simplification) aims to help users improve the quality of their writing, in both English and Romanian languages, by providing immediate feedback, tailored to their writing style.\n\nComplex Natural Language Processing techniques, including deep learning models, will be used to automatically score essays relying on textual complexity indices, together with word embeddings, applied on annotated datasets of documents.\n\nIn addition, textual complexity indices, combined with various features of the cohesion graph, will trigger rules to improve the text by comparison to baseline domain-specific documents.\n\nThe system will also make suggestions for text simplification in order to improve its readability. For this matter, machine translation models will be trained on existing text simplification datasets, augmented with paraphrases, and ordered by readability scores.\n\nMoreover, the overall complexity of the text will be measured by automatically computing word Age of Acquisition (AoA) scores through incremental semantic models and regression analyses, in order to approximate the age when people adequately learn a word’s meaning.',
            objectives: [
                'The general objective of the ATES (Automated Text Evaluation Simplification) project is to enable writers to improve the quality of their writing, in both English and Romanian languages.',
                'Writers will receive immediate feedback when typing the input text through personalized recommendations and highlights of different text elements that can be improved with an easy-to-use and intuitive user interface.',
                'The system will automatically evaluate the texts and provide guidance and instructions to allow users to adjust them accordingly to the targeted audience (e.g., belletristic, scientific writing styles), through text adjustments and simplification mechanisms.',
                'Our aim is to increase the reading ease of resulted materials and to incrementally refine the user\'s writing style, transcending towards a higher writing proficiency.',
                'This objective will consider multiple experiments performed towards assessing text difficulty, before and after any automated adjustments are made.'
            ],
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
            }],
            projectPhases: [{
                phase: 'Phase 1 - 2020',
                description: 'Gather relevant datasets'
            },
            {
                phase: 'Phase 2 - 2021',
                description: 'Development of services for automatic essay scoring (O1), text simplification (O3), and prediction of AoA scores at word level (O4) - initial version'
            },
            {
                phase: 'Phase 3 - 2022',
                description: 'Development of automatic essay scoring services (O1), automate writing evaluation (O2), text simplification (O3), and prediction of AoA scores at word level (O4) - final version'
            },
            ],
            projectActivities: [
                {
                    activityNumber: "A1.",
                    dateStart: "2020-09-21",
                    dateEnd: "2020-12-12",
                    activityName: "Gather relevant datasets"
                }, {
                    activityNumber: "A2.",
                    dateStart: "2020-11",
                    dateEnd: "2021-12",
                    activityName: "Build multi-lingual automated AoA models"
                }, {
                    activityNumber: "A2.1.",
                    dateStart: "2020-11",
                    dateEnd: "2021-07",
                    activityName: "Create baseline English model"
                }, {
                    activityNumber: "A2.2.",
                    dateStart: "2021-03",
                    dateEnd: "2021-09",
                    activityName: "Train AoA models for additional languages"
                }, {
                    activityNumber: "A2.3.",
                    dateStart: "2021-07",
                    dateEnd: "2021-12",
                    activityName: " Bridge word learning rates modeled by automated AoA scores across languages"
                }, {
                    activityNumber: "A3.",
                    dateStart: "2021-01",
                    dateEnd: "2022-08",
                    activityName: "Automated Essay Scoring"
                }, {
                    activityNumber: "A3.1.",
                    dateStart: "2021-01",
                    dateEnd: "2021-09",
                    activityName: "Train models that combine ReaderBench textual\n complexity indices with word embeddings"
                }, {
                    activityNumber: "A3.2.",
                    dateStart: "2021-07",
                    dateEnd: "2022-01",
                    activityName: "Assess multi-lingual AES models"
                }, {
                    activityNumber: "A3.3.",
                    dateStart: "2022-01",
                    dateEnd: "2022-08",
                    activityName: "Develop and deploy a dedicated service that takes as input a collection\n of documents and their scores and establishes the most predictive model"
                }, {
                    activityNumber: "A4.",
                    dateStart: "2022-01",
                    dateEnd: "2022-10",
                    activityName: "Automated Writing Evaluation"
                }, {
                    activityNumber: "A4.1.",
                    dateStart: "2022-01",
                    dateEnd: "2022-04",
                    activityName: "Run experiments on paragraph restructuring"
                }, {
                    activityNumber: "A4.2.",
                    dateStart: "2022-04",
                    dateEnd: "2022-06",
                    activityName: "Generate rules for a given domain based on textual complexity\n indices and PCA components to provide feedback"
                }, {
                    activityNumber: "A4.3.",
                    dateStart: "2022-06",
                    dateEnd: "2022-10",
                    activityName: "Detect out-of-place phrases"
                }, {
                    activityNumber: "A5.",
                    dateStart: "2021-01",
                    dateEnd: "2022-10",
                    activityName: "Text simplification"
                }, {
                    activityNumber: "A5.1.",
                    dateStart: "2021-01",
                    dateEnd: "2021-06",
                    activityName: "Prepare datasets consisting of proper alignments"
                }, {
                    activityNumber: "A5.2.",
                    dateStart: "2021-06",
                    dateEnd: "2022-01",
                    activityName: "Train multiple sequence-to-sequence models"
                }, {
                    activityNumber: "A5.3.",
                    dateStart: "2022-01",
                    dateEnd: "2022-10",
                    activityName: "Analyze results and iteratively improve methods"
                }, {
                    activityNumber: "A6.",
                    dateStart: "2021-01",
                    dateEnd: "2022-10",
                    activityName: "Dissemination of results"
                }
            ],
            notableResults: undefined,
            publications: {
                journals: [{
                    title: '1.Dascalu, M.-D., Ruseti, S., Dascalu, M., McNamara, D. S., Carabas, M., Rebedea, T., & Trausan-Matu, S. (2021). Before and during COVID-19: A Cohesion Network Analysis of Students’ Online Participation in Moodle Courses. Computers in Human Behavior, 121. (Q1 journal, WOS:000651382100007, IF: 6,829)',
                    url: 'https://www.sciencedirect.com/science/article/pii/S0747563221001035'
                },
                {
                    title: '2.Nicula, B., Dascalu, M., Newton, N., Orcutt, E., & McNamara, D. S. (2021). Automated Paraphrase Quality Assessment using Language Models and Transfer Learning. Computers, 10(12).',
                    url: 'https://www.researchgate.net/publication/356851722_Automated_Paraphrase_Quality_Assessment_Using_Language_Models_and_Transfer_Learning'
                },
                {
                    title: '3.Botarleanu, R.-M., Dascalu, M., Watanabe, M., Crossley, S. A., & McNamara, D. S. (submitted). Age of Exposure 2.0: Estimating Word Complexity using Iterative Models of Word Embeddings. Behavior Research Methods. (Q1 journal, IF: 6,242)',
                    url: 'https://www.researchgate.net/publication/358631762_Age_of_Exposure_20_Estimating_word_complexity_using_iterative_models_of_word_embeddings'
                },
                {
                    title: '4.Corlatescu, D., Ruseti, S., & Dascalu, M. (submitted). ReaderBench Learns Russian: Multilevel Analysis of Russian Text Characteristics. Russian Journal of Linguistics. (Q1 journal)',
                    url: 'https://www.researchgate.net/publication/319474819_ReaderBench_A_Multi-lingual_Framework_for_Analyzing_Text_Complexity'
                },
                {
                    title: '5.Masala, M., Ruseti, S., Rebedea, T., Dascalu, M., Gutu-Robu, G., & Trausan-Matu, S. (submitted). Identifying the Structure of CSCL Conversations using String Kernels. Mathematics. (Q1 journal, IF: 2,258)',
                    url: 'https://www.researchgate.net/publication/357213267_Identifying_the_Structure_of_CSCL_Conversations_Using_String_Kernels'
                }],
                conferences: [
                    {
                        title: '1.Zaharia, G.-E., Smadu, R.-A., Cercel, D.-C., & Dascalu, M. (2022). Domain Adaptation in Multilingual and Multi-Domain Monolingual Settings for Complex Word Identification. In 60th Annual Meeting of the Association for Computational Linguistics (ACL22) (pp. 70–80). Dublin, Ireland: ACL. (Conferinta Categoria A* conferm CORE Ranking)',
                        url: 'https://www.researchgate.net/publication/360641871_Domain_Adaptation_in_Multilingual_and_Multi-Domain_Monolingual_Settings_for_Complex_Word_Identification'
                    },
                    {
                        title: '2.Botarleanu, R., Dascalu, M., Allen, L. K., Crossley, S. A., & McNamara, D. S. (2022). Multitask Summary Scoring with Longformers. In 23rd Int. Conf. on Artificial Intelligence in Education (AIED 2022) (pp. 756–761). Durham, UK (Online): Springer. (Conferinta Categoria A conferm CORE Ranking)',
                        url: 'https://www.researchgate.net/publication/362272550_Multitask_Summary_Scoring_with_Longformers'
                    },
                    {
                        title: '3.Botarleanu, R.-M., Dascalu, M., Crossley, S. A., & McNamara, D. S. (2022). Automated Paragraph Detection using Cohesion Network Analysis and Clustering. In 7th Int. Conf. on Smart Learning Ecosystems and Regional Development (SLERD 2022). Bucharest, Romania: Springer.',
                        url: 'https://www.researchgate.net/publication/363917016_Automated_Paragraph_Detection_Using_Cohesion_Network_Analysis'
                    },
                    {
                        title: '4.Dutulescu, A., Ruseti, S., & Dascalu, M. (2022). Unsupervised Extractive Summarization with BERT. In 24th International Symposium on Symbolic and Numeric Algorithms for Scientific Computing (SYNASC 2022). Linz, Austria (Online): IEEE.',
                        url: ''
                    },
                    {
                        title: '5.Botarleanu, R.-M., Dascalu, M., Watanabe, M., McNamara, D. S., & Crossley, S. A. (2021). Multilingual Age of Exposure. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 77–87). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                        url: 'https://link.springer.com/chapter/10.1007/978-3-030-78292-4_7'
                    },
                    {
                        title: '6.Masala, M., Ruseti, S., Dascalu, M., & Dobre, C. (2021). Extracting and Clustering Main Ideas from Student Feedback using Language Models. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 282–292). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                        url: 'https://www.researchgate.net/publication/352305827_Extracting_and_Clustering_Main_Ideas_from_Student_Feedback_Using_Language_Models'
                    },
                    {
                        title: '7.Ruseti, S., Dascalu, M.-D., Corlatescu, D.-G., Dascalu, M., Trausan-Matu, S., & McNamara, D. S. (2021). Exploring Dialogism using Language Models. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 296–301). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                        url: 'https://link.springer.com/chapter/10.1007/978-3-030-78270-2_53'
                    },
                    {
                        title: '8.Corlatescu, D.-G., Dascalu, M., & McNamara, D. S. (2021). Automated Model of Comprehension v2.0. In 22nd Int. Conf. on Artificial Intelligence in Education (AIED 2021) (pp. 119–123). Utrech, Netherlands (Online): Springer. (Category A conference in accordance to CORE Ranking)',
                        url: 'https://link.springer.com/chapter/10.1007/978-3-030-78270-2_21'
                    },
                    {
                        title: '9.Niculescu, M., Ruseti, S., & Dascalu, M. (2021). RoGPT2: Romanian GPT2 for Text Generation. In 33rd Int. Conf. on Tools with Artificial Intelligence (ICTAI 2021). Washington DC, USA (Online): IEEE. (Category B conference in accordance to CORE Ranking)',
                        url: 'https://www.researchgate.net/publication/357227566_RoGPT2_Romanian_GPT2_for_Text_Generation'
                    },
                    {
                        title: '10.Nicula, B., Dascalu, M., Newton, N., Orcutt, E., & McNamara, D. S. (2021). Automated Paraphrase Quality Assessment using Recurrent Neural Networks and Language Models. In 17th Int. Conf. on Intelligent Tutoring Systems (ITS 2021) (pp. 321–328). Athens, Greece (Online): Springer. (Category B conference in accordance to CORE Ranking)',
                        url: 'https://www.researchgate.net/publication/353114417_Automated_Paraphrase_Quality_Assessment_Using_Recurrent_Neural_Networks_and_Language_Models'
                    },
                    {
                        title: '11.Botarleanu, R.-M., Dascalu, M., Allen, L. K., Crossley, S. A., & McNamara, D. S. (2021). Automated Summary Scoring with ReaderBench. In 17th Int. Conf. on Intelligent Tutoring Systems (ITS 2021) (pp. 310–320). Athens, Greece (Online): Springer. (Category B conference in accordance to CORE Ranking)',
                        url: ''
                    },
                    {
                        title: '12.Ionita, R. F., Corlatescu, D.-G., Dascalu, M., & McNamara, D. S. (2021). Predicting the Global Impact of Authors from the Learning Analytics Community – A Case Study grounded in CNA. In 23rd Conference on Control Systems and Computer Science (pp. 439–446). Bucharest, Romania (Online): IEEE.',
                        url: 'https://www.researchgate.net/publication/353488604_Predicting_the_Global_Impact_of_Authors_from_the_Learning_Analytics_Community_-_A_Case_Study_grounded_in_CNA'
                    },
                    {
                        title: '13.Dascalu, M.-D., Ruseti, S., Dascalu, M., McNamara, D. S., & Trausan-Matu, S. (2021). Dialogism Meets Language Models for Evaluating Involvement in CSCL Conversations. In 6th Int. Conf. on Smart Learning Ecosystems and Regional Development (SLERD 2021) (pp. 67–78). Bucharest, Romania (Online): Springer.',
                        url: 'https://www.researchgate.net/publication/354251325_Dialogism_Meets_Language_Models_for_Evaluating_Involvement_in_CSCL_Conversations'
                    },
                    {
                        title: '14.Corlatescu, D.-G., Ruseti, S., & Dascalu, M. (2021). Romanian Syllabification using Deep Neural Networks. In 6th Int. Conf. on Smart Learning Ecosystems and Regional Development (SLERD 2021) (pp. 93–102). Bucharest, Romania (Online): Springer.',
                        url: 'https://link.springer.com/chapter/10.1007/978-981-16-3930-2_8'
                    }
                ]
            },
            link: 'ates'
        }
    ]

    public static getProjectsShort(): ProjectDTOShort[] {
        return this.projectsShort
    }

    public static getProjectsLong(): ProjectDTOLong[] {
        return this.projectsLong
    }

    public static getProjectLong(link: string): ProjectDTOLong | undefined {
        return this.projectsLong.find(p => p.link === link)
    }
}