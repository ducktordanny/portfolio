import express from 'express';
import * as path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';

import {version} from 'shared/constants';
import {DB} from 'api/util-db';
import {meRouter} from 'api/me/feature';
import {skillsRouter} from 'api/skills/feature';
import {projectsRouter} from 'api/projects/feature';
import {contactsRouter} from 'api/contacts/feature';

const app = express();

app.use(cors());
app.use(bodyParser.json({type: 'application/json'}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const router = express.Router();

router.get('/', (_, res) => res.send({message: 'Welcome to the DucktorDanny API!', version}));

router.use('/me', meRouter);
router.use('/skills', skillsRouter);
router.use('/projects', projectsRouter);
router.use('/contacts', contactsRouter);

app.use('/api', router);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

DB.init();
