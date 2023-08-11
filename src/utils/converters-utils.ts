import { ModelData, TextPrediction } from "@/data-objects/model-dto";
import { TableInput } from '@/components/widgets/table-input';

interface ModelAction {
    name: string;
    action: {(id: number): void};
    styleClass: string | null;
}

function preprocessNumber(value: number): string {
    if (Number.isInteger(value))
        return value.toString();

    if (value < 0.001) {
        return value.toExponential(3);
    }

    return value.toFixed(3);
}

export function convertToModelsTable(data: ModelData[], actions: ModelAction[]): TableInput {
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
                key: 'model_action',
                displayName: 'Actions',
            },
        ],
        rows: [],
    };
    
    for (const d of data) {
        if (d['type'] === 'TRANSFORMER') {
            for (const param of Object.keys(d['params'])) {
                if(typeof d['params'][param] == 'number') {
                    d['params'][param] = preprocessNumber(d['params'][param]);
                }
            }

            for (const metric of Object.keys(d['metrics'])) {
                if(typeof d['metrics'][metric] == 'number') {
                    d['metrics'][metric] = preprocessNumber(d['metrics'][metric]);
                }
            }
        }

        if (d['type'] === 'XGBOOST') {
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

        const row = {};
        row['model_id'] = d['id'];
        row['model_params'] = d['params'];
        row['model_dataset'] = d['dataset'];
        row['model_task_type'] = d['type'];
        row['model_metrics'] = d['metrics'];
        row['model_action'] = actions;

        input.rows.push(row as Record<string, unknown>);
    }

    return input;
}

export function convertToModelPredictionResultTable(data: TextPrediction[]) {
    const input: TableInput = {
        columns: [
            {
                key: 'task',
                displayName: 'Task'
            },
            {
                key: 'result',
                displayName: 'Result'
            }
        ],
        rows: []
    }

    for (const d of data) {
        const row = {};
        row['task'] = d['task'];

        const parsedResult = JSON.parse(d['result']);
        let result = {}
        if (Object.keys(parsedResult).length > 0) {
            let maxKey: any = null
            for (const key of Object.keys(JSON.parse(d['result']))) {
                if (maxKey == null) {
                    maxKey = key
                } else if (result[maxKey] < parsedResult[key]) {
                    maxKey = key
                }
                result[key] = parsedResult[key]
            }
            result['maxKey'] = maxKey
        } else {
            result = parsedResult
        }

        row['result'] = result;

        input.rows.push(row as Record<string, unknown>);
    }

    return input
}