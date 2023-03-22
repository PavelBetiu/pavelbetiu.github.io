export interface GanttChartInputData {
    category: string;
    start: string;
    end: string;
    color: string;
    task: string;
}

export interface GanttChartInput {
    data: GanttChartInputData[];
}