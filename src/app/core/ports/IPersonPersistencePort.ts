import { Person } from "@domain/Person";

export interface IPersonPersistencePort {
  findById(id: string): Promise<Person | null>;
}
