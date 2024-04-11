import * as mongoose from 'mongoose';

import {DB} from './db.util';

describe('DB', () => {
  describe('init', () => {
    it('should connect to MongoDB', (done) => {
      const mongooseConnectSpy = jest
        .spyOn(mongoose, 'connect')
        .mockReturnValue(Promise.resolve({} as typeof mongoose));
      const consoleLogSpy = jest.spyOn(console, 'log');
      DB.init().then(() => {
        expect(consoleLogSpy).toHaveBeenCalledWith('Successfully connected to MongoDB.');
        done();
      });
      expect(mongooseConnectSpy).toHaveBeenCalledWith('mongodb://127.0.0.1/portfolio');
    });

    it('should get error', (done) => {
      jest.spyOn(mongoose, 'connect').mockReturnValue(Promise.reject({message: 'test'}));
      const consoleLogSpy = jest.spyOn(console, 'log');
      DB.init().then(() => {
        expect(consoleLogSpy).toHaveBeenCalledWith(
          '\nCould not connect to MongoDB. Reason:\n',
          'test',
        );
        done();
      });
    });
  });
});
