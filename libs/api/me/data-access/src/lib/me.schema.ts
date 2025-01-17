import {Schema, model} from 'mongoose';

import {IMe} from 'shared/api-interfaces';

const meSchema = new Schema<IMe>({
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true},
    also: String,
  },
  description: {type: String, required: true},
  birthDate: {type: Date, required: true},
  languages: {type: [String], required: true},
  from: {type: String, required: true},
  location: {
    country: {type: String, required: true},
    city: {type: String, required: true},
  },
});

export const MeModel = model<IMe>('me', meSchema);
