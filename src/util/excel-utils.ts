import xlsx from "json-as-xlsx";

export interface ExcelColumn {
    label: string;
    value: string;
}

export interface ExcelRow {
    [key: string]: any;
}

export interface ExcelSheet {
    sheet: string;
    columns: ExcelColumn[];
    content: ExcelRow[];
}

export interface ExcelData {
    sheets: ExcelSheet[];
}

export interface ExcelSettings {
    fileName: string;
    extraLength: number;
    writeMode: string;
    writeOptions: any;
}
  
export function exportJsonAsExcel(data: ExcelData, settings: ExcelSettings) {
    xlsx(data.sheets, settings)
}