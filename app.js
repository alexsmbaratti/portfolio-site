var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var amiiboDisplayRouter = require('./routes/amiibo-display');
var rosalinaBotRouter = require('./routes/rosalina-bot');
var akihabaraRouter = require('./routes/akihabara-simulation');
var happyKeyRouter = require('./routes/happy-key');
var portfolioSiteRouter = require('./routes/portfolio-site');
var starbitsCoffeeRouter = require('./routes/starbits-coffee');
var robinRouter = require('./routes/robin-amiibo');
var starbitRouter = require('./routes/starbit');
var pixelShelfRouter = require('./routes/pixel-shelf');
var blogRouter = require('./routes/blog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Controller
app.use('/', indexRouter);
app.use('/amiibo-display', amiiboDisplayRouter);
app.use('/rosalina-bot', rosalinaBotRouter);
app.use('/akihabara-simulation', akihabaraRouter);
app.use('/happy-key', happyKeyRouter);
app.use('/portfolio-site', portfolioSiteRouter);
app.use('/starbits-coffee', starbitsCoffeeRouter);
app.use('/robin-amiibo', robinRouter);
app.use('/starbit', starbitRouter);
app.use('/pixel-shelf', pixelShelfRouter);
app.use('/blog', blogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
