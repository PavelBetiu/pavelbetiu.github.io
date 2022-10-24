import { CsclResult, CsclEdge} from "@/data-objects/cscl-result";
import { CircularGraphInput, CircularGraphCategory, CircularGraphLink, CircularGraphNode} from "@/components/widgets/circular-graph-input";

export function convertToCircularGraphInput(data: CsclResult): CircularGraphInput {
    const circularGraphInput : CircularGraphInput = {
        nodes: [],
        links: [],
        categories: [],
        legendData: []
    };
    circularGraphInput.categories = data.graph.participants.map((participant: string) => {
        const category: CircularGraphCategory = {
            name: participant
        }
        return category
    });
    circularGraphInput.links = data.graph.edges.map((edge: CsclEdge) => {
        const link: CircularGraphLink = {
            source: edge.source,
            target: edge.target,
            value: Number(edge.weight.toFixed(2)),
            lineStyle: {
                curveness: 0.3
            }
        }
        return link
    });
    circularGraphInput.legendData = data.graph.participants;
    circularGraphInput.nodes = data.graph.participants.map((participant: string) => {
        const node: CircularGraphNode = {
            category: circularGraphInput.categories.findIndex((category: CircularGraphCategory) => category.name === participant),
            id: participant,
            label: {
                show: true
            },
            name: participant,
            symbolSize: (data.participants[participant]["CNAIndices.OUTDEGREE"] + data.participants[participant]["CNAIndices.INDEGREE"]) / 33,
            value: data.participants[participant]["CNAIndices.OUTDEGREE"] + data.participants[participant]["CNAIndices.INDEGREE"]
        }
        return node
    });
    return circularGraphInput;
}