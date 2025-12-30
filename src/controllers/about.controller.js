const config = require('../config/app.config');
const contentService = require('../services/content.service');

exports.getAboutPage = (req, res) => {
    const visionMission = contentService.getVisionMission();
    const teamMembers = contentService.getTeamMembers();
    
    res.render('pages/about', {
      title: 'Về chúng tôi',
      config: config,
      page: 'about',
      visionMission,
      teamMembers
    });
};

exports.getVisionPage = (req, res) => {
    const visionMission = contentService.getVisionMission();
    
    res.render('pages/about/vision', {
      title: 'Tầm nhìn & Sứ mệnh',
      config: config,
      page: 'about',
      visionMission
    });
};

exports.getTeamPage = (req, res) => {
    const teamMembers = contentService.getTeamMembers();
    
    res.render('pages/about/team', {
      title: 'Đội ngũ nhân sự',
      config: config,
      page: 'about',
      teamMembers
    });
};
