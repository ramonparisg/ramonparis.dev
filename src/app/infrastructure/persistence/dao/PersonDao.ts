import { StaticDbTemplate } from "@infrastructure/persistence/dao/StaticDbTemplate";
import { PersonEntityDto } from "@infrastructure/persistence/dto/PersonEntityDto";
import { buildLogger } from "@config/LoggerConfig";

export default class PersonDao extends StaticDbTemplate<PersonEntityDto> {
  constructor() {
    super(buildLogger("PersonDao"), "person");
  }
}
