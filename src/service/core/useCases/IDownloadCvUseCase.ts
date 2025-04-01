export interface IDownloadCvUseCase {
  download(lang: string): Promise<Buffer>;
}
