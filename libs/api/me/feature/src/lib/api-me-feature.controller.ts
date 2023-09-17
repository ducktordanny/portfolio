import express from 'express';

import {MeService} from 'api/me/data-access';
import {AuthService} from 'api/auth/data-access';

const router = express.Router();
const auth = AuthService.getInstance();

router.get('/', async (_, res, next) => {
  try {
    const me = await MeService.get();
    res.json(me);
  } catch (err: unknown) {
    return next(err);
  }
});

router.put('/', auth.ensureAuth, async (req, res, next) => {
  try {
    const body = req?.body;
    await MeService.change(body);
    res.status(200).send();
  } catch (err: unknown) {
    return next(err);
  }
});

export {router as meRouter};
