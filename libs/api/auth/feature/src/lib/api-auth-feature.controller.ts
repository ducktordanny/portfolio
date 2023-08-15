import express from 'express';
import passport from 'passport';

import {AuthService} from 'api/auth/data-access';
import {APIError} from 'shared/api-interfaces';

const router = express.Router();
const auth = AuthService.getInstance();

const INVALID_USER: APIError = {message: 'Invalid username or password.', status: 400};

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  if (!req.user) return next('Invalid username or password');
  res.json(req.user);
});

router.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) next({message: err});
    res.status(200).send();
  });
});

router.post('/register', auth.ensureAuth, async (req, res, next) => {
  const {username, password} = req?.body || {};
  if (!username || !password) return next(INVALID_USER);
  try {
    await auth.registerUser(username, password);
    res.status(200).send();
  } catch (err: unknown) {
    return next(err);
  }
});

export {router as authRouter};
