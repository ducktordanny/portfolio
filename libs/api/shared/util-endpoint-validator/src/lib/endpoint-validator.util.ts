import {ClassConstructor, plainToClass} from 'class-transformer';
import {ValidationError, validate} from 'class-validator';
import {last} from 'lodash';

import {APIError} from 'shared/api-interfaces';
import {INVALID_BODY} from 'api/shared/error-messages';

function validationErrorAdapter(validationMessage: ValidationError): string | undefined {
  const _ = undefined;
  const fullMessage = validationMessage.toString(_, _, _, true);
  const messageWithoutPrefix = last(fullMessage.split(' - '));
  return messageWithoutPrefix?.split(' \n')?.[0];
}

function getErrorMessages(validation: Array<ValidationError>): Array<string> {
  const flattenedErrors: Array<string> = [];

  const flatten = (error: ValidationError) => {
    const message = validationErrorAdapter(error);
    if (message) flattenedErrors.push(message);
    if (error.children && error.children.length > 0) error.children.forEach(flatten);
  };

  validation.forEach(flatten);
  return flattenedErrors;
}

export async function validateBody<T extends object, U>(
  cls: ClassConstructor<T>,
  body: U,
): Promise<void> {
  if (!body) throw INVALID_BODY;
  const dto = plainToClass(cls, body);
  const validation = await validate(dto);
  if (!validation.length) return;
  const errors = getErrorMessages(validation);
  throw {message: errors, status: 400} as APIError;
}
