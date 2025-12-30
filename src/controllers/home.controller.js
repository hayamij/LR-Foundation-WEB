/**
 * Home Controller
 * Handles home page rendering
 */

exports.getHomePage = (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Trang chủ',
    pageDescription: 'Quỹ Bông Hồng Nhỏ - Hành trình lan tỏa yêu thương đến trẻ em Việt Nam',
    layout: 'layouts/main'
  });
};

