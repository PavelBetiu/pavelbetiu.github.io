
export interface TableColumn {
  key: string;
  displayName: string;
}

export interface TableInput {
  columns: TableColumn[];
  rows: Record<string, unknown>[];
}
