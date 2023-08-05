export interface ImportDatasetResponse {
    id: number;
}

export interface ProcessDatasetResponse {
    id: number; // This is job id
}

export interface GetDatasetLanguagesResponse {
    languages: 
        {
            id: number;
            name: string;
        }[];
}

export interface GetDatasetsResponse {
    datasets: 
        {
            id: number;
            name: string;
            language: number;
            number_of_tasks: number;
            number_of_entries: number;
        }[];
}

export interface DeleteDatasetResponse {
    success: boolean;
}

export interface GetDatasetResponse {
    id: number;
    name: string;
    language: number;
    number_of_tasks: number;
    number_of_entries: number;
    processed: number;
    indices: boolean;
}