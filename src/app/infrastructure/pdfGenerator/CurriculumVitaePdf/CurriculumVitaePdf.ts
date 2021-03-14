import { PdfGeneratorTemplate } from "@infrastructure/pdfGenerator/PdfGeneratorTemplate";
import { buildLogger } from "@config/LoggerConfig";
import { CV_ENDPOINT } from "@env";

export class CurriculumVitaePdf extends PdfGeneratorTemplate {
  private readonly endpoint = CV_ENDPOINT;

  constructor() {
    super(buildLogger("CurriculumVitaePdf"));
  }

  async download(): Promise<Buffer> {
    return await this.downloadFromPage(this.endpoint, "CV Ramón París");
  }
}

export default new CurriculumVitaePdf();
