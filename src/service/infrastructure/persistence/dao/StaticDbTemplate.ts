import { Log } from "../../config/LoggerConfig";
import { DaoTemplate } from "./DaoTemplate";

export abstract class StaticDbTemplate<T> extends DaoTemplate<T> {
  protected constructor(log: Log, entity: string) {
    super(log, entity);
  }

  async findAll(): Promise<T[]> {
    return Promise.resolve(undefined);
  }

  async findById(id: string): Promise<T | null> {
    return Promise.resolve(undefined);
  }
}
