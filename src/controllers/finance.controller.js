/**
 * Finance Controller
 * Handles financial transparency pages
 */

exports.getFinancePage = (req, res) => {
  res.render('pages/finance', {
    pageTitle: 'Tài chính',
    pageDescription: 'Báo cáo tài chính minh bạch của Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main'
  });
};
