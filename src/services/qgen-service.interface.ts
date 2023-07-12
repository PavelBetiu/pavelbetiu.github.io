import { InjectionKey } from "vue";
import { QGenAnswer, QGenAnswersResponse, QGenTestResponse } from "@/data-objects/qgen-dtos";

export interface QGenAnswersRequest {
    text: string;
}

export interface QGenTestRequest {
    text: string;
    answers: QGenAnswer[];
}

export interface IQGenService {
    getAnswers(request: QGenAnswersRequest): Promise<QGenAnswersResponse>;
    getTest(request: QGenTestRequest): Promise<QGenTestResponse>;
}

export const QGEN_SERVICE: InjectionKey<IQGenService> = Symbol('IQGenService');