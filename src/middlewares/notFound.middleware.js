const config = require('../config/app.config');

module.exports = (req, res, next) => {
  res.status(404).render('pages/404', {
    title: 'Không tìm thấy trang',
    url: req.originalUrl,
    config: config,
    page: '404'
  });
};
