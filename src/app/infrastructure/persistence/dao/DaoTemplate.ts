import { Log } from "@config/LoggerConfig";

export abstract class DaoTemplate<T> {
  protected readonly log: Log;
  protected readonly entity: string;

  protected constructor(log: Log, entity: string) {
    this.log = log;
    this.entity = entity;
  }

  protected abstract findAll(): Promise<T[]>;

  protected abstract findById(id: string): Promise<T | null>;
}
