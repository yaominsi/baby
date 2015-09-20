var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var empAuth = require('./routes/emp/auth');
var empPreOrder = require('./routes/emp/pre-order');
var empReg = require('./routes/emp/reg');

var staffContact = require('./routes/staff/contact');
var staffEmptyTime = require('./routes/staff/empty-time');
var staffBase = require('./routes/staff/base');
var staffWorkHope = require('./routes/staff/work-hope');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/emp/auth', empAuth);
app.use('/emp/reg', empReg);
app.use('/emp/preOrder', empPreOrder);

app.use('/staff/contact', staffContact);
app.use('/staff/emptyTime', staffEmptyTime);
app.use('/staff/base', staffBase);
app.use('/staff/workHope', staffWorkHope);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
