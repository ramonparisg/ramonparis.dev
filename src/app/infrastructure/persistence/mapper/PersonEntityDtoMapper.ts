import { Person } from "@domain/Person";
import { PersonEntityDto } from "@infrastructure/persistence/dto/PersonEntityDto";

export function mapToDomain(dto: PersonEntityDto): Person {
  return {
    ...dto,
    knowledge:
      dto?.knowledge?.map((k) => ({
        ...k,
        knowledgeCategory: undefined,
        knowledgeExpertise: undefined,
      })) ?? [],
    jobs: [],
    projects: [],
    study: undefined,
  };
}
