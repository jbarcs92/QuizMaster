var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
const hbs = require('hbs');
var helpers = require('./components/hbsHelpers');

require('dotenv').config();
require('./config/database');

var homeRouter = require('./routes/home');
var quizzesRouter = require('./routes/quizzes');
var sportsRouter = require('./routes/sports');
var historyRouter = require('./routes/history');
var scienceRouter = require('./routes/science');
var televisionRouter = require('./routes/television');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// const partialsPath = path.join(__dirname, 'views/partials');
// hbs.registerPartials(partialsPath);

hbs.registerPartials(path.join(__dirname, 'views/partials'), (err) => {});
for (let helper in helpers) {
  hbs.registerHelper(helper, helpers[helper]);
}



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images/', express.static('./public/images'));
app.use('/public/javascripts/quiz.js', express.static('./public/javascripts/quiz.js'));

app.use(methodOverride('_method'));

app.use('/', homeRouter);
app.use('/quizzes', quizzesRouter);
app.use('/sports', sportsRouter);
app.use('/history', historyRouter);
app.use('/science', scienceRouter);
app.use('/television', televisionRouter);

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
