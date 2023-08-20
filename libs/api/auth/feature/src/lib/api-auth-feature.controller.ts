import express from 'express';
import passport from 'passport';

import {AuthService} from 'api/auth/data-access';
import {INVALID_USER} from 'api/error-messages';

const router = express.Router();
const auth = AuthService.getInstance();

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
