var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var searchRouter = require('./routes/api/v1/search');
var userRecommendationsRouter = require('./routes/api/v1/users/recommendations');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users/recommendations', userRecommendationsRouter);
app.use('/api/v1/search', searchRouter);
app.use('/users', usersRouter);

module.exports = app;
