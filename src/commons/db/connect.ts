import { Pool, QueryResult } from 'pg';
import { InternalServerError } from '../errors/http-errors';
import logger from '../logger/logger';

const test =  async (pool: Pool): Promise<void> => {
  try {
    await pool.query('SELECT 1+1 AS result');
    logger.info('Database connected successfully');
  } finally {
    pool.end();
  }
};

const connect = (pool: Pool): Function => async (query: string): Promise<QueryResult<any>> => {
  try {
    logger.debug(query);
    return pool.query(query);
  } catch(error) {
    logger.error(`Error querying db: ${error}`);
    throw new InternalServerError();
  } finally {
    pool.end();
  }
};

export { connect, test };
