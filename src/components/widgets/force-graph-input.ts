export interface ForceGraphCategory {
    name: string
}

export interface ForceGraphLink {
    source: string,
    target: string
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