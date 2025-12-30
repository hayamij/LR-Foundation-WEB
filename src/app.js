/**
 * Express Application Configuration
 * LR Foundation WEB - v2.0
 * Refactored with EJS templating and improved architecture
 */

const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const config = require('./config/app.config');

// Import routes
const indexRouter = require('./routes/index.routes');
const aboutRouter = require('./routes/about.routes');
const programsRouter = require('./routes/programs.routes');
const newsRouter = require('./routes/news.routes');
const donateRouter = require('./routes/donate.routes');
const contactRouter = require('./routes/contact.routes');
const financeRouter = require('./routes/finance.routes');
const apiRouter = require('./routes/api.routes');

// Import middlewares
const ejsLayoutMiddleware = require('./middlewares/ejsLayout.middleware');
const errorHandler = require('./middlewares/error.middleware');
const notFoundHandler = require('./middlewares/notFound.middleware');

const app = express();

// Security and performance middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
    },
  },
}));
app.use(compression());

// View engine setup with EJS
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// EJS Layout support
app.use(ejsLayoutMiddleware);

// Global template variables
app.use((req, res, next) => {
  res.locals.siteName = 'Quỹ Bông Hồng Nhỏ';
  res.locals.currentYear = new Date().getFullYear();
  res.locals.currentPath = req.path;
  next();
});

// Routes
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/programs', programsRouter);
app.use('/news', newsRouter);
app.use('/donate', donateRouter);
app.use('/contact', contactRouter);
app.use('/finance', financeRouter);
app.use('/api', apiRouter);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
