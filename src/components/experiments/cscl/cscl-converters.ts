import { map } from 'lodash';
import { CsclResult } from "@/data-objects/cscl-result";
import { TableInput } from '@/components/widgets/table-input';

export function convertToContributionsTable(result: CsclResult): TableInput {
  const input: TableInput = {
    columns: [
      {
        key: 'id',
        displayName: 'Identifier',
      },
      {
        key: 'text',
        displayName: 'Text',
      },
      {
        key: 'importance',
        displayName: 'Importance',
      },
    ],
    rows: [],
  };
  input.rows = map(result.contributions, c => {
    return c as Record<string, unknown>;
  });
  return input;
}
