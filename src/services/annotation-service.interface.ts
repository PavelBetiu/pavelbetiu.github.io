import { InjectionKey } from "vue";

export interface Annotation {
    start: number,
    end: number,
    text: string,
    label: string,
}

export interface IAnnotationService {
    // elementId: reference to the DOM element where the annotation layer will be rendered
    init: (elementId: string) => void;
    addAnnotation: (annotation: Annotation) => void;
    deleteAnnotation: (annotation: Annotation) => void;
    setAnnotations: (annotations: Annotation[]) => void;
    getAnnotations: () => Annotation[];
    clearAnnotations: () => void;
}

export const ANNOTATION_SERVICE: InjectionKey<IAnnotationService> = Symbol("IAnnotationService");