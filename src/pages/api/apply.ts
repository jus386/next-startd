import { NextApiRequest, NextApiResponse } from 'next';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req: NextApiRequest, res: NextApiResponse) => {
  const reqBody = req.body;
  console.log(`req.body=${reqBody}`);
  res.statusCode = 200;
  res.json(reqBody);
};
