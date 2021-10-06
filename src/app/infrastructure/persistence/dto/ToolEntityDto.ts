import { CategoriesEntityDto } from "@infrastructure/persistence/dto/CategoriesEntityDto";

export enum ExpertiseEntityDto {
  EXPERT,
  MEDIUM_HIGH,
  MEDIUM,
  MEDIUM_LOW,
  BEGINNER,
}

export interface ToolEntityDto {
  id: string;
  knowledgeCategory: CategoriesEntityDto;
  name: string;
  imgUrl?: string;
  description: string;
  technologies: string;
  knowledgeExpertise: string;
}
