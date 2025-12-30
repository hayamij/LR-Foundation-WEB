/**
 * Donation Model
 * Data structure for donations
 */

class Donation {
  constructor(data) {
    this.id = data.id;
    this.donorName = data.donorName;
    this.donorEmail = data.donorEmail;
    this.donorPhone = data.donorPhone;
    this.amount = data.amount;
    this.frequency = data.frequency; // 'once', 'monthly', 'yearly'
    this.paymentMethod = data.paymentMethod; // 'qr', 'wallet', 'card', 'bank'
    this.program = data.program; // Program ID or 'general'
    this.message = data.message;
    this.isAnonymous = data.isAnonymous || false;
    this.status = data.status || 'pending'; // 'pending', 'completed', 'failed', 'refunded'
    this.transactionId = data.transactionId;
    this.receiptUrl = data.receiptUrl;
    this.createdAt = data.createdAt || new Date();
    this.completedAt = data.completedAt;
  }

  /**
   * Check if donation is completed
   */
  isCompleted() {
    return this.status === 'completed';
  }

  /**
   * Check if donation is recurring
   */
  isRecurring() {
    return this.frequency !== 'once';
  }

  /**
   * Format currency amount
   */
  getFormattedAmount() {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(this.amount);
  }

  /**
   * Get display name (handle anonymous)
   */
  getDisplayName() {
    return this.isAnonymous ? 'Ẩn danh' : this.donorName;
  }

  /**
   * Mark as completed
   */
  markCompleted(transactionId) {
    this.status = 'completed';
    this.transactionId = transactionId;
    this.completedAt = new Date();
  }

  /**
   * Validate donation data
   */
  static validate(data) {
    const errors = [];

    if (!data.donorName || data.donorName.trim().length === 0) {
      errors.push('Tên người quyên góp không được để trống');
    }

    if (!data.donorEmail || !this.isValidEmail(data.donorEmail)) {
      errors.push('Email không hợp lệ');
    }

    if (!data.donorPhone || !this.isValidPhone(data.donorPhone)) {
      errors.push('Số điện thoại không hợp lệ');
    }

    if (!data.amount || data.amount < 10000) {
      errors.push('Số tiền quyên góp tối thiểu là 10,000 VNĐ');
    }

    if (!data.frequency || !['once', 'monthly', 'yearly'].includes(data.frequency)) {
      errors.push('Tần suất quyên góp không hợp lệ');
    }

    if (!data.paymentMethod || !['qr', 'wallet', 'card', 'bank'].includes(data.paymentMethod)) {
      errors.push('Phương thức thanh toán không hợp lệ');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Validate email format
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone format (Vietnamese)
   */
  static isValidPhone(phone) {
    const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }
}

module.exports = Donation;
