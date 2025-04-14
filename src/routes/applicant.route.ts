import express from 'express';
import {
  createApplicantHandler,
  deleteApplicantHandler,
  getAllApplicantHandler,
  getApplicantHandler,
  updateApplicantHandler,
} from '../handlers/applicant.handler';
import {
  createApplicantValidator,
  deleteApplicantValidator,
  getAllApplicantValidator,
  getApplicantValidator,
  updateApplicantValidator,
} from '../validators/applicant.validator';

export const applicantsRouter = express.Router();

applicantsRouter.post('/', createApplicantValidator, createApplicantHandler);
applicantsRouter.get('/', getAllApplicantValidator, getAllApplicantHandler);
applicantsRouter.get('/:id', getApplicantValidator, getApplicantHandler);
applicantsRouter.put('/:id', updateApplicantValidator, updateApplicantHandler);
applicantsRouter.delete(
  '/:id',
  deleteApplicantValidator,
  deleteApplicantHandler,
);
