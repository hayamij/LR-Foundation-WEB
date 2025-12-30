const path = require('path');
const donationService = require('../services/donation.service');
const { sendSuccess, sendError } = require('../utils/response.util');

exports.getDonatePage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/quyengop.html'));
};

exports.getDonateConfirmPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/quyengopConfirm.html'));
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
