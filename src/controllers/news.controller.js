const config = require('../config/app.config');
const contentService = require('../services/content.service');

exports.getNewsPage = (req, res) => {
  const reports = contentService.getReports().slice(0, 2);
  const stories = contentService.getImpactStories().slice(0, 2);
  
  res.render('pages/news', {
    title: 'Tin tức & Tài liệu',
    config: config,
    page: 'news',
    latestReports: reports,
    latestStories: stories
  });
};

exports.getReportsPage = (req, res) => {
  const reports = contentService.getReports();
  
  res.render('pages/news/reports', {
    title: 'Báo cáo',
    config: config,
    page: 'news',
    reports
  });
};

exports.getStoriesPage = (req, res) => {
  const stories = contentService.getImpactStories();
  
  res.render('pages/news/stories', {
    title: 'Câu chuyện tác động',
    config: config,
    page: 'news',
    stories
  });
};

exports.getDocumentsPage = (req, res) => {
  const documents = contentService.getDocuments();
  
  res.render('pages/news/documents', {
    title: 'Tài liệu tham khảo',
    config: config,
    page: 'news',
    documents
  });
};
