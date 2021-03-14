export interface IDownloadCvUseCase {
  download(): Promise<Buffer>;
}
