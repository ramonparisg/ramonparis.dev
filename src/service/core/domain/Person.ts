import { SocialMedia } from "./SocialMedia";
import { Knowledge } from "./Knowledge";
import { Project } from "./Project";
import { Job } from "./Job";
import { Study } from "./Study";

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
