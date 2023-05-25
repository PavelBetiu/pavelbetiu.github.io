<template>
<div class="wrapper body">

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
                                <div class="wizard-tab-content">
                                    <div class="form-group">
                                        <textarea class="form-control qgen-text-style" v-model="text" placeholder="Enter at least 10 characters" rows="16"></textarea>
                                    </div>
                                </div>

                            </wizard-tab>

                            <wizard-tab id="text-annotation-tab">
                                <template #label>
                                    Text Annotation
                                </template>
                                <div class="wizard-tab-content">
                                    <div class="form-group row">
                                        <div class="col-lg-3 d-flex align-items-center">
                                            <p-checkbox v-model="bertIsSelected" :binary="true" :pt="{
                                                        input: ({ props, state }) => ({
                                                            class: state.focused ? 'bert-checkbox-focus' : 'bert-checkbox',
                                                        })
                                                    }" />
                                            <label class="m-2"> Keyword (BERT Topic) </label>
                                        </div>
                                        <div class="col-lg-3 d-flex align-items-center">
                                            <p-checkbox v-model="nerIsSelected" :binary="true" :pt="{
                                                        input: ({ props, state }) => ({
                                                            class: state.focused ? 'ner-checkbox-focus' : 'ner-checkbox',
                                                        })
                                                    }" />
                                            <label class="m-2">Named entity (NER)</label>
                                        </div>
                                        <div class="col-lg-3 d-flex align-items-center">
                                            <p-checkbox v-model="oracleIsSelected" :binary="true" :pt="{
                                                        input: ({ props, state }) => ({
                                                            class: state.focused ? 'oracle-checkbox-focus' : 'oracle-checkbox',
                                                        })
                                                    }" />
                                            <label class="m-2">Oracle (Answer Selector)</label>
                                        </div>
                                        <div class="col-lg-3 d-flex align-items-center">
                                            <p-checkbox v-model="userAnnIsSelected" :binary="true" :pt="{
                                                        input: ({ props, state }) => ({
                                                            class: state.focused ? 'user-checkbox-focus' : 'user-checkbox',
                                                        })
                                                    }" />
                                            <label class="m-2">User annotated (Please enable to create)</label>
                                        </div>
                                    </div>
                                    <div id="annotated-text" class="text-justify qgen-text-style" v-html="annotatedText" :style="setUnselectableIfUserAnnNotChecked()" @mouseup="handleOnMouseUpEvent($event)"></div>
                                </div>
                            </wizard-tab>

                            <wizard-tab id="parameters-tab">
                                <template #label>
                                    Parameters
                                </template>
                                <div class="wizard-tab-content">
                                    <div class="form-group d-flex flex-column justify-content-center align-items-center h-100 qgen-text-style">
                                        <div class="form-floating mb-3 w-50">
                                            <input id="nbQuest" type="number" class="form-control" v-model="numberOfQuestions">
                                            <label class="h6" for="nbQuest">Select the number of questions (per answer)</label>
                                        </div>
                                        <div class="form-floating w-50">
                                            <input id="nbOpt" type="number" class="form-control" v-model="numberOfOptions">
                                            <label class="h6" for="nbOpt">Select the number of options (per question)</label>
                                        </div>
                                    </div>
                                </div>
                            </wizard-tab>

                            <wizard-tab id="generated-questions-tab">
                                <template #label>
                                    Generated Questions
                                </template>
                                <div class="wizard-tab-content">
                                    <div class="form-group row">
                                        <Table :data="dummyTableData" :isSortable="false" :withCustomBody="true" :isScrollable="true">
                                            <template #column="{rowData, currentColumnData}">
                                                <div v-if="currentColumnData.key == 'relevant' || currentColumnData.key == 'grammar' || currentColumnData.key == 'coherence'" class="w-100 d-flex justify-content-start">
                                                    <p-checkbox v-model="rowData[currentColumnData.key]" :binary="true" />
                                                </div>
                                                <div v-else>
                                                    {{rowData[currentColumnData.key]}}
                                                </div>
                                            </template>
                                        </Table>
                                    </div>
                                </div>
                            </wizard-tab>
                        </template>

                        <template #footer="{nextTab, prevTab, activeTabIndex, tabCount}">
                            <div class="w-100 d-flex justify-content-between align-items-center">
                                <div>
                                    <button v-if="activeTabIndex > 0" @click="prevTab" class="btn btn-default m-2">
                                        Previous
                                    </button>
                                </div>
                                <div>
                                    <button v-if="activeTabIndex < tabCount - 2" @click="nextTab" class="btn btn-primary m-2">
                                        Next
                                    </button>
                                    <button v-else-if="activeTabIndex == tabCount - 2" @click="nextTab" class="btn btn-primary m-2">
                                        Generate Questions
                                    </button>
                                    <button v-else @click="nextTab" class="btn btn-primary m-2">
                                        Finish
                                    </button>
                                </div>
                            </div>
                        </template>

                    </wizard>
                </div>
            </div>

        </div>

    </div>
