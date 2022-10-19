
export interface CsclEdge {
  source: string;
  target: string;
  weight: number;
}

export interface CsclGraph {
  participants: string[];
  edges: CsclEdge[];
}

export interface CsclContribution {
  id: number;
  text: string;
  importance: number;
}

export type CsclScores = Record<string, number>;

export interface CsclResult {
  graph: CsclGraph;
  contributions: CsclContribution[];
  participants: Record<string, CsclScores>;
}
