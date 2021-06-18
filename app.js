var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

/**
 * Set CORS for the Server
 */
 const allowlist = ['http://localhost:4201'];

 const corsOptionsDelegate = (req, callback) => {
   let corsOptions;
   let isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;
   console.log('--------------::', isDomainAllowed);
  //  let isExtensionAllowed = req.path.endsWith('.jpg');
 
   if (isDomainAllowed) {
     // Enable CORS for this request
     corsOptions = { origin: true }
   } else {
     // Disable CORS for this request
     corsOptions = { origin: false }
   }
   callback(null, corsOptions)
 }
 
 app.use(cors(corsOptionsDelegate));
 app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
