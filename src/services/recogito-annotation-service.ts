import { IAnnotationService, Annotation } from "./annotation-service.interface"
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
    
    public init(elementId: string): void {
        this.recogito = init({
            content: document.getElementById(elementId),
        });
    }

    public addAnnotation(annotation: Annotation): void {
        // check if annotation overlaps with existing annotations
        const recogitoAnnotations: RecogitoAnnotation[] = this.recogito.getAnnotations();
        const overlappingAnnotations: RecogitoAnnotation[] = recogitoAnnotations.filter((recogitoAnnotation: RecogitoAnnotation) => {
            return recogitoAnnotation.target.selector[1].start <= annotation.end && recogitoAnnotation.target.selector[1].end >= annotation.start;
        });

        if (overlappingAnnotations.length > 0) {
            throw new Error("Add: Annotation overlaps with existing annotations");
        }

        const recogitoAnnotation: RecogitoAnnotation = {
            type: "Annotation",
            body: [{
                type: "TextualBody",
                value: annotation.label,
                purpose: "commenting"
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
            id: this.generateRandomId()
        }
        this.recogito.addAnnotation(recogitoAnnotation);
    }

    public deleteAnnotation(annotation: Annotation): void {
        const recogitoAnnotation: RecogitoAnnotation | undefined = this.recogito.getAnnotations().find((recogitoAnnotation: RecogitoAnnotation) => {
            return recogitoAnnotation.target.selector[1].start === annotation.start && recogitoAnnotation.target.selector[1].end === annotation.end;
        });

        if (recogitoAnnotation === undefined) {
            throw new Error("Delete: Annotation not found");
        }

        this.recogito.deleteAnnotation(recogitoAnnotation);
    }

    public setAnnotations(annotations: Annotation[]): void {
        for (const annotation of annotations) {
            this.addAnnotation(annotation);
        }
    }

    public getAnnotations(): Annotation[] {
        const recogitoAnnotations: RecogitoAnnotation[] = this.recogito.getAnnotations();
        const annotations: Annotation[] = recogitoAnnotations.map((recogitoAnnotation: RecogitoAnnotation) => {
            return {
                start: recogitoAnnotation.target.selector[1].start,
                end: recogitoAnnotation.target.selector[1].end,
                text: recogitoAnnotation.target.selector[0].exact,
                label: recogitoAnnotation.body[0].value
            }
        });

        return annotations;
    }

    public clearAnnotations(): void {
        this.recogito.clearAnnotations();
    }

    private generateRandomId(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}