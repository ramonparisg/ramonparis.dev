import { IDownloadCvUseCase } from "@useCases/IDownloadCvUseCase";
import { IGenerateCvDocumentPort } from "@ports/IGenerateCvDocumentPort";

export class DownloadCvUseCase implements IDownloadCvUseCase {
  private readonly documentGenerator: IGenerateCvDocumentPort;

  constructor(documentGenerator: IGenerateCvDocumentPort) {
    this.documentGenerator = documentGenerator;
  }

  download(): Promise<Buffer> {
    return this.documentGenerator.download();
  }
}
