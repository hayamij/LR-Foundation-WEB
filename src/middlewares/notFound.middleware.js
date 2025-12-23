/**
 * Middleware - 404 Not Found Handler
 * Xử lý các route không tồn tại
 */

module.exports = (req, res, next) => {
  res.status(404).render('pages/404', {
    title: 'Không tìm thấy trang',
    url: req.originalUrl
  });
};
