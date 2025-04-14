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
  id: param('id').exists({ values: 'falsy' }).withMessage('id is required'),
  name: body('name')
    .exists({ values: 'falsy' })
    .withMessage('name is required'),
  email: body('email')
    .exists({ values: 'falsy' })
    .withMessage('email is required')
    .isEmail()
    .withMessage('email is not valid email'),

  // applicant
  location: body('location')
    .exists({ values: 'falsy' })
    .withMessage('location is required'),
  phoneNumber: body('phoneNumber')
    .exists({ values: 'falsy' })
    .withMessage('phone number is required'),
  resumeURL: body('resumeURL')
    .exists({ values: 'falsy' })
    .withMessage('resume url is required')
    .isURL()
    .withMessage('resume url is not valid url'),
  appliedRoleId: body('appliedRoleId')
    .exists({ values: 'falsy' })
    .withMessage('applied role is required')
    .isUUID()
    .withMessage('appliedRoleId must be a valid uuid'),
  applicationStatusId: body('applicationStatusId')
    .exists({ values: 'falsy' })
    .withMessage('application status is required')
    .isUUID()
    .withMessage('appliedRoleId must be a valid uuid'),
  yearsOfExperience: body('yearsOfExperience')
    .exists()
    .withMessage('years of experience is required')
    .isInt({ min: 0 })
    .withMessage(
      'years of experience must be an integer and greater than or equal to 0',
    ),
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
