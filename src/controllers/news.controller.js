const path = require('path');

exports.getNewsPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/news.html'));
};

exports.getNewsDetail = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/newsDetail.html'));
};

exports.getReportsPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/news.html'));
};

exports.getStoriesPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/news.html'));
};

exports.getDocumentsPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/news.html'));
};
