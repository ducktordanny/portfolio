import express from 'express';

import { SkillService } from 'api/skills/data-access';

const router = express.Router();

router.get('/', async (_, res) => {
  const skills = await SkillService.get();
  res.send(skills);
});

export { router as skillsRouter };
