import axios from 'axios';
import { DeleteDatasetResponse, GetDatasetLanguagesResponse, GetDatasetsResponse, ImportDatasetResponse, ProcessDatasetResponse, GetDatasetResponse } from '@/data-objects/datasets-dtos';
import { IDatasetsService, ImportDatasetRequest, ProcessDatasetRequest } from "./datasets-service.interface";

export class DatasetsService implements IDatasetsService {
	public async getDatasets(): Promise<GetDatasetsResponse> {
		const response = await axios.post('/pipeline/datasets', {});
		return response.data;
	}

	public async getLanguages(): Promise<GetDatasetLanguagesResponse> {
		const response = await axios.post('/services/languages', {});
		return response.data;
	}

	public async importDataset(request: ImportDatasetRequest): Promise<ImportDatasetResponse> {
		const data = new FormData();
		data.append('lang', request.lang);
		data.append('name', request.name);
		data.append('task', request.task);
		data.append('zipfile', request.zipfile);
		data.append('csvfile', request.csvfile);
		const response = await axios.post('/pipeline/datasets/add', data);
		return response.data;
	}

	public async processDataset(request: ProcessDatasetRequest): Promise<ProcessDatasetResponse> {
		const data = new FormData();
		data.append('dataset_id', request.dataset_id.toString());
		return await axios.post(`/pipeline/datasets/${request.dataset_id}/process`, data);
	}

	public async deleteDataset(dataset_id: number): Promise<DeleteDatasetResponse> {
		return await axios.post(`/pipeline/datasets/${dataset_id}/delete`, {});
	}

	public async getDataset(dataset_id: number): Promise<GetDatasetResponse> {
		const response = await axios.post(`/pipeline/datasets/${dataset_id}`, {});
		return response.data;
	}

	public async getIndices(dataset_id: number): Promise<ProcessDatasetResponse> {
		return await axios.post(`/pipeline/datasets/${dataset_id}/indices`, {});
	}

	public async downloadIndices(job_id: number): Promise<Blob> {
        return await axios.post(`services/jobs/${job_id}/result`, {}, {responseType: 'arraybuffer'})
    }
}
