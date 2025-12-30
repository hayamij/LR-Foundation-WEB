module.exports = (err, req, res, next) => {
  console.error('Error:', err.message);
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Đã xảy ra lỗi hệ thống';

  res.status(statusCode).render('pages/error', {
    title: 'Lỗi',
    statusCode,
    message,
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
};
