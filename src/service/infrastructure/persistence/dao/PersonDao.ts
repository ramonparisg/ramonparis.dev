import { StaticDbTemplate } from "./StaticDbTemplate";
import { PersonEntityDto } from "../dto/PersonEntityDto";
import { buildLogger } from "../../config/LoggerConfig";

export default class PersonDao extends StaticDbTemplate<PersonEntityDto> {
  constructor() {
    super(buildLogger("PersonDao"), "person");
  }
}
