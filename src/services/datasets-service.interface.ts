import { InjectionKey } from 'vue';
import { ImportDatasetResponse, ProcessDatasetResponse, GetDatasetLanguagesResponse, GetDatasetsResponse, DeleteDatasetResponse, GetDatasetResponse, GetIndicesResponse } from '@/data-objects/datasets-dtos';

export interface ImportDatasetRequest {
    lang: string;
    name: string;
    task: string;
    zipfile: File;
    csvfile: File;
}

export interface ProcessDatasetRequest {
    dataset_id: number;
}

export interface IDatasetsService {
  importDataset(request: ImportDatasetRequest): Promise<ImportDatasetResponse>;
  processDataset(request: ProcessDatasetRequest): Promise<ProcessDatasetResponse>;
  deleteDataset(dataset_id: number): Promise<DeleteDatasetResponse>;
  getDataset(dataset_id: number): Promise<GetDatasetResponse>;
  getLanguages(): Promise<GetDatasetLanguagesResponse>;
  getDatasets(): Promise<GetDatasetsResponse>;
  getIndices(dataset_id: number): Promise<GetIndicesResponse>;
  downloadIndices(job_id: number): Promise<Blob>;
}

export const DATASETS_SERVICE: InjectionKey<IDatasetsService> = Symbol('IDatasetsService');