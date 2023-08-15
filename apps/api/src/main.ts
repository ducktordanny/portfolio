import express from 'express';
import * as path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import 'dotenv/config';

import {version} from 'shared/constants';
import {DB} from 'api/util-db';
import {meRouter} from 'api/me/feature';
import {skillsRouter} from 'api/skills/feature';
import {projectsRouter} from 'api/projects/feature';
import {contactsRouter} from 'api/contacts/feature';
import {authRouter} from 'api/auth/feature';
import {AuthService} from 'api/auth/data-access';

const app = express();

app.use(cors());
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'token', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/assets', express.static(path.join(__dirname, 'assets')));

const router = express.Router();
AuthService.init();

router.get('/', (_, res) => res.send({message: 'Welcome to the DucktorDanny API!', version}));

router.use('/me', meRouter);
router.use('/skills', skillsRouter);
router.use('/projects', projectsRouter);
router.use('/contacts', contactsRouter);
router.use('/auth', authRouter);

app.use('/api', router);

app.use((err, req, res, next) => {
  console.error(err?.message || err);
  res.status(err?.status || 500).json({error: err?.message || err});
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

DB.init();
