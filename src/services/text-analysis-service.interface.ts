import { List } from "echarts";
import { InjectionKey } from "vue";

export interface RestoreDiacriticsRequest {
    text: string;
}

export interface GetKeywordsRequest {
    text: string;
    lang: number;
}

export interface RestoreDiacriticsResponse {
    text: string;
}

export interface GetKeywordsResponse {
    keywords: Array<string>;
}

export interface ITextAnalysisService {
    restoreDiacritics(request: RestoreDiacriticsRequest): Promise<RestoreDiacriticsResponse>;
    getKeywords(request: GetKeywordsRequest): Promise<GetKeywordsResponse>;
}

export const TEXT_ANALYSIS_SERVICE: InjectionKey<ITextAnalysisService> = Symbol('ITextAnalysisService');