import { createLogger, transports, format, LogEntry } from 'winston';
import { log }  from '../../config/config';

export = createLogger({
  transports: [new transports.Console({ level: log.level })],
  format: format.combine(
    format.timestamp(),
    format.printf(
      (info: LogEntry) =>
        `[${info.level}] ${info.timestamp} - ${info.message}`,
    ),
  ),
});
