import express from 'express';

import {ContactsService} from 'api/contacts/data-access';
import {AuthService} from 'api/auth/data-access';
import {INVALID_BODY} from 'api/error-messages';

const router = express.Router();
const auth = AuthService.getInstance();

router.get('/', async (_, res, next) => {
  try {
    const contacts = await ContactsService.get();
    res.send(contacts);
  } catch (err: unknown) {
    return next(err);
  }
});

router.put('/', auth.ensureAuth, async (req, res, next) => {
  const body = req?.body;
  if (!body) return next(INVALID_BODY);
  try {
    await ContactsService.change(body);
    res.status(200).send();
  } catch (err: unknown) {
    return next(err);
  }
});

export {router as contactsRouter};
