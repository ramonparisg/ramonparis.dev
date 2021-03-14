import { PdfGeneratorTemplate } from "@infrastructure/pdfGenerator/PdfGeneratorTemplate";
import { buildLogger } from "@config/LoggerConfig";
import { CV_ENDPOINT } from "@env";
import { IGenerateCvDocumentPort } from "@ports/IGenerateCvDocumentPort";

export class CvPdfAdapter
  extends PdfGeneratorTemplate
  implements IGenerateCvDocumentPort {
  private readonly endpoint = CV_ENDPOINT;

  constructor() {
    super(buildLogger("CurriculumVitaePdf"));
  }

  async download(): Promise<Buffer> {
    return await this.downloadFromPage(this.endpoint, "CV Ramón París");
  }
}

export default new CvPdfAdapter();
