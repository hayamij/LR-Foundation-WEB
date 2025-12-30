/**
 * EJS Helper Middleware
 * Provides layout rendering support for EJS
 */

const ejs = require('ejs');
const path = require('path');
const fs = require('fs').promises;

/**
 * EJS Layout Helper
 * Allows using layout templates with EJS
 */
module.exports = function ejsLayoutMiddleware(req, res, next) {
  const originalRender = res.render;

  res.render = function(view, options = {}, callback) {
    const self = this;
    const layoutPath = options.layout || 'layouts/main';
    
    // Render the view first
    const viewPath = path.join(req.app.get('views'), view + '.ejs');
    
    ejs.renderFile(viewPath, options, (err, html) => {
      if (err) {
        return callback ? callback(err) : next(err);
      }

      // If no layout, just return the view
      if (!layoutPath) {
        return originalRender.call(self, view, options, callback);
      }

      // Render with layout
      const layoutOptions = {
        ...options,
        body: html
      };

      return originalRender.call(self, layoutPath, layoutOptions, callback);
    });
  };

  next();
};
