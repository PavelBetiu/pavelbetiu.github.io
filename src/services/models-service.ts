import { ModelData, TextPrediction, CSVSubmitResponse } from "@/data-objects/model-dto";
import axios from "axios";

export class ModelService {
    async getAllModels(): Promise<ModelData[]> {
        return await axios.post('pipeline/models')
    }

    async textPredict(model_id: number, text: string): Promise<TextPrediction[]> {
        return await axios.post(`pipeline/models/${model_id}/predict`, {text: text})
    }

    async submitCSV(model_id: number, csvfile: File): Promise<CSVSubmitResponse> {
        const data = new FormData();
        data.append('csvfile', csvfile);
        return await axios.post(`pipeline/models/${model_id}/predict`, data)
    }

    async downloadFeatures(model_id: number): Promise<Blob> {
        return await axios.post(`pipeline/models/${model_id}/features`, {}, {responseType: 'blob'})
    }

    tpred: TextPrediction[] = [
        {
            task: "c1",
            result: "{\"l1\":0.25, \"l2\": 0.75}"
        },
        {
            task: "c2",
            result: "{\"l1\":0.6, \"l2\": 0.4}"
        },
        {
            task: "c3",
            result: "0.74"
        },
    ]

    tpred2: TextPrediction[] = [
        {
            task: "c1",
            result: "0.74"
        },
        {
            task: "c2",
            result: "0.26"
        },
    ]

    async dummyTextPredict(model_id: number, text: string): Promise<TextPrediction[]> {
        return new Promise(resolve => setTimeout(() => resolve(this.tpred), 1573));
    }
}