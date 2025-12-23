/**
 * Express Application Configuration
 * LR Foundation WEB UI
 */

const express = require('express');
const path = require('path');
const config = require('./config/app.config');

// Import routes
const indexRouter = require('./routes/index.routes');
const aboutRouter = require('./routes/about.routes');
const programsRouter = require('./routes/programs.routes');
const newsRouter = require('./routes/news.routes');
const donateRouter = require('./routes/donate.routes');

// Import middlewares
const errorHandler = require('./middlewares/error.middleware');
const notFoundHandler = require('./middlewares/notFound.middleware');

const app = express();

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/programs', programsRouter);
app.use('/news', newsRouter);
app.use('/donate', donateRouter);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
