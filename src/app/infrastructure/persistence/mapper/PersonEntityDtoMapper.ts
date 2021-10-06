import { Person } from "@domain/Person";
import { PersonEntityDto } from "@infrastructure/persistence/dto/PersonEntityDto";
import { Expertise } from "@domain/Knowledge";

export function mapToDomain(dto: PersonEntityDto): Person {
  return {
    ...dto,
    knowledge:
      dto?.knowledge?.map((k) => ({
        ...k,
        knowledgeCategory: { ...k },
        knowledgeExpertise: Expertise[k.knowledgeExpertise],
      })) ?? [],
    jobs: [],
    projects: [],
    study: undefined,
  };
}
