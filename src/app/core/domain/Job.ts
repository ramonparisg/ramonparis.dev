import { Knowledge } from "@domain/Knowledge";

export enum JobTitleStatus {
  CURRENT,
  FINISHED,
}

export interface JobTitle {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  knowledge: Knowledge[];
  achievements: string;
  status: JobTitleStatus;
}

export interface Job {
  id: string;
  company: string;
  imgUrl?: string;
  titles: JobTitle[];
}
