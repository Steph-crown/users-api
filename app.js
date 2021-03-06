var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const logger = require('./config/winston');
const compression = require('compression');

var apiRouter = require('./routes/api');

var app = express();
app.use(compression()); //Compress all routes


// Makes a connection to the database
const connection = require('./models');
const cors = require('cors');

app.use(morgan("combined", { stream: logger.stream }));




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

// Handles routing
app.use('/api', apiRouter);

// Cathes error and logs it to ./logs/error.log
app.use(function(err, req, res, next) {
  logger('error',` ${req.ip} - - [${new Date().toLocaleString()}] "${req.method} ${req.originalUrl} - ${err.message} -\n`);
  next()
})  

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;