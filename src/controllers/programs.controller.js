const config = require('../config/app.config');
const contentService = require('../services/content.service');

exports.getProgramsPage = (req, res) => {
  const statistics = contentService.getStatistics();
  
  res.render('pages/programs', {
    title: 'Chương trình - Dự án',
    config: config,
    page: 'programs',
    statistics
  });
};

exports.getEducationPage = (req, res) => {
  const educationPrograms = contentService.getEducationPrograms();
  
  res.render('pages/programs/education', {
    title: 'Hỗ trợ Giáo dục',
    config: config,
    page: 'programs',
    programs: educationPrograms
  });
};

exports.getHealthcarePage = (req, res) => {
  const healthcarePrograms = contentService.getHealthcarePrograms();
  
  res.render('pages/programs/healthcare', {
    title: 'Y tế & Sức khỏe',
    config: config,
    page: 'programs',
    programs: healthcarePrograms
  });
};

exports.getSocialPage = (req, res) => {
  const socialPrograms = contentService.getSocialPrograms();
  
  res.render('pages/programs/social', {
    title: 'Bác ái xã hội',
    config: config,
    page: 'programs',
    programs: socialPrograms
  });
};

exports.getFundraisingPage = (req, res) => {
  const fundraisingInfo = contentService.getFundraisingInfo();
  
  res.render('pages/programs/fundraising', {
    title: 'Gây quỹ',
    config: config,
    page: 'programs',
    fundraising: fundraisingInfo
  });
};
