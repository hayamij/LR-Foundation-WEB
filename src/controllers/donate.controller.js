const config = require('../config/app.config');
const donationService = require('../services/donation.service');
const { sendSuccess, sendError } = require('../utils/response.util');

exports.getDonatePage = (req, res) => {
  const donationMethods = donationService.getDonationMethods();
  const suggestedAmounts = donationService.getSuggestedAmounts();
  const donationPrograms = donationService.getDonationPrograms();
  
  res.render('pages/donate', {
    title: 'Đóng góp ngay',
    config: config,
    page: 'donate',
    donationMethods,
    suggestedAmounts,
    donationPrograms
  });
};

exports.postDonation = async (req, res) => {
  try {
    const result = await donationService.processDonation(req.body);
    
    if (result.success) {
      return sendSuccess(res, result.data, result.message);
    } else {
      return sendError(res, result.message || 'Có lỗi xảy ra', 400, result.errors);
    }
  } catch (error) {
    console.error('Donation error:', error);
    return sendError(res, 'Có lỗi xảy ra khi xử lý quyên góp', 500);
  }
};
