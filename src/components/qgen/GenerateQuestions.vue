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

                        <template #default="slotProps">
                            <wizard-tab :beforeChange="() => validateText(slotProps)" id="new-text-tab">
                                <template #label>
                                    New Text
                                </template>
                                <div class="wizard-tab-content">
                                    <div class="form-group">
                                        <textarea class="form-control qgen-text-style" v-model="text" placeholder="Enter at least 10 characters" rows="16"></textarea>
                                    </div>
                                </div>

                            </wizard-tab>

                            <wizard-tab :beforeChange="() => validateAnnotations(slotProps)" :afterRender="annotationsTabAfterRender" id="text-annotation-tab">
                                <template #label>
                                    Text Annotation
                                </template>
                                <div v-show="annotationsReceived" class="wizard-tab-content">
                                    <div class="form-group row">
                                        <div class="ml-5 col-lg-2 d-flex align-items-center">
                                            <p-checkbox v-model="rlIsSelected" :binary="true" :pt="{
                                                        input: ({ props, state }) => ({
                                                            class: state.focused ? 'rl-checkbox-focus' : 'rl-checkbox',
                                                        })
                                                    }" />
                                            <label class="m-2"> RL </label>
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
                                <div v-if="!annotationsReceived" class="wizard-tab-content d-flex justify-content-center align-items-center">
                                    <p-progress-spinner/>
                                </div>
                            </wizard-tab>

                            <wizard-tab :beforeChange="() => validateParameters(slotProps)" id="parameters-tab">
                                <template #label>
                                    Parameters
                                </template>
                                <div class="wizard-tab-content">
                                    <div class="form-group d-flex flex-column justify-content-center align-items-center h-100 qgen-text-style">
                                        <label class="h6"><span class="badge rounded-pill bg-warning m-1">!</span>Parameters configuration is currently not supported</label>
                                        <div class="form-floating mb-3 w-50">
                                            <input id="nbQuest" type="number" class="form-control" v-model="numberOfQuestions" disabled>
                                            <label class="h6" for="nbQuest">Select the number of questions (per answer)</label>
                                        </div>
                                        <div class="form-floating w-50">
                                            <input id="nbOpt" type="number" class="form-control" v-model="numberOfOptions" disabled>
                                            <label class="h6" for="nbOpt">Select the number of options (per question)</label>
                                        </div>
                                    </div>
                                </div>
                            </wizard-tab>

                            <wizard-tab id="generated-questions-tab">
                                <template #label>
                                    Generated Questions
                                </template>
                                <div v-show="questionsReceived" class="wizard-tab-content">
                                    <div class="form-group row">
                                        <Table :data="tableData" :isSortable="false" :withCustomBody="true" :isScrollable="true">
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
                                <div v-if="!questionsReceived" class="wizard-tab-content d-flex justify-content-center align-items-center">
                                    <p-progress-spinner/>
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
import WizardTab from '@/components/qgen/WizardTab.vue'
import Wizard from '@/components/qgen/Wizard.vue'
import Table from '@/components/widgets/Table.vue'


import {
    inject
} from 'vue';

import {
  TOAST_SERVICE
} from "@/services/toast-service.interface"

import {
    ANNOTATION_SERVICE,
    UserSelectedAnnotationCallbacks
} from '@/services/annotation-service.interface';
import {
    QGEN_SERVICE,
    QGenAnswerRequest,
    QGenTestRequest
} from '@/services/qgen-service.interface';
import {
    convertQGenAnswerExtendedToAnnotation,
    convertAnnotationToQGenAnswer,
    convertQGenTestsToQuestionsTable
} from '@/components/qgen/qgen-converters';

