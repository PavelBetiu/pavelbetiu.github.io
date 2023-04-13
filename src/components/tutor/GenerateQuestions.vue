<template>
<div class="wrapper">

    <div class="main-panel">

        <div class="content mt-6">
            <div class="row d-flex justify-content-center">
                <div class="col-md-10 mr-auto ml-auto">
                    <wizard @complete="wizardComplete" finishButtonText="Generate Questions">
                        <template #header>
                            <h3 class="card-title">Insert text</h3>
                            <h3 class="description">Insert your text here</h3>
                        </template>

                        <template #default>
                            <wizard-tab :beforeChange="() => validateText()" id="new-text-tab">
                                <template #label>
                                    New Text
                                </template>
                                <div class="form-group">
                                    <textarea class="form-control" v-model="text" placeholder="Enter at least 10 characters" rows="16"></textarea>
                                </div>
                            </wizard-tab>

                            <wizard-tab id="text-annotation-tab">
                                <template #label>
                                    Text Annotation
                                </template>
                                <div>
                                    <div class="form-group row">
                                        <div class="col-lg-3 d-flex align-items-center">
                                            <p-checkbox v-model="keywordsCheckbox" :binary="true" />
                                            <label class="m-2"> Keyword (BERT Topic) </label>
                                        </div>
                                        <div class="col-lg-3 d-flex align-items-center">
                                            <p-checkbox v-model="namedEntitiesCheckbox" :binary="true" />
                                            <label class="m-2">Named entity (NER)</label>
                                        </div>
                                        <div class="col-lg-3 d-flex align-items-center">
                                            <p-checkbox v-model="nounChuncksCheckbox" :binary="true" />
                                            <label class="m-2">Oracle (Answer Selector)</label>
                                        </div>
                                    </div>
                                    <!-- <TextAnnotation v-model="textAnnotations" :text="annotatedText" annotation-bg-color="green" /> -->
                                    <div id="annotated-text" class="text-justify" v-html="annotatedText"></div>
                                </div>
                            </wizard-tab>

                            <wizard-tab id="parameters-tab">
                                <template #label>
                                    Parameters
                                </template>
                                <div>
                                    <div class="form-group row">
                                        todo
                                    </div>
                                </div>
                            </wizard-tab>
                        </template>

                    </wizard>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
// import TextAnnotation from "vue2-text-annotation"
// import TextAnnotation from '../Tutor/TextAnnotationComponent/TextAnnotation.vue'
// import Swal from 'sweetalert2'
import WizardTab from '@/components/UIComponents/WizardTab.vue'
import Wizard from '@/components/UIComponents/Wizard.vue'

import {
    inject
} from 'vue';
import {
    ANNOTATION_SERVICE
} from '@/services/annotation-service.interface';

