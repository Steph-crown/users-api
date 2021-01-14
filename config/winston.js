const winston = require('winston');

// creates a new Winston Logger
const logger = new winston.createLogger({
  level: 'http',
  transports: [
    new winston.transports.File({ filename: './logs/error.log', level: 'error'}),
    new winston.transports.File({ filename: 'logs/info.log', level: 'info'}),
    new winston.transports.File({ filename:'./logs/http.log', level: 'http'})
  ],
  exitOnError: false
});



// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

module.exports = logger;