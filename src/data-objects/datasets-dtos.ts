export interface ImportDatasetResponse {
    id: number;
}

export interface ProcessDatasetResponse {
    id: number;
    // TODO: Add other parameters
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