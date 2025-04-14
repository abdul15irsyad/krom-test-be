import { validators } from './validators';

export const createApplicantValidator = [
  validators.name,
  validators.email,
  validators.location,
  validators.phoneNumber,
  validators.resumeURL,
  validators.appliedRoleId,
  validators.yearsOfExperience,
];

export const getAllApplicantValidator = [
  validators.page,
  validators.limit,
  validators.search,
  validators.filterAppliedRoleId,
  validators.filterApplicationStatusId,
];

export const getApplicantValidator = [validators.id];

export const updateApplicantValidator = [
  validators.id,
  ...createApplicantValidator,
  validators.applicationStatusId,
];

export const deleteApplicantValidator = [validators.id];
