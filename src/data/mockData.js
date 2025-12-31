/**
 * Mock Data - Centralized Data Source
 * Single source of truth for all mock data used across the application
 * TO DO: Replace with real database queries when ready
 */

const mockPrograms = [
  {
    id: 1,
    title: 'Học bổng Bông Hồng Nhỏ',
    description: 'Trao học bổng cho học sinh nghèo vượt khó học giỏi',
    category: 'education',
    status: 'active',
    image: '/images/programs/scholarship.jpg',
    targetAmount: 100000000,
    raisedAmount: 75000000,
    beneficiaries: '500+ học sinh'
  },
  {
    id: 2,
    title: 'Thư viện Tri thức',
    description: 'Xây dựng thư viện và tặng sách cho các trường học vùng xa',
    category: 'education',
    status: 'active',
    image: '/images/programs/library.jpg',
    targetAmount: 50000000,
    raisedAmount: 30000000,
    beneficiaries: '50+ trường học'
  },
  {
    id: 3,
    title: 'Chăm sóc sức khỏe trẻ em',
    description: 'Khám chữa bệnh miễn phí cho trẻ em vùng khó khăn',
    category: 'healthcare',
    status: 'active',
    image: '/images/programs/healthcare.jpg',
    targetAmount: 80000000,
    raisedAmount: 45000000,
    beneficiaries: '1000+ trẻ em'
  }
];

const mockNews = [
  {
    id: 1,
    title: 'Trao học bổng cho 100 học sinh nghèo vượt khó',
    excerpt: 'Quỹ Bông Hồng Nhỏ đã tổ chức lễ trao học bổng cho 100 học sinh có hoàn cảnh khó khăn',
    category: 'activity',
    featuredImage: '/images/news/scholarship-ceremony.jpg',
    publishedAt: '2024-12-15',
    author: 'Ban biên tập'
  },
  {
    id: 2,
    title: 'Xây dựng thư viện cho trường tiểu học vùng cao',
    excerpt: 'Dự án xây dựng thư viện tại huyện miền núi đã hoàn thành và đưa vào sử dụng',
    category: 'story',
    featuredImage: '/images/news/library-project.jpg',
    publishedAt: '2024-12-10',
    author: 'Ban biên tập'
  },
  {
    id: 3,
    title: 'Báo cáo tài chính Quý 4/2024',
    excerpt: 'Công khai minh bạch các khoản thu chi trong quý vừa qua',
    category: 'announcement',
    featuredImage: '/images/news/financial-report.jpg',
    publishedAt: '2024-12-01',
    author: 'Phòng Tài chính'
  }
];

module.exports = {
  mockPrograms,
  mockNews
};
