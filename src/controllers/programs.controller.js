const path = require('path');

exports.getProgramsPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/programs.html'));
};

exports.getProgramDetail = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/programsDetail.html'));
};

exports.getEducationPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/programs.html'));
};

exports.getHealthcarePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/programs.html'));
};

exports.getSocialPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/programs.html'));
};

exports.getFundraisingPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/programs.html'));
};