</div>
</template>

<script>
import WizardTab from '@/components/UIComponents/WizardTab.vue'
import Wizard from '@/components/UIComponents/Wizard.vue'
import Table from '@/components/widgets/Table.vue'

import {
    inject
} from 'vue';
import {
    ANNOTATION_SERVICE,
    UserSelectedAnnotationCallbacks
} from '@/services/annotation-service.interface';

export default {
    components: {
        // TextAnnotation,
        Wizard,
        WizardTab,
        Table
    },
    data() {
        return {
            annotationService: null,
            wizardModel: {},
            text: "Alexander Graham Bell was born in Edinburgh, Scotland on March 3, 1847. When he was only eleven years old, he invented a machine that could clean wheat. Graham studied anatomy and physiology at the University of London, but moved with his family to Quebec, Canada in 1870. Bell soon moved to Boston, Massachusetts. In 1871, he began working with deaf people and published the system of Visible Hearing that was developed by his father. Visible hearing illustrated how the tongue, lips, and throat are used to produce vocal sounds. In 1872, Bell founded a school for the deaf which soon became part of Boston University. Alexander Graham Bell is best known for his invention of the telephone. While trying to discover the secret of transmitting multiple messages on a single wire, Bell heard the sound of a plucked string along some of the electrical wire. One of Bell's assistants, Thomas A. Watson, was trying to reactivate a telephone transmitter. After hearing the sound, Bell believed he could send the sound of a human voice over the wire. After receiving a patent on March 7, 1876 for transmitting sound along a single wire, he successfully transmitted human speech on March 10th. Bell's telephone patent was one of the most valuable patents ever issued. He started the Bell Telephone Company in 1877. Bell went on to invent a precursor to the modern day air conditioner, and a device, called a \"photophone\", that enabled sound to be transmitted on a beam of light. Today's fiber optic and laser communication systems are based on Bell's photophone research. In 1898, Alexander Graham Bell and his son-in-law took over the National Geographic Society and built it into one of the most recognized magazines in the world. Bell also helped found Science Magazine, one of the most respected research journals in the world.",
            annotatedText: "",
            bertIsSelected: false,
            nerIsSelected: false,
            oracleIsSelected: false,
            userAnnIsSelected: false,

            annotations: [{
                    id: this.generateRandomId(),
                    type: "bert",
                    start: 34,
                    end: 53,
                    text: "Edinburgh, Scotland",
                    label: "BERT"
                },
                {
                    id: this.generateRandomId(),
                    type: "ner",
                    start: 249,
                    end: 263,
                    text: "Quebec, Canada",
                    label: "NER"
                },
                {
                    id: this.generateRandomId(),
                    type: "user",
                    start: 452,
                    end: 529,
                    text: "illustrated how the tongue, lips, and throat are used to produce vocal sounds",
                    label: "USER PICKED"
                },
                {
                    id: this.generateRandomId(),
                    type: "bert",
                    start: 620,
                    end: 641,
                    text: "Alexander Graham Bell",
                    label: "BERT"
                },
                {
                    id: this.generateRandomId(),
                    type: "user",
                    start: 882,
                    end: 898,
                    text: "Thomas A. Watson",
                    label: "USER PICKED"
                },
                {
                    id: this.generateRandomId(),
                    type: "ner",
                    start: 1276,
                    end: 1298,
                    text: "Bell Telephone Company",
                    label: "NER"
                },
                {
                    id: this.generateRandomId(),
                    type: "bert",
                    start: 1749,
                    end: 1765,
                    text: "Science Magazine",
                    label: "BERT"
                }
            ],
            numberOfQuestions: 1,
            numberOfOptions: 4,
            dummyTableData: {
                columns: [{
                        key: 'question',
                        displayName: 'Question',
                    },
                    {
                        key: 'correct_answer',
                        displayName: 'Correct Answer',
                    },
                    {
                        key: 'option_2',
                        displayName: 'Option 2',
                    },
                    {
                        key: 'option_3',
                        displayName: 'Option 3',
                    },
                    {
                        key: 'option_4',
                        displayName: 'Option 4',
                    },
                    {
                        key: 'relevant',
                        displayName: 'Relevant',
                    },
                    {
                        key: 'grammar',
                        displayName: 'Grammar',
                    },
                    {
                        key: 'coherence',
                        displayName: 'Coherence',
                    },
                ],
                rows: [{
                        question: "Where was Alexander Graham Bell born?",
                        correct_answer: "Edinburgh, Scotland",
                        option_1: "Edinburgh, Scotland",
                        option_2: "London, United Kingdom",
                        option_3: "Quebec, Canada",
                        option_4: "Boston, Massachusetts",
                        relevant: true,
                        grammar: true,
                        coherence: true
                    },
                    {
                        question: "Who invented the telephone?",
                        correct_answer: "Alexander Graham Bell",
                        option_1: "Alexander Graham Bell",
                        option_2: "Steve Wozniak",
                        option_3: "John Von Neumann",
                        option_4: "Albert Einstein",
                        relevant: true,
                        grammar: true,
                        coherence: true
                    },
                    {
                        question: "What Visible Hearing does?",
                        correct_answer: "illustrated how the tongue, lips, and throat are used to produce vocal sounds",
                        option_1: "illustrated how the tongue, lips, and throat are used to produce vocal sounds",
                        option_2: "transmitting multiple messages on a single wire",
                        option_3: "reactivate a telephone transmitter",
                        option_4: "enabled sound to be transmitted on a beam of light",
                        relevant: true,
                        grammar: true,
                        coherence: true
                    },
                    {
                        question: "What research journal did Bell found?",
                        correct_answer: "Science Magazine",
                        option_1: "Science Magazine",
                        option_2: "Natural History",
                        option_3: "National Geographic Society",
                        option_4: "Nature Magazine",
                        relevant: true,
                        grammar: true,
                        coherence: true
                    },
                    {
                        question: "Where did Bell moved in 1870?",
                        correct_answer: "Quebec, Canada",
                        option_1: "Quebec, Canada",
                        option_2: "Ottawa, Canada",
                        option_3: "Boston, Massachusetts",
                        option_4: "London, United Kingdom",
                        relevant: true,
                        grammar: true,
                        coherence: true
                    },
                    {
                        question: "What company did Bell founded in 1877?",
                        correct_answer: "Bell Telephone Company",
                        option_1: "Bell Telephone Company",
                        option_2: "National Geographic Society",
                        option_3: "BellSouth Telecommunications",
                        option_4: "Cannon",
                        relevant: true,
                        grammar: true,
                        coherence: true
                    },

                    {
                        question: "Who was Bell’s assistant?",
                        correct_answer: "Thomas A. Watson",
                        option_1: "Thomas A. Watson",
                        option_2: "Thomas Edison",
                        option_3: "Nikola Tesla",
                        option_4: "Samuel F. B. Morse",
                        relevant: true,
                        grammar: true,
                        coherence: true
                    }

                ],
            },
        }
    },

    created() {
        console.log("generate questions page has been created");
        this.annotationService = inject(ANNOTATION_SERVICE);
    },

    mounted() {
        console.log("generate questions page has been mounted");
        this.annotationService.init("annotated-text", {
            onUserAddedAnnotation: this.onUserAnnotationAdded,
            onUserDeletedAnnotation: this.onUserAnnotationDeleted,
            onUserUpdatedAnnotation: this.onUserAnnotationUpdated
        }, this.annotationFormetter);

        const annotatedTextParent = document.getElementsByClassName("r6o-content-wrapper")[0];
        const secondChild = annotatedTextParent.children[1];

        console.log(annotatedTextParent);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
                    console.log("A child node has been added or removed.");
                    const taggingSection = document.querySelectorAll("div.r6o-widget.r6o-tag")[0]

                    if (taggingSection != undefined) {
                        taggingSection.remove();
                    }

                    const editableCommentSection = document.querySelectorAll("div.r6o-widget.comment.editable")[0]

                    if (editableCommentSection != undefined) {
                        editableCommentSection.remove();
                    }

                    const innerEditor = document.getElementsByClassName("r6o-editor-inner")[0];
                    if (innerEditor != undefined) {
                        innerEditor.classList.add("rounded-3");
                    }

                    const dropdownMenu = document.getElementsByClassName("r6o-arrow-down")[0];
                    if (dropdownMenu != undefined) {
                        dropdownMenu.remove();
                    }

                    const footer = document.getElementsByClassName("r6o-footer")[0];

                    if (footer != undefined) {
                        const buttons = footer.querySelectorAll("button");

                        buttons.forEach((button) => {
                            if (button.innerText == "Cancel") {
                                for (const cssClass of button.classList) {
                                    button.classList.remove(cssClass);
                                }
                                button.classList.add("btn");
                                button.classList.add("btn-outline-danger");
                                button.classList.add("m-2")
                            } else if (button.innerText == "Ok") {
                                for (const cssClass of button.classList) {
                                    button.classList.remove(cssClass);
                                }
                                button.classList.add("btn");
                                button.classList.add("btn-primary");
                                button.classList.add("my-2");
                                button.classList.add("mr-2");
                            }
                        });

                        const innerEditor = document.getElementsByClassName("r6o-editor-inner")[0];
                        const observer = new MutationObserver((mutations) => {
                            mutations.forEach((mutation) => {
                                if (mutation.type === "childList") {
                                    const taggingSectionRestored = document.querySelectorAll("div.r6o-widget.r6o-tag")[0]
                                    console.log("tagging section restored")
                                    console.log(taggingSectionRestored)

                                    if (taggingSectionRestored != undefined) {
                                        taggingSectionRestored.remove();
                                    }
                                }
                            });
                        });

                        observer.observe(innerEditor, {
                            childList: true
                        });
                    }

                }
            });
        });

        observer.observe(secondChild, {
            childList: true
        });
    },

    beforeUpdate() {
        console.log("before update");
    },

    updated() {
        console.log("updated");
    },

    beforeUnmount() {
        console.log("before unmount");
    },

    unmounted() {
        console.log("unmounted");
    },

    methods: {
        generateRandomId() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        },
        setUnselectableIfUserAnnNotChecked() {
            if (!this.userAnnIsSelected) {
                return "user-select: none;"
            } else {
                return ""
            }
        },
        handleOnMouseUpEvent(event) {
            if (event.target.localName == "div" && !this.userAnnIsSelected) {
                // TODO: use toast instead of alert
                alert("Please select the User annotated checkbox first to create new annotations")
            }
        },
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
            this.annotatedText = this.text;
            return Promise.resolve(true)
        },
        validateAnnotations() {
            // console.log("validate Annotations");
            // this.$emit('on-validated', true, this.text)
            // return Promise.resolve(true)
        },
        checkIfSameAnnotations(ann1, ann2) {
            return ann1.id == ann2.id;
        },
        onUserAnnotationAdded(annotation) {
            console.log("onUserAnnotationAdded callback:");
            console.log(annotation);
            this.annotations.push(annotation);
        },
        onUserAnnotationDeleted(annotation) {
            console.log("onUserAnnotationDeleted");
            console.log(annotation);

            // find the annotation by id and delete it
            this.annotations = this.annotations.filter((ann) => {
                return ann.id != annotation.id;
            });
        },
        onUserAnnotationUpdated(updatedAnnotation) {
            // find the annotation by id and update it
            this.annotations = this.annotations.map((ann) => {
                if (ann.id == updatedAnnotation.id) {
                    return updatedAnnotation;
                } else {
                    return ann;
                }
            });
        },
        showAnnotationsByType(type) {
            console.log("showAnnotationsByType: ", type);

            let annotations = this.annotations.filter((ann) => {
                return ann.type == type;
            });

            for (let i = 0; i < annotations.length; i++) {
                console.log("adding annotation: ", annotations[i]);
                this.annotationService.addAnnotation(annotations[i]);
            }
        },
        hideAnnotationsByType(type) {
            console.log("hideAnnotationsByType: ", type);

            let annotations = this.annotations.filter((ann) => {
                return ann.type == type;
            });

            for (let i = 0; i < annotations.length; i++) {
                this.annotationService.deleteAnnotation(annotations[i]);
            }
        },
        annotationFormetter(annotation) {
            const typeToCSSClass = {
                "bert": "bert-annotation-format",
                "ner": "ner-annotation-format",
                "oracle": "oracle-annotation-format",
                "user": "user-annotation-format"
            }
            return typeToCSSClass[annotation.type];
        }
    },

    watch: {
        bertIsSelected(newValue, oldValue) {
            if (newValue == true) {
                this.showAnnotationsByType("bert");
            } else {
                this.hideAnnotationsByType("bert");
            }
        },
        nerIsSelected(newValue, oldValue) {
            if (newValue == true) {
                this.showAnnotationsByType("ner");
            } else {
                this.hideAnnotationsByType("ner");
            }
        },
        oracleIsSelected(newValue, oldValue) {
            if (newValue == true) {
                this.showAnnotationsByType("oracle");
            } else {
                this.hideAnnotationsByType("oracle");
            }
        },
        userAnnIsSelected(newValue, oldValue) {
            if (newValue == true) {
                this.showAnnotationsByType("user");
            } else {
                this.hideAnnotationsByType("user");
            }
        },
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
</style><style>
#annotated-text .r6o-selection {
    background-color: #ff74bec0 !important;
    border-radius: 3px !important;
}

