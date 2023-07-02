import express from 'express';

import { ProjectsService } from 'api/projects/data-access';

const router = express.Router();

router.get('/', async (_, res) => {
  const projects = await ProjectsService.get();
  res.send(projects);
});

export { router as projectsRouter };
