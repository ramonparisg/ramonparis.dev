import { Knowledge } from "@domain/Knowledge";

export enum ProjectStatus {
  IN_PROGRESS,
  DONE,
}

export enum ProjectType {
  PUBLIC,
  PRIVATE,
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tools: Knowledge[];
  type: ProjectType;
  url: string;
  imagesUrl: string[];
  status: ProjectStatus;
}
