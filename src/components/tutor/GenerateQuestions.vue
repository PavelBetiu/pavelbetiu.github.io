<template>
<div class="wrapper">

    <div class="main-panel">

        <div class="content">

            <div class="row d-flex justify-content-center">
                <div class="col-md-10 mr-auto ml-auto">
                    <wizard @complete="wizardComplete" finishButtonText="Generate Questions">
                        <template #header>
                            <h3 class="card-title">Insert text</h3>
                            <h3 class="description">Insert your text here</h3>
                        </template>

                        <wizard-tab :before-change="() => validateText()">
                            <template #label>
                                New Text
                            </template>
                            <div class="form-group">
                                <textarea class="form-control" v-model="text" placeholder="Enter at least 10 characters" rows="16"></textarea>
                            </div>
                        </wizard-tab>

                        <wizard-tab>
                            <template #label>
                                Text Annotation
                            </template>
                            <div>
                                <div class="form-group row">
                                    <div class="col-lg-3">
                                        <p-checkbox v-model="keywordsCheckbox">Keyword (BERT Topic)</p-checkbox>
                                    </div>
                                    <div class="col-lg-3">
                                        <p-checkbox v-model="namedEntitiesCheckbox">Named entity (NER)</p-checkbox>
                                    </div>
                                    <div class="col-lg-3">
                                        <p-checkbox v-model="nounChuncksCheckbox">Oracle (Answer Selector)</p-checkbox>
                                    </div>
                                </div>
                                <TextAnnotation v-model="textAnnotations" :text="annotatedText" annotation-bg-color="green" />
                            </div>
                        </wizard-tab>

                        <wizard-tab>
                            <template #label>
                                Parameters
                            </template>
                            <div>
                                <div class="form-group row">
                                    todo
                                </div>
                            </div>
                        </wizard-tab>
                    </wizard>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
import TextAnnotation from "vue2-text-annotation"
// import TextAnnotation from '../Tutor/TextAnnotationComponent/TextAnnotation.vue'
// import Swal from 'sweetalert2'
import WizardTab from '@/components/UIComponents/WizardTab.vue'
import Wizard from '@/components/UIComponents/Wizard.vue'

export default {
    components: {
        TextAnnotation,
        Wizard,
        WizardTab,
    },
    data() {
        return {
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
            semanticLabelCheckbox: true
        }
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
            // Swal.fire({
            //     title: "Good job!",
            //     text: "You clicked the finish button!",
            //     type: "success",
            //     confirmButtonClass: "btn btn-success",
            //     buttonsStyling: false
            // });
            this.$router.push({
                name: "TextsCollection"
            })
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
