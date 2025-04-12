import express, { Request, Response } from 'express';
import { applicantsRouter } from './applicant.route';
import { statusesRouter } from './status.route';
import { rolesRouter } from './role.route';

export const router = express.Router();

router.get('/', async (_: Request, res: Response) => {
  res.status(200).json({
    message: 'krom test',
  });
});
router.use('/applicants', applicantsRouter);
router.use('/statuses', statusesRouter);
router.use('/roles', rolesRouter);
