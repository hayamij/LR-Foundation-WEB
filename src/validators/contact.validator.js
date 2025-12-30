/**
 * Contact Validator
 * Validates contact form submissions
 */

const validateContactForm = (data) => {
  const errors = {};

  // Validate name
  if (!data.name || data.name.trim().length === 0) {
    errors.name = 'Họ và tên không được để trống';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Họ và tên phải có ít nhất 2 ký tự';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Họ và tên không được vượt quá 100 ký tự';
  }

  // Validate email
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Email không được để trống';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = 'Email không đúng định dạng';
    }
  }

  // Validate phone
  if (!data.phone || data.phone.trim().length === 0) {
    errors.phone = 'Số điện thoại không được để trống';
  } else {
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    const cleanPhone = data.phone.replace(/[\s\-().]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      errors.phone = 'Số điện thoại không đúng định dạng (VD: 0912345678 hoặc +84912345678)';
    }
  }

  // Validate subject
  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = 'Chủ đề không được để trống';
  } else if (data.subject.trim().length < 5) {
    errors.subject = 'Chủ đề phải có ít nhất 5 ký tự';
  } else if (data.subject.trim().length > 200) {
    errors.subject = 'Chủ đề không được vượt quá 200 ký tự';
  }

  // Validate message
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Nội dung tin nhắn không được để trống';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Nội dung tin nhắn phải có ít nhất 10 ký tự';
  } else if (data.message.trim().length > 2000) {
    errors.message = 'Nội dung tin nhắn không được vượt quá 2000 ký tự';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Sanitize contact form data
 */
const sanitizeContactData = (data) => {
  return {
    name: data.name ? data.name.trim() : '',
    email: data.email ? data.email.trim().toLowerCase() : '',
    phone: data.phone ? data.phone.replace(/[\s\-().]/g, '') : '',
    subject: data.subject ? data.subject.trim() : '',
    message: data.message ? data.message.trim() : ''
  };
};

module.exports = {
  validateContactForm,
  sanitizeContactData
};
