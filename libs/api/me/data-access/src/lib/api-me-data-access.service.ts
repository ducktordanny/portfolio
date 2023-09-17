import {Schema, model} from 'mongoose';

import {APIError, IMe} from 'shared/api-interfaces';
import {CANNOT_FIND_IN_DB} from 'api/shared/error-messages';
import {validateBody} from 'api/shared/util-endpoint-validator';
import {MeDto} from './api-me-data-access.dto';

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

export class MeService {
  public static async get(): Promise<IMe> {
    const result = await MeModel.find();
    const me = result?.[0]?.toObject();
    if (!me) throw CANNOT_FIND_IN_DB;
    return me;
  }

  public static async change(body: IMe): Promise<void> {
    await validateBody(MeDto, body);
    const document = new MeModel(body);
    const validation = document.validateSync();
    if (validation) throw {message: validation.message, status: 400} as APIError;
    await MeModel.updateOne({}, {$set: body}, {runValidators: true, upsert: true}).catch((err) => {
      if (err) throw {message: err.message, status: 400};
    });
  }
}
