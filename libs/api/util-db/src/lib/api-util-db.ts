import * as mongoose from 'mongoose';

export class DB {
  public static init(): Promise<void> {
    return mongoose
      .connect('mongodb://localhost/portfolio')
      .then(() => console.log('\nSuccessfully connected to MongoDB.\n'))
      .catch((err) =>
        console.log('\nCould not connect to MongoDB. Reason:\n', err.message)
      );
  }
}
