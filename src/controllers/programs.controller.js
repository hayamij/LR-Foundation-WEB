/**
 * Programs Controller
 * Handles programs and projects pages
 */

exports.getProgramsPage = (req, res) => {
  res.render('pages/programs', {
    pageTitle: 'Chương trình',
    pageDescription: 'Các chương trình và dự án của Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main'
  });
};

exports.getProgramDetail = (req, res) => {
  const programId = req.params.id;
  res.render('pages/program-detail', {
    pageTitle: 'Chi tiết chương trình',
    pageDescription: 'Thông tin chi tiết chương trình',
    layout: 'layouts/main',
    programId
  });
};

exports.getEducationPage = (req, res) => {
  res.render('pages/programs', {
    pageTitle: 'Giáo dục',
    pageDescription: 'Chương trình giáo dục',
    layout: 'layouts/main',
    category: 'education'
  });
};

exports.getHealthcarePage = (req, res) => {
  res.render('pages/programs', {
    pageTitle: 'Y tế',
    pageDescription: 'Chương trình y tế',
    layout: 'layouts/main',
    category: 'healthcare'
  });
};

exports.getSocialPage = (req, res) => {
  res.render('pages/programs', {
    pageTitle: 'Xã hội',
    pageDescription: 'Chương trình xã hội',
    layout: 'layouts/main',
    category: 'social'
  });
};

exports.getFundraisingPage = (req, res) => {
  res.render('pages/programs', {
    pageTitle: 'Gây quỹ',
    pageDescription: 'Các chiến dịch gây quỹ',
    layout: 'layouts/main',
    category: 'fundraising'
  });
};
