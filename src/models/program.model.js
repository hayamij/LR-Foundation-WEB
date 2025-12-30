/**
 * Program Model
 * Data structure for programs/projects
 */

class Program {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.category = data.category; // 'education', 'healthcare', 'social', 'fundraising'
    this.status = data.status; // 'active', 'completed', 'upcoming'
    this.image = data.image;
    this.startDate = data.startDate;
    this.endDate = data.endDate;
    this.targetAmount = data.targetAmount;
    this.raisedAmount = data.raisedAmount;
    this.beneficiaries = data.beneficiaries;
    this.location = data.location;
    this.organizer = data.organizer;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  /**
   * Get progress percentage
   */
  getProgress() {
    if (!this.targetAmount || !this.raisedAmount) return 0;
    return Math.min(Math.round((this.raisedAmount / this.targetAmount) * 100), 100);
  }

  /**
   * Check if program is active
   */
  isActive() {
    return this.status === 'active';
  }

  /**
   * Check if program is completed
   */
  isCompleted() {
    return this.status === 'completed';
  }

  /**
   * Format currency amount
   */
  static formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  }

  /**
   * Validate program data
   */
  static validate(data) {
    const errors = [];

    if (!data.title || data.title.trim().length === 0) {
      errors.push('Tiêu đề không được để trống');
    }

    if (!data.category || !['education', 'healthcare', 'social', 'fundraising'].includes(data.category)) {
      errors.push('Danh mục không hợp lệ');
    }

    if (!data.status || !['active', 'completed', 'upcoming'].includes(data.status)) {
      errors.push('Trạng thái không hợp lệ');
    }

    if (data.targetAmount && data.targetAmount < 0) {
      errors.push('Số tiền mục tiêu phải lớn hơn 0');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

module.exports = Program;
