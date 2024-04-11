import {APIError, IMe} from 'shared/api-interfaces';
import {CANNOT_FIND_IN_DB} from 'api/shared/error-messages';
import {validateBody} from 'api/shared/util-endpoint-validator';

import {MeModel} from './me.schema';
import {MeDto} from './me.dto';

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
