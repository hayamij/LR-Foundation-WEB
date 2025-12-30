const config = require('../config/app.config');

exports.getHomePage = (req, res) => {
  res.render('pages/home', {
    title: 'Trang chủ',
    config: config,
    page: 'home'
  });
};
