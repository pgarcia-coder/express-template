import express, { Application } from 'express'
import httpLogger from './commons/logger/http-logger';
import routes from './routes/routes';
import errorHandler from './routes/middlewares/error-handler';
import repositories from './repositories';
import { connect, test } from './commons/db/connect';
import controllers from './controllers';
import { Pool } from 'pg';
import config from './config/config'

export = async (): Promise<Application> => {
  const { user, password, host, port, database } = config.db;
  const server = express();
  server.use(httpLogger);

  const pool = new Pool({ user, password, host, port, database });
  await test(pool);
  const connection = connect(pool);

  const controller = controllers(repositories(connection));
  routes(server, controller);

  server.use(errorHandler);
  return server;
};
