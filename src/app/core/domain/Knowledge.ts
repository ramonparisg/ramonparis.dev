export enum Expertise {
  EXPERT,
  MEDIUM,
  BEGINNER,
}

export interface KnowledgeCategory {
  id: string;
  name: string;
}

export interface Knowledge {
  id: string;
  knowledgeCategory: KnowledgeCategory;
  name: string;
  imgUrl: string;
  description: string;
  knowledgeExpertise: Expertise;
}