export default {
    components: {
        Wizard,
        WizardTab,
        Table
    },
    data() {
        return {
            /* Toast service */
            toastService: null,

            /* New Text */
            text: "Alexander Graham Bell was born in Edinburgh, Scotland on March 3, 1847. When he was only eleven years old, he invented a machine that could clean wheat. Graham studied anatomy and physiology at the University of London, but moved with his family to Quebec, Canada in 1870. Bell soon moved to Boston, Massachusetts. In 1871, he began working with deaf people and published the system of Visible Hearing that was developed by his father. Visible hearing illustrated how the tongue, lips, and throat are used to produce vocal sounds. In 1872, Bell founded a school for the deaf which soon became part of Boston University. Alexander Graham Bell is best known for his invention of the telephone. While trying to discover the secret of transmitting multiple messages on a single wire, Bell heard the sound of a plucked string along some of the electrical wire. One of Bell's assistants, Thomas A. Watson, was trying to reactivate a telephone transmitter. After hearing the sound, Bell believed he could send the sound of a human voice over the wire. After receiving a patent on March 7, 1876 for transmitting sound along a single wire, he successfully transmitted human speech on March 10th. Bell's telephone patent was one of the most valuable patents ever issued. He started the Bell Telephone Company in 1877. Bell went on to invent a precursor to the modern day air conditioner, and a device, called a \"photophone\", that enabled sound to be transmitted on a beam of light. Today's fiber optic and laser communication systems are based on Bell's photophone research. In 1898, Alexander Graham Bell and his son-in-law took over the National Geographic Society and built it into one of the most recognized magazines in the world. Bell also helped found Science Magazine, one of the most respected research journals in the world.",
            lastProcessedTextCleansed: "",

            /* Text Annotation step */
            annotationService: null,
            annotatedText: "",
            rlIsSelected: false,
            nerIsSelected: false,
            oracleIsSelected: false,
            userAnnIsSelected: false,
            annotationsReceived: false,
            annotationsRendered: false,
            annotations: [],
            lastProcessedAnnotations: "",

            /* Parameters step */
            numberOfQuestions: 1,
            numberOfOptions: 4,
            tableData: {},

            /* Generated Questions step */
            questionsReceived: false
        }
    },

    created() {
        this.annotationService = inject(ANNOTATION_SERVICE);
        this.qgenService = inject(QGEN_SERVICE);
        this.toastService = inject(TOAST_SERVICE);
    },

    mounted() {
        this.annotationService.init("annotated-text", {
            onUserAddedAnnotation: this.onUserAnnotationAdded,
            onUserDeletedAnnotation: this.onUserAnnotationDeleted,
            onUserUpdatedAnnotation: this.onUserAnnotationUpdated
        }, this.annotationFormatter);

        const annotatedTextParent = document.getElementsByClassName("r6o-content-wrapper")[0];
        const secondChild = annotatedTextParent.children[1];

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "childList") {
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
    methods: {
        annotationsTabAfterRender() {
            if (this.annotationsReceived && !this.annotationsRendered) {
                this.showAllAnnotations();
                this.annotationsRendered = true;
            }
        },
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
                this.info("User annotated checkbox not selected", "Please select the User annotated checkbox first to create new annotations")
            }
        },
        validateStep(ref) {
            return this.$refs[ref].validate()
        },
        wizardComplete() {
            // this.$router.push({
            //     name: "TextsCollection"
            // })
        },
        validateText(slotProps) {
            // Keep only alphanumeric characters for comparison
            let cleansedText = this.text.replace(/[^a-z0-9]/gi, '');

            // If the text is empty, then we don't need to process it
            if (cleansedText == "") {
                return Promise.resolve(false)
            }

            // If the text is the same as the last processed text, then we don't need to process it again
            if (cleansedText == this.lastProcessedTextCleansed) {
                return Promise.resolve(true)
            }

            // Clear the annotations step if the text is different
            this.clearAnnotationStep();

            // Uncheck the next tabs (navigation is not allowed)
            slotProps.uncheckNextTabs();

            this.getAnnotations().then((response) => {
                // Keep the state of the text for future comparison
                this.lastProcessedTextCleansed = cleansedText;

                this.annotatedText = response.text;
                this.annotations = response.answers.map((ann) => {
                    return convertQGenAnswerExtendedToAnnotation(ann)
                })
                this.annotationsReceived = true;

                let annotationsTypes = this.annotations.map((ann) => {
                    return ann.type;
                });
            }).catch((error) => {
                this.error("Error", error)
                
                // Force the user to go back to the previous tab
                slotProps.prevTab();

                // Uncheck the next tabs (navigation is not allowed)
                slotProps.uncheckNextTabs();
            });

            return Promise.resolve(true)
        },
        getAnnotations() {
            return this.qgenService.getAnswers({
                'text': this.text
            })
        },
        validateAnnotations() {
            if (this.getVisibleAnnotations().length == 0) {
                this.info("No annotations selected", "Please annotate the text or toggle the checkboxes to select the annotations")
                return Promise.resolve(false)
            }

            return Promise.resolve(true)
        },
        checkIfSameAnnotations(ann1, ann2) {
            return ann1.id == ann2.id;
        },
        onUserAnnotationAdded(annotation) {
            this.annotations.push(annotation);
        },
        onUserAnnotationDeleted(annotation) {
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
        showAllAnnotations() {
            this.rlIsSelected = true;
            this.nerIsSelected = true;
            this.oracleIsSelected = true;
            this.userAnnIsSelected = true;
        },
        showAnnotationsByType(type) {
            let annotations = this.annotations.filter((ann) => {
                return ann.type == type;
            });

            for (let i = 0; i < annotations.length; i++) {
                this.annotationService.addAnnotation(annotations[i]);
            }
        },
        hideAnnotationsByType(type) {
            let annotations = this.annotations.filter((ann) => {
                return ann.type == type;
            });

            for (let i = 0; i < annotations.length; i++) {
                this.annotationService.deleteAnnotation(annotations[i]);
            }
        },
        getVisibleAnnotations(){
            let visibleAnnotations = [];

            if (this.rlIsSelected) {
                visibleAnnotations = visibleAnnotations.concat(this.annotations.filter((ann) => {
                    return ann.type == "rl";
                }));
            }

            if (this.nerIsSelected) {
                visibleAnnotations = visibleAnnotations.concat(this.annotations.filter((ann) => {
                    return ann.type == "ner";
                }));
            }

            if (this.oracleIsSelected) {
                visibleAnnotations = visibleAnnotations.concat(this.annotations.filter((ann) => {
                    return ann.type == "oracle";
                }));
            }

            if (this.userAnnIsSelected) {
                visibleAnnotations = visibleAnnotations.concat(this.annotations.filter((ann) => {
                    return ann.type == "user";
                }));
            }

            return visibleAnnotations;
        },
        annotationFormatter(annotation) {
            const typeToCSSClass = {
                "rl": "rl-annotation-format",
                "ner": "ner-annotation-format",
                "oracle": "oracle-annotation-format",
                "user": "user-annotation-format"
            }
            return typeToCSSClass[annotation.type];
        },
        validateParameters(slotProps) {
            // Send only the visible annotations
            let visibleAnnotations = this.getVisibleAnnotations();

            // If the annotations are the same as the last processed annotations, then we don't need to process them again
            if (JSON.stringify(visibleAnnotations) == this.lastProcessedAnnotations) {
                return Promise.resolve(true)
            } else {
                this.questionsReceived = false;
            }

            this.getTest().then((response) => {
                // Keep the state of the annotations for future comparison
                this.lastProcessedAnnotations = JSON.stringify(visibleAnnotations);

                this.tableData = convertQGenTestsToQuestionsTable(response.tests)
                this.questionsReceived = true;
            }).catch((error) => {
                this.error("Error", error)

                // Force the user to go back to the previous tab
                slotProps.prevTab();

                // Uncheck the next tabs (navigation is not allowed)
                slotProps.uncheckNextTabs();
            });

            return Promise.resolve(true)
        },
        getTest() {
            let answers = this.getVisibleAnnotations().map((ann) => {
                return convertAnnotationToQGenAnswer(ann)
            });
            let payload = {
                text: this.text,
                answers: answers
            }
            return this.qgenService.getTest(payload)
        },
        success(header, footer) {
            this.toastService && this.toastService.success(footer, header)
        },
        info(header, footer) {
            this.toastService && this.toastService.info(footer, header)
        },
        error(header, footer) {
            this.toastService && this.toastService.error(footer, header, -1)
        },
        clearAnnotationStep() {
            this.rlIsSelected = false;
            this.nerIsSelected = false;
            this.oracleIsSelected = false;
            this.userAnnIsSelected = false;
            this.annotationsReceived = false;
            this.annotationsRendered = false;
            this.annotations = [];
            this.lastProcessedAnnotations = "";
            this.annotationService.clearAnnotations();
        }
    },

    watch: {
        rlIsSelected(newValue, oldValue) {
            if (newValue == true) {
                this.showAnnotationsByType("rl");
            } else {
                this.hideAnnotationsByType("rl");
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

.rl-annotation-format {
    background-color: #9077ffa9 !important;
    border-bottom: 2px solid #7556fd !important;
    border-radius: 3px !important;
}

.rl-checkbox {
    background-color: #9077ffa9 !important;
    border-color: #7556fd !important;
}

.rl-checkbox-focus {
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
