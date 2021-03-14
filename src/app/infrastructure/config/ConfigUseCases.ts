import { IGenerateCvDocumentPort } from "@ports/IGenerateCvDocumentPort";
import { IDownloadCvUseCase } from "@useCases/IDownloadCvUseCase";
import { DownloadCvUseCase } from "@useCases/DownloadCvUseCase";
import CurriculumVitaePdf from "@infrastructure/pdfGenerator/CurriculumVitaePdf/CvPdfAdapter";

function configDownloadCvUseCase(
  documentGeneratorPort: IGenerateCvDocumentPort
): IDownloadCvUseCase {
  return new DownloadCvUseCase(documentGeneratorPort);
}

export const downloadCvUseCase = configDownloadCvUseCase(CurriculumVitaePdf);
