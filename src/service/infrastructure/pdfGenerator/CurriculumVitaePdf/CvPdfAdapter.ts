import { PdfGeneratorTemplate } from "../PdfGeneratorTemplate";
import { buildLogger } from "@config/LoggerConfig";
import { CV_ENDPOINT } from "@env";
import { IGenerateCvDocumentPort } from "@ports/IGenerateCvDocumentPort";

export class CvPdfAdapter
  extends PdfGeneratorTemplate
  implements IGenerateCvDocumentPort
{
  private readonly endpoint = CV_ENDPOINT;

  constructor() {
    super(buildLogger("CurriculumVitaePdf"));
  }

  async download(lang: string = "es"): Promise<Buffer> {
    const url = `${this.endpoint}?lang=${lang}`;
    console.log("url", url);
    return await this.downloadFromPage(url);
  }
}

export default new CvPdfAdapter();
