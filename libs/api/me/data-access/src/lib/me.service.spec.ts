import {IMe} from 'shared/api-interfaces';

import {MeService} from './me.service';
import {MeModel} from './me.schema';

const meMock: IMe = {
  name: {
    first: 'Test',
    last: 'Something',
  },
  description: 'Mock, Mock... Who is it?',
  birthDate: new Date(),
  languages: ['Klingon'],
  from: 'Tatooine',
  location: {
    country: 'Germany',
    city: 'Berlin',
  },
};

describe('MeService', () => {
  it('should get data', (done) => {
    jest
      .spyOn(MeModel, 'find')
      .mockResolvedValue([{toObject: jest.fn(() => ({_id: 'test', ...meMock}))}]);
    MeService.get().then((value) => {
      expect(value).toEqual(expect.objectContaining(meMock));
      done();
    });
  });
});
