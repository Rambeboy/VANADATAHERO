import { createLogger, format, transports } from 'winston';
import a6_0x26df75 from 'fs';
const {
  combine,
  timestamp,
  printf,
  colorize
} = format;
const customFormat = printf(({
  level: _0x20d8cf,
  message: _0x2437d3,
  timestamp: _0x386c9b
}) => {
  return _0x386c9b + " [" + _0x20d8cf + "]: " + _0x2437d3;
});
class Logger {
  constructor() {
    this.logger = createLogger({
      'level': "debug",
      'format': combine(timestamp({
        'format': "YYYY-MM-DD HH:mm:ss"
      }), colorize(), customFormat),
      'transports': [new transports.File({
        'filename': 'log/app.log'
      })],
      'exceptionHandlers': [new transports.File({
        'filename': "log/app.log"
      })],
      'rejectionHandlers': [new transports.File({
        'filename': "log/app.log"
      })]
    });
  }
  ["info"](_0x3cd4ac) {
    this.logger.info(_0x3cd4ac);
  }
  ['warn'](_0x3a193f) {
    this.logger.warn(_0x3a193f);
  }
  ["error"](_0x5b3318) {
    this.logger.error(_0x5b3318);
  }
  ["debug"](_0x5b7670) {
    this.logger.debug(_0x5b7670);
  }
  ['setLevel'](_0x574ced) {
    this.logger.level = _0x574ced;
  }
  ["clear"]() {
    a6_0x26df75.truncate('log/app.log', 0x0, _0x1d1921 => {
      if (_0x1d1921) {
        this.logger.error("Failed to clear the log file: " + _0x1d1921.message);
      } else {
        this.logger.info("Log file cleared");
      }
    });
  }
}
export default new Logger();
