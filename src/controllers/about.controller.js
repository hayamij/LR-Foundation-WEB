/**
 * About Controller
 * Handles about page and related content
 */

exports.getAboutPage = (req, res) => {
  res.render('pages/about', {
    pageTitle: 'Giới thiệu',
    pageDescription: 'Tìm hiểu về Quỹ Bông Hồng Nhỏ - Sứ mệnh, tầm nhìn và giá trị cốt lõi',
    layout: 'layouts/main'
  });
};

exports.getVisionPage = (req, res) => {
  res.render('pages/about', {
    pageTitle: 'Tầm nhìn & Sứ mệnh',
    pageDescription: 'Tầm nhìn và sứ mệnh của Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main'
  });
};

exports.getTeamPage = (req, res) => {
  res.render('pages/about', {
    pageTitle: 'Đội ngũ',
    pageDescription: 'Đội ngũ làm việc tại Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main'
  });
};
