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
    
    public init(elementId: string, callbacks?: UserSelectedAnnotationCallbacks, formatter?: (annotation: Annotation) => string): void {
        this.recogito = init({
            content: document.getElementById(elementId),
            allowEmpty: true,
            formatter: (recogitoAnnotation: RecogitoAnnotation) => {
                const annotation: Annotation = this.recogitoAnnotationToGenericAnnotation(recogitoAnnotation);
                return formatter ? formatter(annotation) : "";
            },
        });
        
        this.setupUserSelectedAnnotationActionCallbacks(callbacks);
    }

    private setupUserSelectedAnnotationActionCallbacks(callbacks?: UserSelectedAnnotationCallbacks): void {
        this.recogito.on('createAnnotation', async (annotation: RecogitoAnnotation) => {
            console.log("createAnnotation");
            console.log(annotation);

            annotation.body.push({
                type: "TextualBody",
                value: "USER PICKED",
                purpose: "commenting"
            });

            annotation.body.push({
                type: "TextualBody",
                value: "user",
                purpose: "tagging"
            });
            
            if (callbacks?.onUserAddedAnnotation) {
                callbacks.onUserAddedAnnotation(this.recogitoAnnotationToGenericAnnotation(annotation));
            }
        });
        this.recogito.on('deleteAnnotation', (annotation: RecogitoAnnotation) => {            
            if (callbacks?.onUserDeletedAnnotation) {
                callbacks.onUserDeletedAnnotation(this.recogitoAnnotationToGenericAnnotation(annotation));
            }
        });
        this.recogito.on('updateAnnotation', (annotation: RecogitoAnnotation, previous: RecogitoAnnotation) => {
            if (callbacks?.onUserUpdatedAnnotation) {
                callbacks.onUserUpdatedAnnotation(this.recogitoAnnotationToGenericAnnotation(annotation));
            }
        });
    }

    private checkIfSameGenericAnnotation(annotation1: Annotation, annotation2: Annotation): boolean {
        return annotation1.id === annotation2.id;
    }

    public addAnnotation(annotation: Annotation): void {
        this.recogito.addAnnotation(this.genericAnnotationToRecogitoAnnotation(annotation));
    }

    public deleteAnnotation(annotation: Annotation): void {
        const recogitoAnnotation: RecogitoAnnotation | undefined = this.recogito.getAnnotations().find((recogitoAnnotation: RecogitoAnnotation) => {
            return this.checkIfSameGenericAnnotation(annotation, this.recogitoAnnotationToGenericAnnotation(recogitoAnnotation));
        });

        if (recogitoAnnotation === undefined) {
            throw new Error("Delete: Annotation does not exist");
        }

        this.recogito.removeAnnotation(recogitoAnnotation);
    }

    public setAnnotations(annotations: Annotation[]): void {
        for (const annotation of annotations) {
            this.addAnnotation(annotation);
        }
    }

    public getAnnotations(): Annotation[] {
        const recogitoAnnotations: RecogitoAnnotation[] = this.recogito.getAnnotations();
        const annotations: Annotation[] = recogitoAnnotations.map((recogitoAnnotation: RecogitoAnnotation) => {
            return this.recogitoAnnotationToGenericAnnotation(recogitoAnnotation);
        });

        return annotations;
    }

    public clearAnnotations(): void {
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
        let type: string;
        let label: string;

        // body is empty when user creates an annotation
        if (recogitoAnnotation.body.length === 0) {
            type = "user";
            label = "USER PICKED";
        } else {
            type = recogitoAnnotation.body[1].value;
            label = recogitoAnnotation.body[0].value;
        }

        const annotation: Annotation = {
            id: recogitoAnnotation.id,
            type: type,
            start: recogitoAnnotation.target.selector[1].start,
            end: recogitoAnnotation.target.selector[1].end,
            text: recogitoAnnotation.target.selector[0].exact,
            label: label
        }

        return annotation;
    }
}