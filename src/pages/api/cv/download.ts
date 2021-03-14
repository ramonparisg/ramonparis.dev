import { NextApiRequest, NextApiResponse } from "next";
import CurriculumVitaePdf from "@infrastructure/pdfGenerator/CurriculumVitaePdf/CurriculumVitaePdf";

const download = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Buffer> => {
  const pdf = await CurriculumVitaePdf.download();
  res.setHeader("Content-Type", "application/pdf");
  res.status(200).send(pdf);
  return pdf;
};

export default download;
