import express from 'express';

import {ProjectsService} from 'api/projects/data-access';
import {AuthService} from 'api/auth/data-access';
import {INVALID_BODY, MISSING_ID} from 'api/error-messages';

const router = express.Router();
const auth = AuthService.getInstance();

router.get('/', async (_, res) => {
  const projects = await ProjectsService.get();
  res.send(projects);
});

router.get('/:id', async (req, res, next) => {
  const id = req.params['id'];
  if (!id) return next(MISSING_ID);
  try {
    const projects = await ProjectsService.getOne(id);
    res.send(projects);
  } catch (err: unknown) {
    return next(err);
  }
});

router.post('/', auth.ensureAuth, async (req, res, next) => {
  const body = req?.body;
  if (!body) return next(INVALID_BODY);
  try {
    ProjectsService.create(body);
    res.status(200).send();
  } catch (err: unknown) {
    return next(err);
  }
});

router.put('/:id', auth.ensureAuth, async (req, res, next) => {
  const id = req.params['id'];
  if (!id) return next(MISSING_ID);
  const body = req?.body;
  if (!body) return next(INVALID_BODY);
  try {
    await ProjectsService.changeOne(id, body);
    res.status(200).send();
  } catch (err: unknown) {
    return next(err);
  }
});

router.delete('/:id', auth.ensureAuth, (req, res, next) => {
  const id = req.params['id'];
  if (!id) return next(MISSING_ID);
  try {
    ProjectsService.delete(id);
    res.status(200).send();
  } catch (err: unknown) {
    return next(err);
  }
});

export {router as projectsRouter};
