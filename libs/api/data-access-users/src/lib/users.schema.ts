import {Schema, model} from 'mongoose';
import {IUser} from 'shared/api-interfaces';

const usersSchema = new Schema<IUser>(
  {
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
  },
  {versionKey: false},
);

export const UsersModel = model('user', usersSchema);
