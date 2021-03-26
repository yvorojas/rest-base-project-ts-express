import express, { Application } from 'express';
import actuator from 'express-actuator';
import path from 'path';
import bodyParser from 'body-parser';
import http from 'http';
import os from 'os';
import cookieParser from 'cookie-parser';
import l from './logger';


const app = express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(__dirname + '/../..');
    app.set('appPath', root + 'client');
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(bodyParser.text({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(actuator());
    app.use(express.static(`${root}/public`));
  }

  registerRoutes = (routes) => {
    app.use(routes)
    return this
  }

  listen(port: number): http.Server{
    const welcome = (p: number) => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
        'development'} @: ${os.hostname()} on port: ${p}}`
      );
    const server = http.createServer(app).listen(port, welcome(port));

    return server;
  }
}