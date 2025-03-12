import { NextApiRequest, NextApiResponse } from "next";
import { downloadCvUseCase } from "@config/ConfigUseCases";

const download = async (req: NextApiRequest, res: NextApiResponse) => {
  const pdf = await downloadCvUseCase.download();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=download.pdf");

  res.send(pdf);
  // return pdf;
};

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export default download;
