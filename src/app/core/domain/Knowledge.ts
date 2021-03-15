export enum Expertise {
  EXPERT,
  MEDIUM_HIGH,
  MEDIUM,
  MEDIUM_LOW,
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
  imgUrl?: string;
  description: string;
  technologies: string;
  knowledgeExpertise: Expertise;
}
