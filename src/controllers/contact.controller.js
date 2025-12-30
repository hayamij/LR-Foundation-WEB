/**
 * Contact Controller
 * Handles contact page and form submissions
 */

const { validateContactForm, sanitizeContactData } = require('../validators/contact.validator');

exports.getContactPage = (req, res) => {
  res.render('pages/contact', {
    pageTitle: 'Liên hệ',
    pageDescription: 'Liên hệ với Quỹ Bông Hồng Nhỏ - Chúng tôi luôn sẵn sàng lắng nghe',
    layout: 'layouts/main',
    pageScript: 'contact.js'
  });
};

exports.postContact = async (req, res) => {
  try {
    // Sanitize and validate input
    const sanitizedData = sanitizeContactData(req.body);
    const validation = validateContactForm(sanitizedData);

    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        errors: validation.errors
      });
    }

    // TODO: Implement email sending logic
    // const emailService = require('../services/email.service');
    // await emailService.sendContactEmail(sanitizedData);

    res.json({
      success: true,
      message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Có lỗi xảy ra. Vui lòng thử lại.'
    });
  }
};
