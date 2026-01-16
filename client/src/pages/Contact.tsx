/**
 * Contact Page
 */

import { useState } from 'react';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SITE_CONFIG } from '../config/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after 4 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <>
      <Hero
        title="Liên Hệ Với Chúng Tôi"
        description="Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn"
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200"
        overlay="dark"
        height="md"
      />

      <Section background="white" padding="xl">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gửi Tin Nhắn</h2>
            {showSuccess ? (
              <Card variant="elevated" padding="lg" className="text-center border-t-4 border-green-500">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Cảm ơn bạn đã liên hệ!
                </h3>
                <p className="text-gray-700">
                  Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi trong vòng 24 giờ.
                </p>
              </Card>
            ) : (
              <Card variant="elevated" padding="lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tin nhắn *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none resize-none transition-all"
                    />
                  </div>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full" 
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
                  </Button>
                </form>
              </Card>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông Tin Liên Hệ</h2>
            
            <div className="space-y-6">
              <Card variant="default" padding="md" hoverable>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-green-600">place</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Địa chỉ</h3>
                    <p className="text-gray-600">{SITE_CONFIG.contact.address}</p>
                  </div>
                </div>
              </Card>

              <Card variant="default" padding="md" hoverable>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-green-600">phone</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Điện thoại</h3>
                    <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-gray-600 hover:text-green-600">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card variant="default" padding="md" hoverable>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-green-600">mail</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-gray-600 hover:text-green-600">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card variant="default" padding="md">
                <h3 className="font-bold text-gray-900 mb-3">Giờ Làm Việc</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                  <p>Thứ 7: 8:00 - 12:00</p>
                  <p>Chủ Nhật: Nghỉ</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
