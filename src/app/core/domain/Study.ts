import { Knowledge } from "@domain/Knowledge";

export interface UniversityStudy {
  id: string;
  university: string;
  title: string;
  startDate: Date;
  endDate: Date;
  achievement: Date;
}

export interface CourseStudy {
  id: string;
  platform: string;
  certificateUrl: string;
  knowledge: Knowledge;
  description: string;
}

export interface Book {
  id: string;
  name: string;
  releaseDate: Date;
  knowledge: Knowledge;
  description: string;
  authors: string[];
}

export interface Study {
  university: UniversityStudy[];
  courses: CourseStudy[];
  books: Book[];
}
