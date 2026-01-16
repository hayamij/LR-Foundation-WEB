/**
 * Footer Component
 * Comprehensive footer with links, contact info, and social media
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG, NAVIGATION } from '../../config/constants';
import Button from '../ui/Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="material-icons text-white text-2xl">favorite</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">
                  {SITE_CONFIG.shortName}
                </div>
                <div className="text-xs text-gray-400">
                  {SITE_CONFIG.nameEn}
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {SITE_CONFIG.tagline}
            </p>

            <div className="mb-6">
              <p className="text-sm font-semibold text-green-400 italic">
                "{SITE_CONFIG.mission}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="YouTube"
              >
                <span className="text-xl">▶️</span>
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors group"
                  >
                    <span className="material-icons text-base text-gray-600 group-hover:text-green-400 transition-colors">
                      {item.icon}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-icons text-green-400 mt-0.5">place</span>
                <span className="text-sm">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-green-400 mt-0.5">phone</span>
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-sm hover:text-green-400 transition-colors">
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-icons text-green-400 mt-0.5">mail</span>
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm hover:text-green-400 transition-colors">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="text-white font-semibold text-sm mb-2">Giờ Làm Việc</h4>
              <p className="text-xs text-gray-400">
                Thứ 2 - Thứ 6: 8:00 - 17:00<br />
                Thứ 7: 8:00 - 12:00<br />
                Chủ Nhật: Nghỉ
              </p>
            </div>
          </div>

          {/* Newsletter & CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Nhận Tin Mới</h3>
            <p className="text-sm text-gray-400 mb-4">
              Đăng ký để nhận thông tin về các dự án và hoạt động mới nhất.
            </p>
            
            {showSuccess ? (
              <div className="p-4 bg-green-600 rounded-xl mb-6">
                <div className="flex items-center gap-2 text-white">
                  <span className="material-icons">check_circle</span>
                  <span className="font-semibold">Đăng ký thành công!</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3 mb-6">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? 'Đang xử lý...' : 'Đăng Ký'}
                </Button>
              </form>
            )}

            {/* CTA Box */}
            <div className="p-4 bg-gradient-to-br from-green-600 to-green-700 rounded-xl">
              <h4 className="text-white font-bold mb-2">Đóng Góp Ngay</h4>
              <p className="text-white/90 text-xs mb-3">
                Mỗi đóng góp của bạn đều tạo nên sự khác biệt lớn lao.
              </p>
              <Button
                variant="secondary"
                size="sm"
                href="/donate"
                className="w-full"
              >
                Ủng Hộ Dự Án
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <div>
              © {currentYear} {SITE_CONFIG.name}. Mọi quyền được bảo lưu.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-green-400 transition-colors">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="hover:text-green-400 transition-colors">
                Điều khoản sử dụng
              </Link>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                Theo dõi chúng tôi
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
