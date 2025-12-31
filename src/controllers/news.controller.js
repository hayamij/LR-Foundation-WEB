/**
 * News Controller
 * Handles news and updates pages
 */

const { mockNews } = require('../data/mockData');

exports.getNewsPage = (req, res) => {
  res.render('pages/news', {
    pageTitle: 'Tin tức',
    pageDescription: 'Tin tức và cập nhật mới nhất từ Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main',
    pageScript: 'main.js',
    news: mockNews
  });
};

exports.getNewsDetail = (req, res) => {
  const newsId = parseInt(req.params.id);
  const newsItem = mockNews.find(n => n.id === newsId);
  
  if (!newsItem) {
    return res.redirect('/news');
  }
  
  res.render('pages/news-detail', {
    pageTitle: newsItem.title,
    pageDescription: newsItem.excerpt,
    layout: 'layouts/main',
    pageScript: 'main.js',
    news: newsItem
  });
};

