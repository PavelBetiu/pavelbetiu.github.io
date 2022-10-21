import { ForceGraphInput, ForceGraphCategory, ForceGraphLink, ForceGraphNode } from "@/components/widgets/force-graph-input";
import { CsclEdge, CsclResult, CsclScores } from "@/data-objects/cscl-result";

export function convertToForceGraphInput(data: CsclResult): ForceGraphInput {
    function getNodes(participants: Record<string, CsclScores>, categories: ForceGraphCategory[]): ForceGraphNode[] {
        const nodes: ForceGraphNode[] = []
        
        for(const participant in participants) {
            const score: CsclScores = participants[participant]

            const node: ForceGraphNode = {
                category: categories.findIndex(x => x.name === participant),
                id: participant,
                name: participant,
                symbolSize: 10,
                value: score["CNAIndices.INDEGREE"] + score["CNAIndices.OUTDEGREE"]
            }

            nodes.push(node)
        }

        return nodes
    }
    
    const forceGraphInput: ForceGraphInput = {
        categories: data.graph.participants.map((participant: string) => {
            const category: ForceGraphCategory = {
                name: participant
            }

            return category
        }),
        links: data.graph.edges.map((edge: CsclEdge) => {
            const link: ForceGraphLink = {
                source: edge.source,
                target: edge.target,
            }

            return link
        }),
        nodes: []
    }

    forceGraphInput.nodes = getNodes(data.participants, forceGraphInput.categories)

    return forceGraphInput;
}