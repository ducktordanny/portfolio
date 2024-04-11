import {Types} from 'mongoose';

import {APIError, IUser} from 'shared/api-interfaces';

import {UsersModel} from './users.schema';

interface UserGetFilter {
  username?: string;
  _id?: Types.ObjectId;
}

export class UserService {
  public static async get(
    filter: UserGetFilter,
    getPasswordHash = false,
  ): Promise<IUser | undefined> {
    const result = await UsersModel.findOne(filter);
    if (!result) return;
    const response = result.toObject();
    if (response && !getPasswordHash) delete response.password;
    if (response && response._id) response._id = response._id.toString();
    return response;
  }

  public static async create(username: string, passwordHash: string): Promise<IUser> {
    const isUsernameTaken = !!(await UsersModel.findOne({username}));
    if (isUsernameTaken) throw {message: 'Username is taken.', status: 400} as APIError;
    const userModel = new UsersModel({username, password: passwordHash});
    const userDocument = await userModel.save();
    const user = userDocument.toObject();
    if (user) delete user.password;
    return user;
  }
}
