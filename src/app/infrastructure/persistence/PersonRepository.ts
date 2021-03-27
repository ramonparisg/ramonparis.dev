import PersonDao from "@infrastructure/persistence/dao/PersonDao";
import { buildLogger, Log } from "@config/LoggerConfig";
import { IPersonPersistencePort } from "@ports/IPersonPersistencePort";
import { Person } from "@domain/Person";
import { PersonEntityDto } from "@infrastructure/persistence/dto/PersonEntityDto";
import { mapToDomain } from "@infrastructure/persistence/mapper/PersonEntityDtoMapper";

export default class PersonRepository implements IPersonPersistencePort {
  private readonly personDao: PersonDao;
  private readonly log: Log;

  constructor(personDao: PersonDao) {
    this.personDao = personDao;
    this.log = buildLogger("PersonRepository");
  }

  async findById(id: string): Promise<Person | null> {
    this.log.info(`Finding person with id ${id}...`);
    const entityDto: PersonEntityDto = await this.personDao.findById(id);
    if (!entityDto) {
      this.log.info(`Person with id ${id} does not exist`);
      return Promise.resolve(null);
    }

    return mapToDomain(entityDto);
  }
}
