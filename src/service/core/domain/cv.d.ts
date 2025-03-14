export interface Cv {
  presentation: Presentation;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
}

export interface Presentation {
  description: string;
  funFact: string;
  seeMore: string;
}

export interface Experience {
  id: string;
  company: string;
  titles: {
    id: string;
    title: string;
    startDate: string;
    description: string;
    endDate: string;
    status: string;
    achievements?: string[];
    projects?: string[];
  }[];
}

export interface Education {
  university: string;
  studies: {
    career: string;
    startDate: string;
    endDate?: string;
    description?: string;
    achievement?: string;
    certificate?: string;
  }[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  knowledgeExpertise: string;
  knowledgeCategoryId: {
    id: string;
    name: string;
  };
}
