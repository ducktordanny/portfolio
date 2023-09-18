import {Schema, model} from 'mongoose';

import {ISkill} from 'shared/api-interfaces';

const skillSchema = new Schema<ISkill>({
  stacks: {type: [String], required: true},
  workPlaces: [
    {
      name: {type: String, required: true},
      role: {type: String, required: true},
      time: {type: [Date], required: true},
      description: String,
    },
  ],
  schools: [
    {
      name: {type: String, required: true},
      major: {type: String, required: true},
    },
  ],
});

export const SkillModel = model('skill', skillSchema);
