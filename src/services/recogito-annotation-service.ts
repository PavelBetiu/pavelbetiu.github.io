import { IAnnotationService, Annotation, UserSelectedAnnotationCallbacks } from "./annotation-service.interface"
import {
    Recogito,
    init
} from '@recogito/recogito-js'

export interface TextPositionSelector {
    type: "TextPositionSelector",
    start: number,
    end: number
}

export interface TextQuoteSelector {
    type: "TextQuoteSelector",
    exact: string
}

export interface TextualBody {
    type: "TextualBody",
    value: string,
    purpose: "commenting" | "tagging"
}

export interface RecogitoAnnotation {
    type: "Annotation",
    body: TextualBody[],
    target: {
        selector: [TextQuoteSelector, TextPositionSelector]
    },
    id: string
}

export class RecogitoAnnotationService implements IAnnotationService {
    private recogito: Recogito;
    
    public init(elementId: string, callbacks?: UserSelectedAnnotationCallbacks): void {
        this.recogito = init({
            content: document.getElementById(elementId),
        });
        
        this.setupUserSelectedAnnotationActionCallbacks(callbacks);
    }

    private setupUserSelectedAnnotationActionCallbacks(callbacks?: UserSelectedAnnotationCallbacks): void {
        this.recogito.on('createAnnotation', (annotation: RecogitoAnnotation) => {
            console.log("onUserAddedAnnotation body: ", annotation.body)

            // filter all the tags added by the user
            // annotation.body = annotation.body.filter((body: TextualBody) => {
            //     return body.purpose !== "tagging";
            // });


            // todo some problem here, concurrency problem?s
            console.log("after filtering: ", annotation.body)

            // add the user tag
            annotation.body.push({
                type: "TextualBody",
                value: "user",
                purpose: "tagging"
            });

            console.log("after adding user tag: ", annotation.body)
            
            if (callbacks?.onUserAddedAnnotation) {
                callbacks.onUserAddedAnnotation(this.recogitoAnnotationToGenericAnnotation(annotation));
            }
        });
        this.recogito.on('deleteAnnotation', (annotation: RecogitoAnnotation) => {
            console.log("onUserDeletedAnnotation: ", annotation)
            
            if (callbacks?.onUserDeletedAnnotation) {
                callbacks.onUserDeletedAnnotation(this.recogitoAnnotationToGenericAnnotation(annotation));
            }
        });
        this.recogito.on('updateAnnotation', (annotation: RecogitoAnnotation, previous: RecogitoAnnotation) => {
            console.log("onUserUpdatedAnnotation: ", annotation)

            // get the new tags
            const newTags: TextualBody[] = annotation.body.filter((body: TextualBody) => {
                return body.purpose === "tagging";
            });

            console.log("newTags: ", newTags)

            // get the previous tag (the one that stores the type of the annotation)
            const previousTag: TextualBody = previous.body.find((body: TextualBody) => {
                return body.purpose === "tagging";
            })!;

            console.log("previousTag: ", previousTag)

            // if there are no new tags, then the previous tag was deleted
            if (newTags.length === 0) {
                annotation.body.push(previousTag);
            } else { // if there is one new tag, then the previous tag was updated possibly
                annotation.body = annotation.body.filter((body: TextualBody) => {
                    return body.purpose !== "tagging";
                });

                annotation.body.push(previousTag);
            }

            console.log("annotation.body: ", annotation.body)

            if (callbacks?.onUserUpdatedAnnotation) {
                callbacks.onUserUpdatedAnnotation(this.recogitoAnnotationToGenericAnnotation(annotation));
            }
        });
    }

    private checkIfSameGenericAnnotation(annotation1: Annotation, annotation2: Annotation): boolean {
        return annotation1.id === annotation2.id;
    }

    public addAnnotation(annotation: Annotation): void {
        console.log("addAnnotation: ", annotation)

        // check if annotation overlaps with existing annotations
        // commented due to rendering issues
        // const recogitoAnnotations: RecogitoAnnotation[] = this.recogito.getAnnotations();
        // const overlappingAnnotations: RecogitoAnnotation[] = recogitoAnnotations.filter((recogitoAnnotation: RecogitoAnnotation) => {
        //     return recogitoAnnotation.target.selector[1].start <= annotation.end && recogitoAnnotation.target.selector[1].end >= annotation.start;
        // });

        // if (overlappingAnnotations.length > 0) {
        //     throw new Error("Add: Annotation overlaps with existing annotations");
        // }

        this.recogito.addAnnotation(this.genericAnnotationToRecogitoAnnotation(annotation));
    }

    public deleteAnnotation(annotation: Annotation): void {
        console.log("deleteAnnotation: ", annotation)

        const recogitoAnnotation: RecogitoAnnotation | undefined = this.recogito.getAnnotations().find((recogitoAnnotation: RecogitoAnnotation) => {
            return this.checkIfSameGenericAnnotation(annotation, this.recogitoAnnotationToGenericAnnotation(recogitoAnnotation));
        });

        if (recogitoAnnotation === undefined) {
            throw new Error("Delete: Annotation does not exist");
        }

        this.recogito.removeAnnotation(recogitoAnnotation);
    }

    public setAnnotations(annotations: Annotation[]): void {
        console.log("setAnnotations: ", annotations)

        for (const annotation of annotations) {
            this.addAnnotation(annotation);
        }
    }

    public getAnnotations(): Annotation[] {
        console.log("getAnnotations")

        const recogitoAnnotations: RecogitoAnnotation[] = this.recogito.getAnnotations();
        const annotations: Annotation[] = recogitoAnnotations.map((recogitoAnnotation: RecogitoAnnotation) => {
            return this.recogitoAnnotationToGenericAnnotation(recogitoAnnotation);
        });

        return annotations;
    }

    public clearAnnotations(): void {
        console.log("clearAnnotations")

        this.recogito.clearAnnotations();
    }

    private genericAnnotationToRecogitoAnnotation(annotation: Annotation): RecogitoAnnotation {
        const recogitoAnnotation: RecogitoAnnotation = {
            type: "Annotation",
            body: [{
                type: "TextualBody",
                value: annotation.label,
                purpose: "commenting"
            }, {
                type: "TextualBody",
                value: annotation.type,
                purpose: "tagging"
            }],
            target: {
                selector: [{
                    type: "TextQuoteSelector",
                    exact: annotation.text
                }, {
                    type: "TextPositionSelector",
                    start: annotation.start,
                    end: annotation.end
                }]
            },
            id: annotation.id
        }

        return recogitoAnnotation;
    }

    private recogitoAnnotationToGenericAnnotation(recogitoAnnotation: RecogitoAnnotation): Annotation {
        const annotation: Annotation = {
            id: recogitoAnnotation.id,
            type: recogitoAnnotation.body[1].value,
            start: recogitoAnnotation.target.selector[1].start,
            end: recogitoAnnotation.target.selector[1].end,
            text: recogitoAnnotation.target.selector[0].exact,
            label: recogitoAnnotation.body[0].value
        }

        return annotation;
    }
}