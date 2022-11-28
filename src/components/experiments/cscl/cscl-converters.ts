import { CsclResult, CsclEdge, CsclScores, CsclContribution } from "@/data-objects/cscl-result";
import { CircularGraphInput, CircularGraphCategory, CircularGraphLink, CircularGraphNode } from "@/components/widgets/circular-graph-input";
import { ForceGraphInput, ForceGraphCategory, ForceGraphLink, ForceGraphNode } from "@/components/widgets/force-graph-input";
import { StackedLineChartInput } from "@/components/widgets/stacked-line-chart-input";
import { map } from 'lodash';
import { TableInput } from '@/components/widgets/table-input';
import { StackedLineGradientGraphInput } from '@/components/widgets/stacked-line-gradient-graph-input';

export function convertToCircularGraphInput(data: CsclResult): CircularGraphInput {
    const circularGraphInput: CircularGraphInput = {
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
        key: 'ref',
        displayName: 'Reference Identifier',
      },
      {
        key: 'participant',
        displayName: 'Participant',
      },
      {
        key: 'text',
        displayName: 'Text',
      },
      {
        key: 'time',
        displayName: 'Time',
      },
      {
        key: 'importance',
        displayName: 'Importance',
      },
      {
        key: 'social_kb',
        displayName: 'Social KB',
      },
      {
        key: 'degree',
        displayName: 'In Degree / Out Degree',
      },
    ],
    rows: [],
  };
  input.rows = map(result.contributions, c => {
    c.ref = c.ref || c.id;
    c.importance = Math.round(c.importance * 100) / 100;
    c.social_kb = Math.round(c.social_kb * 100) / 100;
    c.degree = `${Math.round(c.in_degree * 100) / 100} / ${Math.round(c.out_degree * 100) / 100}`;
    return c as Record<string, unknown>;
  });
  return input;
}

export function convertToParticipantsTable(result: CsclResult): TableInput {
    const input: TableInput = {
        columns: [
            {
                key: 'name',
                displayName: 'Name',
            },
            {
                key: 'contributions',
                displayName: 'Contributions Score',
            },
            {
                key: 'skb',
                displayName: 'Social KB'
            },
            {
                key: 'outdegree',
                displayName: 'Outdegree',
            },
            {
                key: 'indegree',
                displayName: 'Indegree'
            },
            {
                key: 'betweenness',
                displayName: 'Betweenness'
            },
            {
                key: 'closeness',
                displayName: 'Closeness'
            },
            {
                key: 'eigenvector',
                displayName: 'Eigenvector'
            },
        ],
        rows: [],
    };
    
    for (const key in result.participants) {
        const participant_row = {};
        participant_row["name"] = key;
        participant_row["contributions"] = Number(result.participants[key]["CNAIndices.CONTRIBUTIONS_SCORE"].toFixed(2));
        participant_row["skb"] = Number(result.participants[key]["CNAIndices.SOCIAL_KB"].toFixed(2));
        participant_row["outdegree"] = Number(result.participants[key]["CNAIndices.OUTDEGREE"].toFixed(2));
        participant_row["indegree"] = Number(result.participants[key]["CNAIndices.INDEGREE"].toFixed(2));
        participant_row["betweenness"] = Number(result.participants[key]["CNAIndices.BETWEENNESS"].toFixed(2));
        participant_row["closeness"] = Number(result.participants[key]["CNAIndices.CLOSENESS"].toFixed(2));
        participant_row["eigenvector"] = Number(result.participants[key]["CNAIndices.EIGENVECTOR"].toFixed(2));

        input.rows.push(participant_row as Record<string, unknown>);
    }

    return input;
}

export function convertToStackedLineChartInput(result: CsclResult): StackedLineChartInput {
    const stackedLineChartInput: StackedLineChartInput = {
        series: []
    }
    // For each participant in the cscl result create a series for the stacked line chart
    for (const participant of result.graph.participants) {
        // Initialize the data array for the series and the series
        const series_data: number[][] = []
        const series = {
            name: participant,
            type: "line",
            step: "end",
            data: series_data,
            showSymbol: false
        }

        // Grab the correponding contributions for the participant
        const contributions = result.contributions.filter(contribution => contribution.participant === participant)

        // Sort the contributions by id
        contributions.sort((a, b) => a.id - b.id)

        // Cumulative sum of the importance of the contributions
        let cumulativeImportance = 0

        // For each contribution add the cumulative importance to the series
        for (const contribution of contributions) {
            const data = [contribution.id, Number((cumulativeImportance + contribution.importance).toFixed(2))]

            cumulativeImportance += contribution.importance
            series.data.push(data)
        }
        stackedLineChartInput.series.push(series)
    }

    return stackedLineChartInput
}

export function convertToStackedLineGradientGraphInput(result: CsclResult): StackedLineGradientGraphInput {
    const input: StackedLineGradientGraphInput = {
        importance: [],
        social_kb: [],
        in_degree: [],
        out_degree: []
    };

    input.importance = result.contributions.map((contribution: CsclContribution) => {
        return [contribution.id, Number(contribution.importance.toFixed(2))]
    });

    input.social_kb = result.contributions.map((contribution: CsclContribution) => {
        return [contribution.id, Number(contribution.social_kb.toFixed(2))]
    });

    input.in_degree = result.contributions.map((contribution: CsclContribution) => {
        return [contribution.id, Number(contribution.in_degree.toFixed(2))]
    });

    input.out_degree = result.contributions.map((contribution: CsclContribution) => {
        return [contribution.id, Number(contribution.out_degree.toFixed(2))]
    });

    return input;
}

