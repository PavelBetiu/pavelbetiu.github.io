import { CsclResult, CsclEdge, CsclScores} from "@/data-objects/cscl-result";
import { CircularGraphInput, CircularGraphCategory, CircularGraphLink, CircularGraphNode} from "@/components/widgets/circular-graph-input";
import { ForceGraphInput, ForceGraphCategory, ForceGraphLink, ForceGraphNode } from "@/components/widgets/force-graph-input";
import { map } from 'lodash';
import { TableInput } from '@/components/widgets/table-input';

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

    const edges = new Map();

    data.graph.edges.forEach((edge: CsclEdge) => {
        const source = edge.source;
        const target = edge.target;

        // Check whether the edge already exists in the opposite direction
        // (from target to source)
        const oppositeEdge = edges.get(`${target}-${source}`);

        // If the opposite edge doesn't exist, add the current edge to the map
        if (!oppositeEdge) {
            const newEdge = {
                source: source,
                target: target,
                value: Number(edge.weight.toFixed(2)),
                formatter: `${source} -> ${target}: ${edge.weight.toFixed(2)} <br />`,
                type: 1 // 1: uni-directional, 2: bi-directional
            }

            edges.set(`${source}-${target}`, newEdge);
        } else {
            // If the opposite edge exists, update the value of the edge
            // and the formatter
            oppositeEdge.value += Number(edge.weight.toFixed(2));
            oppositeEdge.formatter += `${source} -> ${target}: ${edge.weight.toFixed(2)} <br />`;
            oppositeEdge.type = 2; // 1: uni-directional, 2: bi-directional
        }
    });

    circularGraphInput.links = Array.from(edges.values()).map((edge) => {
        const link: CircularGraphLink = {
            source: edge.source,
            target: edge.target,
            value: edge.value,
            lineStyle: {
                curveness: 0.3,

                // If the edge is bi-directional, use a different color (black)
                color: edge.type === 1 ? 'source' : '#000'
            },
            tooltip: {
                trigger: "item",
                formatter: edge.formatter
            },

            // If the edge is bi-directional, use arrows on both ends
            symbol: edge.type === 1 ? ["none", "arrow"] : ["arrow", "arrow"],

            // On emphasis, increase the width of the line and make it more opaque
            emphasis: {
                lineStyle: {
                    width: 1.5,
                    opacity: 1
                }
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
            value: Number((data.participants[participant]["CNAIndices.OUTDEGREE"] + data.participants[participant]["CNAIndices.INDEGREE"]).toFixed(2)),
            tooltip: {
                trigger: "item",
                formatter: `{b} <br /> In-degree + Out-degree = {c}`
            }
        }
        return node
    });
    return circularGraphInput;
}

export function convertToForceGraphInput(data: CsclResult): ForceGraphInput {
    function getNodes(participants: Record<string, CsclScores>, categories: ForceGraphCategory[]): ForceGraphNode[] {
        const nodes: ForceGraphNode[] = []

        for (const participant in participants) {
            const score: CsclScores = participants[participant]

            const node: ForceGraphNode = {
                category: categories.findIndex(x => x.name === participant),
                id: participant,
                name: participant,
                symbolSize: (score["CNAIndices.INDEGREE"] + score["CNAIndices.OUTDEGREE"]) / 30,
                value: Number((score["CNAIndices.INDEGREE"] + score["CNAIndices.OUTDEGREE"]).toFixed(2))
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
                value: Number((edge.weight).toFixed(2)),
                lineStyle: {
                    width: 1,
                    curveness: 0.05
                },
            }

            return link
        }),
        nodes: []
    }

    forceGraphInput.nodes = getNodes(data.participants, forceGraphInput.categories)

    return forceGraphInput;
}

export function convertToContributionsTable(result: CsclResult): TableInput {
  const input: TableInput = {
    columns: [
      {
        key: 'id',
        displayName: 'Identifier',
      },
      {
        key: 'text',
        displayName: 'Text',
      },
      {
        key: 'importance',
        displayName: 'Importance',
      },
    ],
    rows: [],
  };
  input.rows = map(result.contributions, c => {
    return c as Record<string, unknown>;
  });
  return input;
}
