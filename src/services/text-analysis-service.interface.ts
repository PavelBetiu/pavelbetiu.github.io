import { InjectionKey } from "vue";

export interface RestoreDiacriticsRequest {
    text: string;
}

export interface RestoreDiacriticsResponse {
    text: string;
}

export interface ITextAnalysisService {
    restoreDiacritics(request: RestoreDiacriticsRequest): Promise<RestoreDiacriticsResponse>;
}

export const TEXT_ANALYSIS_SERVICE: InjectionKey<ITextAnalysisService> = Symbol('ITextAnalysisService');