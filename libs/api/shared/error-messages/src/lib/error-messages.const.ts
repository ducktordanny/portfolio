import {APIError} from 'shared/api-interfaces';

export const MISSING_ID = {message: 'Id is required for change.', status: 400};
export const INVALID_BODY = {message: 'Invalid body content.', status: 400} as APIError;
export const INVALID_CREDS: APIError = {message: 'Incorrect username or password.', status: 401};
export const INVALID_USER: APIError = {message: 'Invalid username or password.', status: 400};
export const NOT_AUTHORIZED: APIError = {
  message: 'Not authorized to access the endpoint.',
  status: 403,
};
export const SOMETHING_WENT_WRONG: APIError = {message: 'Something went wrong.', status: 400};
export const CANNOT_FIND_IN_DB: APIError = {
  message: 'Cannot find document in database.',
  status: 404,
};
