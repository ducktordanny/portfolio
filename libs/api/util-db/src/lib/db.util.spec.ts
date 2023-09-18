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
        expect(consoleLogSpy).toHaveBeenCalledWith('\nSuccessfully connected to MongoDB.\n');
        done();
      });
      expect(mongooseConnectSpy).toHaveBeenCalledWith('mongodb://localhost/portfolio');
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
