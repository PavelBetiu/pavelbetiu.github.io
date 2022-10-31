export interface CircularGraphNode {
    category: number,
    id: string,
    label: CircularGraphLabel,
    name: string,
    symbolSize: number,
    value: number,
    tooltip: {
        trigger: string,
        formatter: string
    }
}

export interface CircularGraphLabel {
    show: boolean
}

export interface CircularGraphLink {
    source: string,
    target: string,
    value: number,
    lineStyle: {
        curveness: number,
        color: string
    },
    tooltip: {
        trigger: string,
        formatter: string
    },
    emphasis: {
        lineStyle: {
            width: number,
            opacity: number
        }
    }
    symbol: string[]
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
