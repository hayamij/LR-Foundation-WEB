/**
 * Home Controller
 * Handles home page rendering
 */

exports.getHomePage = (req, res) => {
  // Featured stats
  const stats = {
    totalBeneficiaries: 5000,
    completedProjects: 120,
    totalDonations: 15000000000,
    volunteers: 500
  };
  
  res.render('pages/home', {
    pageTitle: 'Trang chủ',
    pageDescription: 'Quỹ Bông Hồng Nhỏ - Hành trình lan tỏa yêu thương đến trẻ em Việt Nam',
    layout: 'layouts/main',
    pageScript: 'main.js',
    stats
  });
};

