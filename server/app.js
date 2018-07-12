var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');

var bitstampRouter = require('./routes/api/bitstamp');
var coinmarketcapRouter = require('./routes/api/coinmarketcap');
var indexRouter = require('./routes/index');

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

function indexHandler (request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
}

const singleBuild = process.env.SINGLE_BUILD;

const indexRoute = singleBuild ? indexHandler : indexRouter;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(express.static(CLIENT_BUILD_PATH));

app.use('/api/bitstamp', bitstampRouter);
app.use('/api/coinmarketcap', coinmarketcapRouter);
app.use('*', indexRoute); // app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
