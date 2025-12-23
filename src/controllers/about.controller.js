/**
 * Controllers - About (Về chúng tôi)
 * Xử lý logic cho các trang giới thiệu
 */

const config = require('../config/app.config');

exports.getAboutPage = (req, res) => {
  res.render('pages/about', {
    title: 'Về chúng tôi',
    config: config,
    page: 'about'
  });
};

exports.getVisionPage = (req, res) => {
  res.render('pages/about/vision', {
    title: 'Tầm nhìn & Sứ mệnh',
    config: config,
    page: 'about'
  });
};

exports.getTeamPage = (req, res) => {
  res.render('pages/about/team', {
    title: 'Đội ngũ nhân sự',
    config: config,
    page: 'about'
  });
};
