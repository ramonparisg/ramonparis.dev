import { Log } from "../config/LoggerConfig";
import puppeteer from "puppeteer";

export abstract class PdfGeneratorTemplate {
  private readonly log: Log;

  protected constructor(log: Log) {
    this.log = log;
  }

  async downloadFromPage(endpoint: string): Promise<Buffer> {
    this.log.debug(`Converting ${endpoint} page to PDF...`);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(endpoint, {
      waitUntil: "networkidle2",
    });
    const buffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    return Buffer.from(buffer);
  }
}
