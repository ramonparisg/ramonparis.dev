import { NextApiRequest, NextApiResponse } from "next";

export interface CurriculumVitae {
  data: string;
}

const fetchData = (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<CurriculumVitae> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        data: `This is the data rendered by a server in date ${new Date()}`,
      };
      res.status(200).json(data);
      resolve(data);
    }, 300);
  });
};

export default fetchData;