.bert-annotation-format {
    background-color: #9077ffa9 !important;
    border-bottom: 2px solid #7556fd !important;
    border-radius: 3px !important;
}

.bert-checkbox {
    background-color: #9077ffa9 !important;
    border-color: #7556fd !important;
}

.bert-checkbox-focus {
    background-color: #9077ffa9 !important;
    border-color: #7556fd !important;
    box-shadow: 0 0 0 0.2rem #9077ff44 !important;
}

.oracle-annotation-format {
    background-color: #ff864ec7 !important;
    border-color: #ff5b0fc7 !important;
}

.oracle-checkbox {
    background-color: #ff864ec7 !important;
    border-color: #ff5b0fc7 !important;
}

.oracle-checkbox-focus {
    background-color: #ff864ec7 !important;
    border-color: #ff5b0fc7 !important;
    box-shadow: 0 0 0 0.2rem #ff864e44 !important;
}

.ner-annotation-format {
    background-color: #e8485580 !important;
    border-bottom: 2px solid #e60517ab !important;
    border-radius: 3px !important;
}

.ner-checkbox {
    background-color: #E8485580 !important;
    border-color: #e60517ab !important;
}

.ner-checkbox-focus {
    background-color: #E8485580 !important;
    border-color: #e60517ab !important;
    box-shadow: 0 0 0 0.2rem #E8485544 !important;
}

.user-annotation-format {
    background-color: #3185fc8c !important;
    border-bottom: 2px solid #3185FCbb !important;
    border-radius: 3px !important;
}

.user-checkbox {
    background-color: #3185FC8c !important;
    border-color: #3185FCbb !important;
}

.user-checkbox-focus {
    background-color: #3185FC8c !important;
    border-color: #3185FCbb !important;
    box-shadow: 0 0 0 0.2rem #3185FC44 !important;
}

div.r6o-editor-inner>.r6o-widget.comment+.r6o-widget.comment.editable {
    visibility: hidden !important;
    display: none !important;
}

ul.r6o-comment-dropdown-menu>li+li {
    visibility: hidden !important;
    display: none !important;
}

.wizard-tab-content {
    height: 450px;
}

.qgen-text-style {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    padding: 1.5rem;
    line-height: 1.6;
    font-size: 0.9rem
}

.body {
    background-color: #f8f9fa;
}
</style>
