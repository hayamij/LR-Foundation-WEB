/**
 * News Controller
 * Handles news and updates pages
 */

exports.getNewsPage = (req, res) => {
  res.render('pages/news', {
    pageTitle: 'Tin tức',
    pageDescription: 'Tin tức và cập nhật mới nhất từ Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main',
    pageScript: 'news.js'
  });
};

exports.getNewsDetail = (req, res) => {
  const newsId = req.params.id;
  res.render('pages/news-detail', {
    pageTitle: 'Chi tiết tin tức',
    pageDescription: 'Chi tiết tin tức',
    layout: 'layouts/main',
    newsId
  });
};

exports.getReportsPage = (req, res) => {
  res.render('pages/news', {
    pageTitle: 'Báo cáo',
    pageDescription: 'Các báo cáo hoạt động',
    layout: 'layouts/main',
    category: 'reports'
  });
};

exports.getStoriesPage = (req, res) => {
  res.render('pages/news', {
    pageTitle: 'Câu chuyện',
    pageDescription: 'Câu chuyện từ trẻ em',
    layout: 'layouts/main',
    category: 'stories'
  });
};

exports.getDocumentsPage = (req, res) => {
  res.render('pages/news', {
    pageTitle: 'Tài liệu',
    pageDescription: 'Tài liệu và hướng dẫn',
    layout: 'layouts/main',
    category: 'documents'
  });
};

