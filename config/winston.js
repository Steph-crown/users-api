const winston = require('winston');
const {format, createLogger, transports} = winston;
// define the custom settings for each transport (file, console)
var options = {
    infoFile: {
        level: 'info',
        filename: `./logs/info.log`,
        handleExceptions: false,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        format: format.combine(
            format.prettyPrint(),
            format.simple(),
            format.colorize()
        )
    }
};


// instantiate a new Winston Logger with the settings defined above
var logger = new createLogger({
    transports: [
        new transports.File(options.infoFile),
        new transports.Console(options.infoFile)
    ],
    exitOnError: false, // do not exit on handled exceptions
});


// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
    write: function(message, encoding) {
      // use the 'info' log level so the output will be picked up by both transports (file and console)
      logger.info(message);
    },
  };
  
  module.exports = logger;