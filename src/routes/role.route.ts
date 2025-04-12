import express from 'express';
import { getListRoleHandler } from '../handlers/role.handler';

export const rolesRouter = express.Router();

rolesRouter.get('/list', getListRoleHandler);
