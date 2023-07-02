import { Schema, model } from 'mongoose';
import { IMe, IMeLocation, IMeName } from 'shared/api-interfaces';

const nameSchema = new Schema<IMeName>(
  {
    first: { type: String, required: true },
    last: { type: String, required: true },
    also: String,
  },
  { _id: false }
);

const locationSchema = new Schema<IMeLocation>(
  {
    country: { type: String, required: true },
    city: { type: String, required: true },
  },
  { _id: false }
);

const meSchema = new Schema<IMe>({
  name: { type: nameSchema, required: true },
  description: { type: String, required: true },
  birthDate: { type: Date, required: true },
  languages: { type: [String], required: true },
  from: { type: String, required: true },
  location: { type: locationSchema, required: true },
});

export const MeModel = model<IMe>('me', meSchema);

export class MeService {
  public static async get(): Promise<IMe> {
    const result = await MeModel.find();
    const { _id, ...me } = result[0].toObject();
    return me;
  }
}
