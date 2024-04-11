import {APIError, ISkill} from 'shared/api-interfaces';
import {CANNOT_FIND_IN_DB} from 'api/shared/error-messages';

import {SkillModel} from './skills.schema';

export class SkillService {
  public static async get(): Promise<ISkill> {
    const result = await SkillModel.find();
    const skill = result?.[0]?.toObject();
    if (!skill) throw CANNOT_FIND_IN_DB;
    return skill;
  }

  public static async change(body: ISkill): Promise<void> {
    const document = new SkillModel(body);
    const validation = document.validateSync();
    if (validation) throw {message: validation.message, status: 400} as APIError;
    await SkillModel.updateOne({}, {$set: body}, {runValidators: true, upsert: true}).catch(
      (err) => {
        if (err) throw {message: err.message, status: 400};
      },
    );
  }
}
