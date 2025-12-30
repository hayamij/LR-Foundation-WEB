const config = require('../config/app.config');

exports.getProgramsPage = (req, res) => {
  res.render('pages/programs', {
    title: 'Chương trình - Dự án',
    config: config,
    page: 'programs'
  });
};

exports.getEducationPage = (req, res) => {
  res.render('pages/programs/education', {
    title: 'Hỗ trợ Giáo dục',
    config: config,
    page: 'programs'
  });
};

exports.getHealthcarePage = (req, res) => {
  res.render('pages/programs/healthcare', {
    title: 'Y tế & Sức khỏe',
    config: config,
    page: 'programs'
  });
};

exports.getSocialPage = (req, res) => {
  res.render('pages/programs/social', {
    title: 'Bác ái xã hội',
    config: config,
    page: 'programs'
  });
};

exports.getFundraisingPage = (req, res) => {
  res.render('pages/programs/fundraising', {
    title: 'Gây quỹ',
    config: config,
    page: 'programs'
  });
};
