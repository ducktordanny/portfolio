import {INVALID_BODY} from 'api/shared/error-messages';

import {validateBody} from './endpoint-validator.util';
import {IsNumber, IsString} from 'class-validator';

class EndpointValidatorDtoMock {
  @IsString()
  public something!: string;

  @IsNumber()
  public somethingElse!: number;
}

describe('endpoint-validator-util', () => {
  it('should handle no body', () => {
    validateBody(EndpointValidatorDtoMock, undefined).catch((err) => {
      expect(err).toEqual(INVALID_BODY);
    });
  });

  it('should get validation for non string error', () => {
    const bodyMock = {
      something: 123,
      somethingElse: 123,
    };
    validateBody(EndpointValidatorDtoMock, bodyMock).catch((err) => {
      expect(err).toEqual({
        message: [
          'property something has failed the following constraints: something must be a string',
        ],
        status: 400,
      });
    });
  });

  it('should get multiple validation errors', () => {
    const bodyMock = {
      something: 123,
      somethingElse: 'WHAAAAAT??',
    };
    validateBody(EndpointValidatorDtoMock, bodyMock).catch((err) => {
      expect(err).toEqual({
        message: [
          'property something has failed the following constraints: something must be a string',
          'property somethingElse has failed the following constraints: somethingElse must be a number conforming to the specified constraints',
        ],
        status: 400,
      });
    });
  });

  it('should have no validation problems', () => {
    const bodyMock = {
      something: 'This is something!!!!',
      somethingElse: 123,
    };
    validateBody(EndpointValidatorDtoMock, bodyMock).then((value) => {
      expect(value).toEqual(undefined);
    });
  });
});
