import { ModelData } from "@/data-objects/model-dto";
import axios from "axios";

export class ModelService {
    async getAllModels(): Promise<ModelData[]> {
        return await axios.post('pipeline/models')
    }

    // async getModelsByDatasetID() {}
}