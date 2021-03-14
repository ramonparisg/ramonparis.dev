import { NextApiRequest, NextApiResponse } from "next";
import { downloadCvUseCase } from "@config/ConfigUseCases";

const download = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Buffer> => {
  const pdf = await downloadCvUseCase.download();
  res.setHeader("Content-Type", "application/pdf");
  res.status(200).send(pdf);
  return pdf;
};

export default download;
