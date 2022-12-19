import { InjectionKey } from 'vue';
import { ImportDatasetResponse } from '@/data-objects/datasets-dtos';

export interface ImportDatasetRequest {
    lang: string;
    name: string;
    task: string;
    zipfile: File;
    csvfile: File;
}

export interface IDatasetsService {
  importDataset(request: ImportDatasetRequest): Promise<ImportDatasetResponse>;
}

export const DATASETS_SERVICE: InjectionKey<IDatasetsService> = Symbol('IDatasetsService');