require('dotenv').config();

module.exports = {
  // Environment
  env: process.env.NODE_ENV || 'development',
  
  // Server
  port: process.env.PORT || 3000,
  
  // Application
  appName: 'Quỹ Bông Hồng Nhỏ',
  appFullName: 'Quỹ Bông Hồng Nhỏ - Little Rose Foundation',
  appDescription: 'Tổ chức từ thiện phi lợi nhuận hoạt động vì sự phát triển bền vững của cộng đồng',
  
  // URLs
  baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  
  // Social Media
  social: {
    facebook: process.env.FACEBOOK_URL || 'https://facebook.com/lrfoundation',
    youtube: process.env.YOUTUBE_URL || 'https://youtube.com/@lrfoundation',
    email: process.env.CONTACT_EMAIL || 'contact@bonghongnho.org.vn',
    phone: process.env.CONTACT_PHONE || '(+84) 123 456 789'
  },
  
  // Contact Information
  contact: {
    address: process.env.CONTACT_ADDRESS || 'Tầng 5, Tòa nhà ABC, Số 123 Đường XYZ, Quận 1, TP. Hồ Chí Minh',
    phone: process.env.CONTACT_PHONE || '(+84) 123 456 789',
    email: process.env.CONTACT_EMAIL || 'contact@bonghongnho.org.vn'
  },
  
  // Features
  features: {
    donationEnabled: true,
    newsEnabled: true,
    newsletterEnabled: true
  },
  
  // Pagination
  pagination: {
    newsPerPage: 9,
    projectsPerPage: 6
  }
};