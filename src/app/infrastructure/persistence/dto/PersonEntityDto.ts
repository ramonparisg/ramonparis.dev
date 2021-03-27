import { ToolEntityDto } from "@infrastructure/persistence/dto/ToolEntityDto";

export interface PersonEntityDto {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  profilePicUrl: string;
  birthdate: Date;
  currentLocation: string;
  socialMedias: Array<{
    id: string;
    name: string;
    url: string;
    imgUrl: string;
  }>;
  knowledge: ToolEntityDto[];
  projects: Array<{
    id: string;
    name: string;
    description: string;
    tools: ToolEntityDto[];
    type: string;
    url: string;
    imagesUrl: string[];
    status: string;
  }>;
  jobs: Array<{
    id: string;
    company: string;
    imgUrl?: string;
    titles: Array<{
      id: string;
      title: string;
      description: string;
      startDate: Date;
      endDate: Date;
      knowledge: ToolEntityDto[];
      achievements: string;
      status: string;
    }>;
  }>;
  study: {
    university: Array<{
      id: string;
      university: string;
      title: string;
      startDate: Date;
      endDate: Date;
      achievement: Date;
    }>;
    courses: Array<{
      id: string;
      platform: string;
      certificateUrl: string;
      knowledge: ToolEntityDto;
      description: string;
    }>;
    books: Array<{
      id: string;
      name: string;
      releaseDate: Date;
      knowledge: ToolEntityDto;
      description: string;
      authors: string[];
    }>;
  };
}
