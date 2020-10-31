import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../commons/errors/http-errors';
import logger from '../../commons/logger/logger';

export = (controller: Function, successCode = 200) => 
  async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await controller(req);

    if (response === undefined || response === null) { 
      throw new NotFoundError();
    } else {
      res.status(successCode).send(response);    
    }

    return next();
  } catch (error) {
    logger.error(error);
    return next(error);
  }
};