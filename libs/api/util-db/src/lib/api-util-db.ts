import * as mongoose from 'mongoose';

export class DB {
  public static init(): Promise<void> {
    const uri = process.env['MONGO_URI'] || 'mongodb://localhost/portfolio';
    return mongoose
      .connect(uri)
      .then(() => console.log('Successfully connected to MongoDB.'))
      .catch((err) => console.log('\nCould not connect to MongoDB. Reason:\n', err.message));
  }
}
