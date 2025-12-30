/**
 * News Model
 * Data structure for news articles
 */

class News {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.slug = data.slug;
    this.excerpt = data.excerpt;
    this.content = data.content;
    this.category = data.category; // 'activity', 'story', 'announcement', 'media'
    this.featuredImage = data.featuredImage;
    this.author = data.author;
    this.tags = data.tags || [];
    this.views = data.views || 0;
    this.publishedAt = data.publishedAt;
    this.createdAt = data.createdAt || new Date();
    this.updatedAt = data.updatedAt || new Date();
  }

  /**
   * Check if news is published
   */
  isPublished() {
    return this.publishedAt && new Date(this.publishedAt) <= new Date();
  }

  /**
   * Get relative time
   */
  getRelativeTime() {
    const now = new Date();
    const published = new Date(this.publishedAt);
    const diffTime = Math.abs(now - published);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hôm nay';
    if (diffDays === 1) return 'Hôm qua';
    if (diffDays < 7) return `${diffDays} ngày trước`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} tuần trước`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} tháng trước`;
    return `${Math.floor(diffDays / 365)} năm trước`;
  }

  /**
   * Increment views
   */
  incrementViews() {
    this.views++;
  }

  /**
   * Validate news data
   */
  static validate(data) {
    const errors = [];

    if (!data.title || data.title.trim().length === 0) {
      errors.push('Tiêu đề không được để trống');
    }

    if (!data.content || data.content.trim().length === 0) {
      errors.push('Nội dung không được để trống');
    }

    if (!data.category || !['activity', 'story', 'announcement', 'media'].includes(data.category)) {
      errors.push('Danh mục không hợp lệ');
    }

    if (!data.publishedAt) {
      errors.push('Ngày xuất bản không được để trống');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

module.exports = News;
