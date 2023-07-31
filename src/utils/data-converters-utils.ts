import { TableInput } from '@/components/widgets/table-input';
import { GetDatasetsResponse } from '@/data-objects/datasets-dtos';

interface DatasetLanguage {
    id: number;
    label: string;
}

interface DatasetAction {
    name: string;
    action: {(id: number): void};
    styleClass: string | null;
}

interface Dataset {
    id: number;
    name: string;
    language: number;
    number_of_tasks: number;
    number_of_entries: number;
}

export function convertDatasetsToTableInput(datasets: Dataset[], languages: DatasetLanguage[], actions: DatasetAction[]): TableInput {
    const input: TableInput = {
        columns: [
            {
                key: 'id',
                displayName: 'ID',
            },
            {
                key: 'name',
                displayName: 'Name',
            },
            {
                key: 'language',
                displayName: 'Language',
            },
            {
                key: 'number_of_tasks',
                displayName: 'Number of tasks'
            },
            {
                key: 'number_of_entries',
                displayName: 'Number of entries'
            },
            {
                key: 'dataset_actions',
                displayName: 'Actions'
            }
        ],
        rows: [],
    };
    
    for (const dataset of datasets) {
        const dataset_row = {};
        dataset_row['id'] = dataset['id'];
        dataset_row['name'] = dataset['name'];
        dataset_row['language'] = languages.find(language => language.id === dataset['language'])?.label ?? 'Unknown';
        dataset_row['number_of_tasks'] = dataset['number_of_tasks'];
        dataset_row['number_of_entries'] = dataset['number_of_entries'];
        dataset_row['dataset_actions'] = actions;

        input.rows.push(dataset_row as Record<string, unknown>);
    }

    return input;
}