import { ModelData } from "@/data-objects/model-dto";
import { TableInput } from '@/components/widgets/table-input';

interface ModelAction {
    name: string;
    action: {(id: number): void};
    styleClass: string | null;
}

export function convertToModelsTable(data: ModelData[], actions: ModelAction[]): TableInput {
    const input: TableInput = {
        columns: [
            {
                key: 'dataset_label',
                displayName: 'Dataset label',
            },
            {
                key: 'dataset_task_type',
                displayName: 'Dataset task type',
            },
            {
                key: 'model_type',
                displayName: 'Model type'
            },
            {
                key: 'config',
                displayName: 'Config/Params',
            },
            {
                key: 'metrics',
                displayName: 'Metrics/Performance',
            },
            {
                key: 'date',
                displayName: 'Date',
            },
            {
                key: 'model_action',
                displayName: 'Action',
            },
        ],
        rows: [],
    };
    
    for (const d of data) {
        const dataset_row = {};
        dataset_row['dataset_label'] = d['dataset_label'];
        dataset_row['dataset_task_type'] = d['dataset_task_type'];
        dataset_row['model_type'] = d['model_type'];
        dataset_row['config'] = d['config'];
        dataset_row['metrics'] = d['metrics'];
        dataset_row['date'] = d['date'];
        dataset_row['action'] = d['action'];
        dataset_row['model_action'] = actions;

        input.rows.push(dataset_row as Record<string, unknown>);
    }

    return input;
}