import { NextApiRequest, NextApiResponse } from 'next';
import { fetchAPI } from './api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`req.body=${req.body}`);
  const reqBodyPosted = JSON.parse(req.body);
  const reqBody = {
    boardId: 6456,
    givenName: reqBodyPosted.givenName,
    familyName: reqBodyPosted.familyName,
    email: reqBodyPosted.email,
    phoneNumber: reqBodyPosted.phoneNumber,
    dateOfBirth: reqBodyPosted.dateOfBirth,
    value: '1084546',
    notes: [
      'Created from Casabrite Website',
      'Test Client Profile'
    ]
  };
  const createProfileRes = await fetchAPI('client/profile', 'POST', reqBody);
  console.log(`createProfileRes=${createProfileRes}`);
  res.statusCode = 200;
  res.json(createProfileRes);
};
