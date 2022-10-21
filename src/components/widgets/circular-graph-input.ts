export interface CircularGraphNode {
    category: number,
    id: string,
    label: CircularGraphLabel,
    name: string,
    symbolSize: number,
    value: number,
}

export interface CircularGraphLabel {
    show: boolean
}

export interface CircularGraphLink {
    source: string,
    target: string,
}
export interface CircularGraphCategory {
    name: string,
}

export interface CircularGraphInput {
    nodes: CircularGraphNode[],
    links: CircularGraphLink[],
    categories: CircularGraphCategory[],
    legendData: string[]
}
