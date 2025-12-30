const config = require('../config/app.config');
const contentService = require('../services/content.service');

exports.getHomePage = (req, res) => {
  const statistics = contentService.getStatistics();
  const latestStories = contentService.getImpactStories().slice(0, 3);
  
  res.render('pages/home', {
    title: 'Trang chủ',
    config: config,
    page: 'home',
    statistics,
    latestStories
  });
};
