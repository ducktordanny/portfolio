import express from 'express';

import {MeService} from 'api/me/data-access';

const router = express.Router();

router.get('/', async (_, res) => {
  const me = await MeService.get();
  res.send(me);
});

export {router as meRouter};
