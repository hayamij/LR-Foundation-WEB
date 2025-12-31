/**
 * Programs Controller
 * Handles programs and projects pages
 */

const { mockPrograms } = require('../data/mockData');

exports.getProgramsPage = (req, res) => {
  res.render('pages/programs', {
    pageTitle: 'Chương trình',
    pageDescription: 'Các chương trình và dự án của Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main',
    pageScript: 'main.js',
    programs: mockPrograms
  });
};

exports.getProgramDetail = (req, res) => {
  const programId = parseInt(req.params.id);
  const program = mockPrograms.find(p => p.id === programId);
  
  if (!program) {
    return res.redirect('/programs');
  }
  
  res.render('pages/program-detail', {
    pageTitle: program.title,
    pageDescription: program.description,
    layout: 'layouts/main',
    pageScript: 'main.js',
    program
  });
};
