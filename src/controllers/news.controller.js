const config = require('../config/app.config');

exports.getNewsPage = (req, res) => {
  res.render('pages/news', {
    title: 'Tin tức & Tài liệu',
    config: config,
    page: 'news'
  });
};

exports.getReportsPage = (req, res) => {
  res.render('pages/news/reports', {
    title: 'Báo cáo',
    config: config,
    page: 'news'
  });
};

exports.getStoriesPage = (req, res) => {
  res.render('pages/news/stories', {
    title: 'Câu chuyện tác động',
    config: config,
    page: 'news'
  });
};

exports.getDocumentsPage = (req, res) => {
  res.render('pages/news/documents', {
    title: 'Tài liệu tham khảo',
    config: config,
    page: 'news'
  });
};
