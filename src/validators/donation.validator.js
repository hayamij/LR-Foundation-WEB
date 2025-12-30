/**
 * Donation Validator
 * Validates donation form submissions
 */

const validateDonationForm = (data) => {
  const errors = {};

  // Validate donor name
  if (!data.donorName || data.donorName.trim().length === 0) {
    errors.donorName = 'Họ và tên không được để trống';
  } else if (data.donorName.trim().length < 2) {
    errors.donorName = 'Họ và tên phải có ít nhất 2 ký tự';
  } else if (data.donorName.trim().length > 100) {
    errors.donorName = 'Họ và tên không được vượt quá 100 ký tự';
  }

  // Validate email
  if (!data.donorEmail || data.donorEmail.trim().length === 0) {
    errors.donorEmail = 'Email không được để trống';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.donorEmail)) {
      errors.donorEmail = 'Email không đúng định dạng';
    }
  }

  // Validate phone
  if (!data.donorPhone || data.donorPhone.trim().length === 0) {
    errors.donorPhone = 'Số điện thoại không được để trống';
  } else {
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    const cleanPhone = data.donorPhone.replace(/[\s\-().]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      errors.donorPhone = 'Số điện thoại không đúng định dạng';
    }
  }

  // Validate amount
  if (!data.amount) {
    errors.amount = 'Số tiền quyên góp không được để trống';
  } else {
    const amount = parseInt(data.amount);
    if (isNaN(amount)) {
      errors.amount = 'Số tiền không hợp lệ';
    } else if (amount < 10000) {
      errors.amount = 'Số tiền quyên góp tối thiểu là 10,000 VNĐ';
    } else if (amount > 1000000000) {
      errors.amount = 'Số tiền quyên góp tối đa là 1,000,000,000 VNĐ';
    }
  }

  // Validate frequency
  if (!data.frequency) {
    errors.frequency = 'Vui lòng chọn tần suất quyên góp';
  } else if (!['once', 'monthly', 'yearly'].includes(data.frequency)) {
    errors.frequency = 'Tần suất quyên góp không hợp lệ';
  }

  // Validate payment method
  if (!data.paymentMethod) {
    errors.paymentMethod = 'Vui lòng chọn phương thức thanh toán';
  } else if (!['qr', 'wallet', 'card', 'bank'].includes(data.paymentMethod)) {
    errors.paymentMethod = 'Phương thức thanh toán không hợp lệ';
  }

  // Validate message (optional but has max length)
  if (data.message && data.message.trim().length > 500) {
    errors.message = 'Lời nhắn không được vượt quá 500 ký tự';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Sanitize donation form data
 */
const sanitizeDonationData = (data) => {
  return {
    donorName: data.donorName ? data.donorName.trim() : '',
    donorEmail: data.donorEmail ? data.donorEmail.trim().toLowerCase() : '',
    donorPhone: data.donorPhone ? data.donorPhone.replace(/[\s\-().]/g, '') : '',
    amount: data.amount ? parseInt(data.amount) : 0,
    frequency: data.frequency || 'once',
    paymentMethod: data.paymentMethod || '',
    program: data.program || 'general',
    message: data.message ? data.message.trim() : '',
    isAnonymous: data.isAnonymous === 'true' || data.isAnonymous === true
  };
};

/**
 * Validate preset donation amounts
 */
const validatePresetAmount = (amount) => {
  const validPresets = [50000, 100000, 200000, 500000, 1000000, 2000000, 5000000];
  return validPresets.includes(parseInt(amount));
};

module.exports = {
  validateDonationForm,
  sanitizeDonationData,
  validatePresetAmount
};
