import { param, body, query } from 'express-validator/';

export const validators = {
  // common get pagination
  page: query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('page must be an integer and greater than or equal 1'),
  limit: query('limit')
    .optional()
    .isInt({ min: 1 })
    .withMessage('limit must be an integer and greater than or equal 1'),
  search: query('search')
    .optional()
    .isString()
    .withMessage('search must be a string'),

  // common object
  id: param('id').exists().withMessage('id is required'),
  name: body('name').exists().withMessage('name is required'),
  email: body('email')
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email not valid'),

  // applicant
  location: body('location').exists().withMessage('location is required'),
  resumeURL: body('resumeURL')
    .exists()
    .withMessage('resumeURL is required')
    .isURL()
    .withMessage('resume URL is not valid URL'),
  appliedRoleId: body('appliedRoleId')
    .exists()
    .withMessage('applied role is required'),
  applicationStatusId: body('applicationStatusId')
    .exists()
    .withMessage('application status is required'),
  yearsOfExperience: body('yearsOfExperience')
    .exists()
    .withMessage('years of experience is required')
    .isInt()
    .withMessage('years of experience must be an integer'),
  filterAppliedRoleId: query('appliedRoleId')
    .optional()
    .isString()
    .withMessage('appliedRoleId must be a string')
    .isUUID()
    .withMessage('appliedRoleId must be a valid uuid'),
  filterApplicationStatusId: query('applicationStatusId')
    .optional()
    .isString()
    .withMessage('applicationStatusId must be a string')
    .isUUID()
    .withMessage('applicationStatusId must be a valid uuid'),
};
