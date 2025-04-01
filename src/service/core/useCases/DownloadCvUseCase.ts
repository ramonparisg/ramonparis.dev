import { IDownloadCvUseCase } from "./IDownloadCvUseCase";
import { IGenerateCvDocumentPort } from "../ports/IGenerateCvDocumentPort";

export class DownloadCvUseCase implements IDownloadCvUseCase {
  private readonly documentGenerator: IGenerateCvDocumentPort;

  constructor(documentGenerator: IGenerateCvDocumentPort) {
    this.documentGenerator = documentGenerator;
  }

  download(lang: string = "es"): Promise<Buffer> {
    return this.documentGenerator.download(lang);
  }
}
