export interface ModelData {
    id: number,
    dataset: string,
    metrics: string,
    params: string,
    type: string
}

export interface TextPrediction {
    task: string,
    result: string
}