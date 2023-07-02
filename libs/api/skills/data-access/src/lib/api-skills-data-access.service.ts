import { Schema, model } from 'mongoose';

import { ISchool, ISkill, IWorkPlace } from 'shared/api-interfaces';

const workPlaceSchema = new Schema<IWorkPlace>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    time: { type: [Date], required: true },
    description: String,
  },
  { _id: false }
);

const schoolSchema = new Schema<ISchool>(
  {
    name: { type: String, required: true },
    major: { type: String, required: true },
  },
  { _id: false }
);

const skillSchema = new Schema<ISkill>({
  stacks: { type: [String], required: true },
  workPlaces: { type: [workPlaceSchema], required: true },
  schools: { type: [schoolSchema], required: true },
});

export const SkillModel = model('skill', skillSchema);

export class SkillService {
  public static async get(): Promise<ISkill> {
    const result = await SkillModel.find();
    const { _id, ...skills } = result[0].toObject();
    return skills;
  }
}
