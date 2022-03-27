import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import journalRoutes from './routes/journalRoutes.js'

import passport from 'passport';
import mongoose from 'mongoose';

import { config } from './store/config.js';
import { applyPassportStrategy } from './store/passport.js';
import { userController } from './controller/index.js';
import { contractdefController } from './controller/index.js';
import { contractinstController } from './controller/index.js';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "*"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));
app.options('*', cors());

applyPassportStrategy(passport);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', journalRoutes);
app.use('/auth', userController);
app.use('/contract/definition', contractdefController);
app.use('/contract/instance', contractinstController);

const { mongoDBUri, mongoHostName } = config.env;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  mongoose
    .connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log(`Conneted to mongoDB at ${mongoHostName}`);
    });
});
