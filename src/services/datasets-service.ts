import axios from 'axios';
import { ImportDatasetResponse } from '@/data-objects/datasets-dtos';
import { IDatasetsService, ImportDatasetRequest } from "./datasets-service.interface";

export class DatasetsService implements IDatasetsService {

  public async importDataset(request: ImportDatasetRequest): Promise<ImportDatasetResponse> {
    const data = new FormData();
    data.append('lang', request.lang);
    data.append('name', request.name);
    data.append('task', request.task);
    data.append('zipfile', request.zipfile);
    data.append('csvfile', request.csvfile);
    const response = await axios.post('/services/datasets/add', data);
    return response.data;
  }

}
