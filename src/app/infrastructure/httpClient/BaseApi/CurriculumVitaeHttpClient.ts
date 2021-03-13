import { RestClientTemplate } from "../RestClientTemplate";
import { BFF_API_URL } from "@env";
import { buildLogger } from "@config/LoggerConfig";
import { CurriculumVitaeDtoResponse } from "@payloads/response/CurriculumVitaeDtoResponse";

export class CurriculumVitaeHttpClient extends RestClientTemplate {
  constructor() {
    super(BFF_API_URL, buildLogger("BaseApiAdapter"));
  }

  async fetchData(): Promise<CurriculumVitaeDtoResponse> {
    return await this.get<CurriculumVitaeDtoResponse>("/cv");
  }
}

export default new CurriculumVitaeHttpClient();
