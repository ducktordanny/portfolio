import passport from 'passport';
import * as passportLocal from 'passport-local';
import {compare, hash} from 'bcrypt';

import {UserService} from 'api/data-access-users';
import {APIError, IUser} from 'shared/api-interfaces';
import {Types} from 'mongoose';
import {NextFunction, Request, Response} from 'express';

// TODO: should move these to a specific lib
const INVALID_CREDS: APIError = {message: 'Incorrect username or password.', status: 401};
const NOT_AUTHORIZED: APIError = {message: 'Not authorized to access the endpoint.', status: 403};
const SOMETHING_WENT_WRONG: APIError = {message: 'Something went wrong.', status: 400};

export class AuthService {
  private static instance: AuthService;

  private constructor() {
    console.log('Initialize local strategy for authentication');
    passport.use(new passportLocal.Strategy(this.localStrategyVerify));
    passport.serializeUser(this.serializeUser);
    passport.deserializeUser(this.deserializeUser);
  }

  public static init(): void {
    if (!AuthService.instance) AuthService.instance = new AuthService();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) AuthService.instance = new AuthService();
    return AuthService.instance;
  }

  public ensureAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.isAuthenticated()) return next();
    throw NOT_AUTHORIZED;
  }

  public async registerUser(username: string, password: string): Promise<IUser> {
    const hashedPassword = await hash(password, 10);
    return UserService.create(username, hashedPassword);
  }

  private checkPassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }

  private localStrategyVerify: passportLocal.VerifyFunction = async (username, password, done) => {
    const user = await UserService.get({username}, true);
    if (!user) return done(INVALID_CREDS);
    if (!user.password) return done(SOMETHING_WENT_WRONG);

    const isPasswordValid = await this.checkPassword(password, user.password);
    if (!isPasswordValid) return done(INVALID_CREDS);

    delete user.password;
    return done(null, user);
  };

  private serializeUser = (
    user: IUser | Express.User,
    done: (err: APIError | null, id?: string) => void,
  ) => {
    if (user) return done(null, (user as IUser)._id);
    done({message: 'Something went wrong.', status: 400});
  };

  private deserializeUser = (id: string, done: (err: APIError | null, id?: IUser) => void) => {
    UserService.get({_id: new Types.ObjectId(id)})
      .then((user) => {
        if (user) return done(null, user);
        done(SOMETHING_WENT_WRONG);
      })
      .catch((err) => done({message: err.message}));
  };
}
