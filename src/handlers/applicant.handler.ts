import { Request, Response } from 'express';
import {
  createApplicant,
  deleteApplicant,
  getAllApplicantsPagination,
  getApplicant,
  getApplicantByEmail,
  updateApplicant,
} from '../services/applicant.service';
import { validationResult } from 'express-validator/';

export const createApplicantHandler = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  const validationErrors = errors.array({ onlyFirstError: true });
  if (!errors.mapped().email) {
    const email = req.body.email;
    const applicantExist = await getApplicantByEmail(email);
    if (applicantExist) {
      validationErrors.push({
        type: 'field',
        value: email,
        msg: 'email already exist',
        path: 'email',
        location: 'body',
      });
    }
  }
  if (validationErrors.length > 0) {
    res.status(400).json({
      message: 'validation error',
      errors: validationErrors,
    });
    return;
  }

  const newApplicant = await createApplicant({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    resumeURL: req.body.resumeURL,
    appliedRoleId: req.body.appliedRoleId,
    yearsOfExperience: req.body.yearsOfExperience,
  });

  res.status(201).json({
    message: 'create applicant',
    data: newApplicant,
  });
};

export const getAllApplicantHandler = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      message: 'validation error',
      errors: errors.array({ onlyFirstError: true }),
    });
    return;
  }

  const { countAll, data } = await getAllApplicantsPagination({
    page: req.query.page ? +req.query.page : 1,
    limit: req.query.limit ? +req.query.limit : 10,
    search: req.query.search?.toString(),
    appliedRoleId: req.query.appliedRoleId?.toString(),
    statusId: req.query.statusId?.toString(),
  });

  res.status(200).json({
    message: 'get applicants',
    meta: {
      totalAllData: countAll,
    },
    data,
  });
};

export const getApplicantHandler = async (req: Request, res: Response) => {
  const data = await getApplicant(req.params.id);

  if (!data) {
    res.status(404).json({
      message: 'not found',
    });
    return;
  }

  res.status(200).json({
    message: 'get applicant',
    data,
  });
};

export const updateApplicantHandler = async (req: Request, res: Response) => {
  const id = req.params.id;

  const data = await getApplicant(id);

  if (!data) {
    res.status(404).json({
      message: 'not found',
    });
    return;
  }

  const updatedApplicant = await updateApplicant(id, {
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    resumeURL: req.body.resumeURL,
    appliedRoleId: req.body.appliedRoleId,
    yearsOfExperience: req.body.yearsOfExperience,
    applicationStatusId: req.body.applicationStatusId,
  });

  res.status(200).json({
    message: 'update applicant',
    data: updatedApplicant,
  });
};

export const deleteApplicantHandler = async (req: Request, res: Response) => {
  const id = req.params.id;

  const data = await getApplicant(id);

  if (!data) {
    res.status(404).json({
      message: 'not found',
    });
    return;
  }

  await deleteApplicant(id);

  res.status(200).json({
    message: 'delete applicant',
  });
};
