import { NextFunction, Request, Response } from 'express';
import { HttpError, InternalServerError } from '../../commons/errors/http-errors';
import logger from '../../commons/logger/logger';

export = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  if (err instanceof HttpError) {
    res.status(err.code).send(err);
  } else {
    res.status(500).send(new InternalServerError());
  }
};