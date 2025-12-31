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
