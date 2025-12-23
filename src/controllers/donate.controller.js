/**
 * Controllers - Donate (Đóng góp)
 * Xử lý logic cho trang quyên góp
 */

const config = require('../config/app.config');

exports.getDonatePage = (req, res) => {
  res.render('pages/donate', {
    title: 'Đóng góp ngay',
    config: config,
    page: 'donate'
  });
};

exports.postDonation = (req, res) => {
  // TODO: Implement donation logic
  res.json({ 
    success: true, 
    message: 'Cảm ơn sự đóng góp của bạn!' 
  });
};
