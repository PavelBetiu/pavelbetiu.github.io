import { ForceGraphInput, ForceGraphCategory, ForceGraphLink, ForceGraphNode } from "@/components/widgets/force-graph-input";
import { CsclEdge, CsclResult, CsclScores } from "@/data-objects/cscl-result";
import { map } from 'lodash';
import { TableInput } from '@/components/widgets/table-input';

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
