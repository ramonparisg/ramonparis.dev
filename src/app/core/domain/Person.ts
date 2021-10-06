import { SocialMedia } from "@domain/SocialMedia";
import { Knowledge } from "@domain/Knowledge";
import { Project } from "@domain/Project";
import { Job } from "@domain/Job";
import { Study } from "@domain/Study";

export class Person {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
  profilePicUrl: string;
  birthdate: Date;
  currentLocation: string;
  socialMedias: SocialMedia[];
  knowledge: Knowledge[];
  projects: Project[];
  jobs: Job[];
  study: Study;

  constructor() {}

  someBusinessLogic() {
    // Implement some business logic
  }
}
