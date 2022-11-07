export interface StackedLineChartInput {
    series: {
        name: string; // Name of the series (e.g. "Participant 1")
        type: string;
        step: string;
        data: number[][]; // [x, y] array (x is id, y is cumulative importance of the contribution)
        showSymbol: boolean;
    }[]; // Array of series
}