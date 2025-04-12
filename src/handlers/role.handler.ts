import { Request, Response } from 'express';
import { getListRole } from '../services/role.service';

export const getListRoleHandler = async (_: Request, res: Response) => {
  const data = await getListRole();

  res.status(200).json({
    message: 'get list role',
    data,
  });
};
