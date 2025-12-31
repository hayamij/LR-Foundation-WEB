/**
 * Donate Controller
 * Handles donation pages and processing
 */

const donationService = require('../services/donation.service');
const { validateDonationForm, sanitizeDonationData } = require('../validators/donation.validator');
const { sendSuccess, sendError } = require('../utils/response.util');

exports.getDonatePage = (req, res) => {
  // Suggested amounts
  const suggestedAmounts = [
    { amount: 100000, label: '100.000đ', description: 'Mua sách vở cho 1 em' },
    { amount: 500000, label: '500.000đ', description: 'Bữa ăn dinh dưỡng cho 1 tháng' },
    { amount: 1000000, label: '1.000.000đ', description: 'Học phí cho 1 học kỳ' },
    { amount: 5000000, label: '5.000.000đ', description: 'Hỗ trợ phẫu thuật nhỏ' }
  ];
  
  res.render('pages/donate', {
    pageTitle: 'Quyên góp',
    pageDescription: 'Quyên góp để hỗ trợ trẻ em Việt Nam cùng Quỹ Bông Hồng Nhỏ',
    layout: 'layouts/main',
    pageScript: 'main.js',
    suggestedAmounts
  });
};

exports.getDonateConfirmPage = (req, res) => {
  res.render('pages/donate-confirm', {
    pageTitle: 'Xác nhận quyên góp',
    pageDescription: 'Xác nhận thông tin quyên góp',
    layout: 'layouts/main'
  });
};

exports.postDonation = async (req, res) => {
  try {
    // Sanitize and validate input
    const sanitizedData = sanitizeDonationData(req.body);
    const validation = validateDonationForm(sanitizedData);

    if (!validation.isValid) {
      return sendError(res, 'Dữ liệu không hợp lệ', 400, validation.errors);
    }

    // Process donation through service
    const result = await donationService.processDonation(sanitizedData);
    
    if (result.success) {
      return sendSuccess(res, result.data, result.message);
    } else {
      return sendError(res, result.message || 'Có lỗi xảy ra', 400, result.errors);
    }
  } catch (error) {
    console.error('Donation processing error:', error);
    return sendError(res, 'Có lỗi xảy ra khi xử lý quyên góp', 500);
  }
};
