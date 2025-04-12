import express from 'express';
import {
  createApplicantHandler,
  deleteApplicantHandler,
  getAllApplicantHandler,
  getApplicantHandler,
  updateApplicantHandler,
} from '../handlers/applicant.handler';

export const applicantsRouter = express.Router();

applicantsRouter.post('/', createApplicantHandler);
applicantsRouter.get('/', getAllApplicantHandler);
applicantsRouter.get('/:id', getApplicantHandler);
applicantsRouter.put('/:id', updateApplicantHandler);
applicantsRouter.delete('/:id', deleteApplicantHandler);
