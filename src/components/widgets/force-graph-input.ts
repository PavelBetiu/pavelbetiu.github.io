export interface ForceGraphCategory {
    name: string
}

export interface ForceGraphLink {
    source: string,
    target: string,
    value: number,
    lineStyle: {
        width: number,
        curveness: number
    }
}

export interface ForceGraphNode {
    category: number,
    id: string,
    name: string,
    symbolSize: number,
    value: number
}

export interface ForceGraphInput {
    categories: ForceGraphCategory[],
    links: ForceGraphLink[],
    nodes: ForceGraphNode[]
}