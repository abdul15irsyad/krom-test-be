import express from 'express';
import { getListStatusHandler } from '../handlers/status.handler';

export const statusesRouter = express.Router();

statusesRouter.get('/list', getListStatusHandler);
