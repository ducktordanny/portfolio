import express from 'express';

import {SkillService} from 'api/skills/data-access';
import {INVALID_BODY} from 'api/shared/error-messages';

const router = express.Router();

router.get('/', async (_, res, next) => {
  try {
    const skills = await SkillService.get();
    res.send(skills);
  } catch (err: unknown) {
    return next(err);
  }
});

router.put('/', async (req, res, next) => {
  const body = req?.body;
  if (!body) return next(INVALID_BODY);
  try {
    await SkillService.change(body);
    res.status(200).send();
  } catch (err: unknown) {
    return next(err);
  }
});

export {router as skillsRouter};
