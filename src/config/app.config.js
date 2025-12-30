require('dotenv').config();

module.exports = {
  // Environment
  env: process.env.NODE_ENV || 'development',
  
  // Server
  port: process.env.PORT || 3000,
  
  // Application
  appName: 'LR Foundation',
  appFullName: 'Quỹ Bông Hồng Nhỏ - Little Roses Foundation',
  appDescription: 'Website thiện nguyện kết nối những tấm lòng nhân ái',
  
  // URLs
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  
  // Social Media (placeholder)
  social: {
    facebook: process.env.FACEBOOK_URL || '#',
    youtube: process.env.YOUTUBE_URL || '#',
    email: process.env.CONTACT_EMAIL || 'info@lrfoundation.org'
  },
  
  // Features
  features: {
    donationEnabled: true,
    newsEnabled: true
  }
};
