import morgan from 'morgan';
import { log } from '../../config/config';

export = morgan(`[${log.level}] :date[iso] - :method :url :status :response-time ms`);