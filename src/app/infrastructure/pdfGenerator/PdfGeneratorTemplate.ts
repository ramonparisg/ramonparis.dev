import { Log } from "@config/LoggerConfig";
import puppeteer from "puppeteer/lib/cjs/puppeteer/node-puppeteer-core";

export abstract class PdfGeneratorTemplate {
  private readonly log: Log;

  protected constructor(log: Log) {
    this.log = log;
  }

  async downloadFromPage(endpoint: string, filename?: string): Promise<Buffer> {
    this.log.debug(`Converting ${endpoint} page to PDF...`);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(endpoint, {
      waitUntil: "networkidle2",
    });
    const buffer: Buffer = await page.pdf({
      path: `${filename ? filename.replace(".pdf", "") : "download"}.pdf`,
      format: "a4",
      printBackground: true,
    });
    await browser.close();
    return buffer;
  }
}
