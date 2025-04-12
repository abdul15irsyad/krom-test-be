import { Request, Response } from 'express';
import { getListStatus } from '../services/status.service';

export const getListStatusHandler = async (_: Request, res: Response) => {
  const data = await getListStatus();

  res.status(200).json({
    message: 'get list status',
    data,
  });
};
