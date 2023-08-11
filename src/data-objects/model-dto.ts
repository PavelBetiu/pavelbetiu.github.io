export interface ModelData {
    id: number,
    dataset: string,
    metrics: string,
    params: string,
    type: string,
    job_id: number
}

export interface TextPrediction {
    task: string,
    result: string
}

export interface CSVSubmitResponse {
    id: number,
}