export default {
    components: {
        // TextAnnotation,
        Wizard,
        WizardTab,
    },
    data() {
        return {
            annotationService: null,
            wizardModel: {},
            text: "Many of us have printers in our homes or at our schools. They print with ink on paper. This is a 2D printer. New technology has introduced us to a new kind of printer: a 3D printer.\n" +
                "The term \"3D\" is short for three dimensional. When you print on a regular piece of paper, there are only two dimensions: length and width. The printer prints flat letters and pictures on a flat sheet of paper. When you print on a 3D printer, there are three dimensions: length, width, and height. That means that you can print almost any object with a 3D printer. You can print a ball, a bracelet, even an action figure!\n " +
                "Printing in 3D works by using layers of material to slowly build an object. Most 3D printers use plastic as their material. The plastic is melted down until the machine can mold it. Then, the printer prints out one layer of the object at a time until the entire object is built. The printer stacks these layers on top of one another, like building blocks. This can take a long time. Some 3D objects can take hours or even days to print.\n" +
                "Today, 3D printing is used mostly by students, designers, and certain businesses. This is because 3D printers are very large and expensive. It would be difficult to have one in your home. Still, 3D printing is used in many different situations.  Parts on airplanes can easily be replaced by printing them.  Also, 3D printing is especially helpful in the medical field.  Three dimensional printed hips are becoming very common in hip replacements. Many retainers that go in your mouth are also 3D printed.\n" +
                "The possibilities for the future of 3D printing are endless. NASA used a 3D printer to create a part of a rocket ship. What if one day they could 3D print a whole rocket? As technology improves, 3D printers will become more common. Will we be able to 3D print our own toys? What about our own jewelry or accessories? The possibilities of 3D printing are endless!",
            annotatedText: "Many of us have printers in our homes or at our schools. They print with ink on paper. This is a 2D printer. New technology has introduced us to a new kind of printer: a 3D printer.\n" +
                "The term \"3D\" is short for three dimensional. When you print on a regular piece of paper, there are only two dimensions: length and width. The printer prints flat letters and pictures on a flat sheet of paper. When you print on a 3D printer, there are three dimensions: length, width, and height. That means that you can print almost any object with a 3D printer. You can print a ball, a bracelet, even an action figure!\n" +
                "Printing in 3D works by using layers of material to slowly build an object. Most 3D printers use plastic as their material. The plastic is melted down until the machine can mold it. Then, the printer prints out one layer of the object at a time until the entire object is built. The printer stacks these layers on top of one another, like building blocks. This can take a long time. Some 3D objects can take hours or even days to print.\n" +
                "Today, 3D printing is used mostly by students, designers, and certain businesses. This is because 3D printers are very large and expensive. It would be difficult to have one in your home. Still, 3D printing is used in many different situations.  Parts on airplanes can easily be replaced by printing them.  Also, 3D printing is especially helpful in the medical field.  Three dimensional printed hips are becoming very common in hip replacements. Many retainers that go in your mouth are also 3D printed.\n" +
                "The possibilities for the future of 3D printing are endless. NASA used a 3D printer to create a part of a rocket ship. What if one day they could 3D print a whole rocket? As technology improves, 3D printers will become more common. Will we be able to 3D print our own toys? What about our own jewelry or accessories? The possibilities of 3D printing are endless!",
            textAnnotations: [
                // {
                //     content: "Vue.js",
                //     annotation: "Keyword",
                //     start:0,
                //     end:6
                // },
                // {
                //     content: "JavaScript",
                //     annotation: "Named entity",
                //     start:24,
                //     end:35
                // }
            ],
            keywordsCheckbox: true,
            nounChuncksCheckbox: true,
            namedEntitiesCheckbox: true,
            semanticLabelCheckbox: true,
        }
    },

    created() {
        console.log("generate questions page has been created");
        this.annotationService = inject(ANNOTATION_SERVICE);
    },

    mounted() {
        console.log("generate questions page has been mounted");
        this.annotationService.init("annotated-text");
    },

    methods: {
        validateStep(ref) {
            return this.$refs[ref].validate()
        },
        onStepValidated(validated, model) {
            this.wizardModel = {
                ...this.wizardModel,
                ...model
            }
        },
        wizardComplete() {
            // this.$router.push({
            //     name: "TextsCollection"
            // })
        },
        validateText() {
            console.log("validate Text");
            this.$emit('on-validated', true, this.text)
            return Promise.resolve(true)
        },
        validateAnnotations() {
            // console.log("validate Annotations");
            // this.$emit('on-validated', true, this.text)
            // return Promise.resolve(true)
        }
    }
}
</script>

<style lang="scss">
.my-span-class:hover {
    outline: 1px solid black;
}

.annotated {
    font-weight: bold;
}
</style>

<style>
#annotated-text .r6o-annotation {
    background-color: #9077ffa9 !important;
    border-bottom: 2px solid #7556fd !important;
    border-radius: 3px !important;
}

#annotated-text .r6o-selection {
    background-color: #a18cffc0 !important;
    border-radius: 3px !important;
}
</style>
