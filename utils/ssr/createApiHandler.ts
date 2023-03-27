import { NextApiRequest, NextApiResponse } from 'next';
import nc, { ErrorHandler } from 'next-connect';

export const onError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err,
  req,
  res,
  next
) => {
  console.log(err);
  res.status(500).end(err.toString());
};

export const createApiHandler = () =>
  nc<NextApiRequest, NextApiResponse>({
    onError,
  });