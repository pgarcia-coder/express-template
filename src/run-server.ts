import init from './init-server';
import { port, host } from './config/config';
import logger from './commons/logger/logger';

const runServer = async (): Promise<void> => {
  const server = await init();
  server.listen(port, () => {
    logger.info(`App listening at ${host}:${port}`)
  })
};

runServer().catch(error => {
  logger.error(error.message);
  process.exit(-1);
});

