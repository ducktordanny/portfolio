import express from 'express';

import { ContactsService } from 'api/contacts/data-access';

const router = express.Router();

router.get('/', async (_, res) => {
  const contacts = await ContactsService.get();
  res.send(contacts);
});

export { router as contactsRouter };
