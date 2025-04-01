export interface IGenerateCvDocumentPort {
  download(lang: string): Promise<Buffer>;
}
