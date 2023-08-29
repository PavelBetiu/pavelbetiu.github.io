import { InjectionKey } from "vue";

export interface RestoreDiacriticsRequest {
    text: string;
}

export interface RestoreDiacriticsResponse {
    text: string;
}

export interface SentimentAnalysisRequest {
    text: string;
}

export interface SentimentAnalysisResponse {
    labels: number[]
}

export interface OffensiveLanguageRequest {
    text: string;
}

export interface OffensiveLanguageResponse {
    labels: number[];
}

export interface ITextAnalysisService {
    restoreDiacritics(request: RestoreDiacriticsRequest): Promise<RestoreDiacriticsResponse>;
    sentimentAnalysis(request: SentimentAnalysisRequest): Promise<SentimentAnalysisResponse>;
    offensiveLanguage(request: OffensiveLanguageRequest): Promise<OffensiveLanguageResponse>;
}

export const TEXT_ANALYSIS_SERVICE: InjectionKey<ITextAnalysisService> = Symbol('ITextAnalysisService');