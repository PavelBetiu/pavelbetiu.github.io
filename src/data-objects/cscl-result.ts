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
  participant: string;
  ref: number | null;
  time: string;
  importance: number;
  social_kb: number;
  in_degree: number;
  out_degree: number;
}

export type CsclScores = Record<string, number>;

export interface CsclContributionEdge {
  source: number;
  target: number;
  weight: number;
}

export interface CsclResult {
  /**
   * Participants' Graph is Directed.
   */
  graph: CsclGraph;

  contributions: CsclContribution[];
  participants: Record<string, CsclScores>;

  /**
   * Contributions' Graph is undirected.
   */
  contribution_edges: CsclContributionEdge[];
}
