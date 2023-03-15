import { ModelData } from "@/data-objects/model-dto";
import { TableInput } from '@/components/widgets/table-input';

interface ModelAction {
    name: string;
    action: {(id: number): void};
    styleClass: string | null;
}

interface ModelTaskType {
    id: number;
    name: string;
}

function preprocessNumber(value: number): string {
    if (Number.isInteger(value))
        return value.toString();

    if (value < 0.001) {
        return value.toExponential(3);
    }

    return value.toFixed(3);
}

export function convertToModelsTable(data: ModelData[], actions: ModelAction[], task_types: ModelTaskType[]): TableInput {
    const input: TableInput = {
        columns: [
            {
                key: 'model_id',
                displayName: 'ID',
            },
            {
                key: 'model_dataset',
                displayName: 'Dataset',
            },
            {
                key: 'model_task_type',
                displayName: 'Task type',
            },
            {
                key: 'model_params',
                displayName: 'Parameters',
            },
            {
                key: 'model_metrics',
                displayName: 'Metrics/Performance',
            },
            {
                key: 'model_job_id',
                displayName: 'Job ID',
            },
            {
                key: 'model_action',
                displayName: 'Actions',
            },
        ],
        rows: [],
    };
    
    for (const d of data) {
        if (d['type_id'] === 1) {
            for (const param of Object.keys(d['params'])) {
                if(typeof d['params'][param] == 'number') {
                    d['params'][param] = preprocessNumber(d['params'][param]);
                }

                // if (param === 'features') {
                //     d['params'][param] = d['params'][param][0];
                // }
            }

            for (const metric of Object.keys(d['metrics'])) {
                if(typeof d['metrics'][metric] == 'number') {
                    d['metrics'][metric] = preprocessNumber(d['metrics'][metric]);
                }
            }
        }

        if (d['type_id'] === 2) {
            for (const params of d['params']) {
                for (const param of Object.keys(params)) {
                    if(typeof params[param] == 'number'){
                        params[param] = preprocessNumber(params[param]);
                    }
                }
            }


            for (const metrics of d['metrics']) {
                for (const metric of Object.keys(metrics)) {
                    if (typeof metrics[metric] == 'number') {
                        metrics[metric] = preprocessNumber(metrics[metric]);
                    }
                }
            }
        }

        const dataset_row = {};
        dataset_row['model_id'] = d['id'];
        dataset_row['model_params'] = d['params'];
        dataset_row['model_dataset'] = d['dataset_id'];
        dataset_row['model_job_id'] = d['job_id'];
        dataset_row['model_task_type'] = 
        {
            id: d['type_id'],
            name: task_types.find((task_type) => task_type.id === d['type_id'])?.name,
        };
        dataset_row['model_metrics'] = d['metrics'];
        dataset_row['model_action'] = actions;

        input.rows.push(dataset_row as Record<string, unknown>);
    }

    return input;
}