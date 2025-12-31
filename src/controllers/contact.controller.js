/**
 * Contact Controller
 * Handles contact page and form submissions
 */

const { validateContactForm, sanitizeContactData } = require('../validators/contact.validator');
const { sendSuccess, sendError } = require('../utils/response.util');

exports.getContactPage = (req, res) => {
  res.render('pages/contact', {
    pageTitle: 'Liên hệ',
    pageDescription: 'Liên hệ với Quỹ Bông Hồng Nhỏ - Chúng tôi luôn sẵn sàng lắng nghe',
    layout: 'layouts/main',
    pageScript: 'main.js'
  });
};

exports.postContact = async (req, res) => {
  try {
    // Sanitize and validate input
    const sanitizedData = sanitizeContactData(req.body);
    const validation = validateContactForm(sanitizedData);

    if (!validation.isValid) {
      return sendError(res, 'Dữ liệu không hợp lệ', 400, validation.errors);
    }

    // TODO: Save to database and send email notification
    // For now, just return success
    return sendSuccess(
      res, 
      { submittedAt: new Date() },
      'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.'
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return sendError(res, 'Có lỗi xảy ra. Vui lòng thử lại.', 500);
  }
};
