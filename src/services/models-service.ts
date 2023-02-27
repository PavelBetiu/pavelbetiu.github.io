import { ModelData } from "@/data-objects/model-dto";

export class ModelService {
    private static readonly data: ModelData[] = [
        {
            id: 1,
            dataset_label: 'Dataset 1',
            dataset_task_type: 'Classification',
            model_type: 'CNN',
            config: 'Config 1',
            metrics: 'Metrics 1',
            date: '2021-01-01',
        
        },
        {
            id: 2,
            dataset_label: 'Dataset 2',
            dataset_task_type: 'Classification',
            model_type: 'CNN',
            config: 'Config 2',
            metrics: 'Metrics 2',
            date: '2021-01-02',
        }
    ];

    public static getModels(): ModelData[] {
        return this.data;
    }

    //TODO: axios call to get model data
}