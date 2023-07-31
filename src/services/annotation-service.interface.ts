import { InjectionKey } from "vue";

export interface Annotation {
    id: string,     // unique identifier for the annotation, computed programmatically
    type: string,   // type of annotation, e.g. "OracleAnnotation"
    start: number,  // start index of the annotation in the text
    end: number,    // end index of the annotation in the text
    text: string,   // text of the annotation
    label: string,  // label of the annotation
}

// Callbacks for user actions taken for user selected annotations
export interface UserSelectedAnnotationCallbacks {
    onUserAddedAnnotation?: (annotation: Annotation) => void,
    onUserDeletedAnnotation?: (annotation: Annotation) => void,
    onUserUpdatedAnnotation?: (annotationNewState: Annotation) => void,
}

export interface IAnnotationService {
    // elementId: reference to the DOM element where the annotation layer will be rendered
    // callbacks: callbacks for user actions taken for user selected annotations
    // formatter: annotation formater, used to format annotations for display (e.g. change the color of the annotation)
    init: (elementId: string, callbacks?: UserSelectedAnnotationCallbacks, formatter?: (annotation: Annotation) => string) => void;
    addAnnotation: (annotation: Annotation) => void;
    deleteAnnotation: (annotation: Annotation) => void;
    setAnnotations: (annotations: Annotation[]) => void;
    getAnnotations: () => Annotation[];
    clearAnnotations: () => void;
}

export const ANNOTATION_SERVICE: InjectionKey<IAnnotationService> = Symbol("IAnnotationService");