/**
 * Donate Page - Emotional Stories, Gratitude & Easy Donation Flow
 */

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { DONATION_TIERS, RECENT_DONORS, PROGRAMS } from '../config/constants';
import { formatCurrencyFull } from '../utils/helpers';

export default function Donate() {
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program');
  const selectedProgram = programId ? PROGRAMS.find(p => p.id === Number(programId)) : null;

  const [selectedAmount, setSelectedAmount] = useState(500000);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    programId: programId || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (programId) {
      setDonorInfo(prev => ({ ...prev, programId }));
    }
  }, [programId]);

  const predefinedAmounts = [100000, 200000, 500000, 1000000, 2000000, 5000000];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setDonorInfo({ name: '', email: '', phone: '', message: '', programId: programId || '' });
      setSelectedAmount(500000);
      setCustomAmount('');
    }, 5000);
  };

  // Emotional stories
  const stories = [
    {
      name: "Em Hoa",
      age: 8,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
      story: "\"Trước đây em không có tiền mua vở. Giờ em có thể đến trường mỗi ngày nhờ sự giúp đỡ của các cô chú.\"",
      impact: "Được học bổng 6 tháng"
    },
    {
      name: "Em Minh",
      age: 10,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
      story: "\"Bố mẹ em mất sớm, em sống với bà. Các cô chú đã giúp em có được bữa ăn đầy đủ mỗi ngày.\"",
      impact: "Nhận hỗ trợ dinh dưỡng 1 năm"
    },
    {
      name: "Em Lan",
      age: 7,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
      story: "\"Em rất vui vì được đến trường. Em muốn trở thành cô giáo để giúp đỡ những em nhỏ khác.\"",
      impact: "Được cấp đồng phục và sách vở"
    }
  ];

  return (
    <>
      <Hero
        title={
          <>
            💝 Hãy Là <span className="text-rose-400">Thiên Thần</span> Của Các Em
          </>
        }
        description="Mỗi đóng góp của bạn đều thắp lên ngọn lửa hy vọng trong trái tim những em nhỏ nghèo khó"
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        overlay="gradient"
        height="md"
      />

      {/* Emotional Stories Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Những Câu Chuyện <span className="text-rose-600">Chạm Đến Trái Tim</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Đằng sau mỗi con số là một câu chuyện, một ước mơ, một tương lai đang chờ được thay đổi
            </p>
          </div>

          {/* Recent Donors - Social Proof */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-icons text-green-500 text-3xl animate-pulse">favorite</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Những Người Đã Chung Tay
                </h3>
                <p className="text-gray-600">Hàng nghìn trái tim đã cùng nhau lan tỏa yêu thương</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              {RECENT_DONORS.slice(0, 12).map((donor, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                    {donor.isAnonymous ? '?' : donor.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 truncate">{donor.name}</div>
                    <div className="text-xs text-gray-600 truncate">{donor.program}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600 text-sm">
                      {donor.amount.toLocaleString('vi-VN')}đ
                    </div>
                    <div className="text-xs text-gray-500">{donor.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-semibold">
                🌟 <span className="text-green-600">+3,247</span> người khác đã ủng hộ tuần này
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stories.map((story, index) => (
              <Card key={index} variant="elevated" padding="lg" hoverable className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-rose-200">
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{story.name}, {story.age} tuổi</h3>
                <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  <span className="material-icons text-xs">check_circle</span>
                  {story.impact}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">{story.story}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-rose-600">
                    ✨ Bạn cũng có thể tạo ra điều kỳ diệu như vậy!
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center bg-rose-50 p-8 rounded-2xl border-2 border-rose-200">
            <div className="text-5xl mb-4">🙏</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Trái Tim Bạn Ở Đâu, Kho Báu Của Bạn Cũng Ở Đó
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Không có đóng góp nào là nhỏ. Mỗi đồng tiền đều mang theo tình yêu thương và hy vọng.
            </p>
          </div>
        </div>
      </Section>

      {/* Emotional Hook */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">💝</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mỗi Đóng Góp Đều Có Ý Nghĩa
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card variant="elevated" padding="md">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-bold text-gray-900 mb-2">100.000 VNĐ</h3>
              <p className="text-sm text-gray-600">= 10 quyển vở cho học sinh nghèo</p>
            </Card>
            <Card variant="elevated" padding="md">
              <div className="text-3xl mb-2">🍚</div>
              <h3 className="font-bold text-gray-900 mb-2">500.000 VNĐ</h3>
              <p className="text-sm text-gray-600">= Bữa ăn dinh dưỡng cho 50 em trong 1 ngày</p>
            </Card>
            <Card variant="elevated" padding="md">
              <div className="text-3xl mb-2">❤️</div>
              <h3 className="font-bold text-gray-900 mb-2">1.000.000 VNĐ</h3>
              <p className="text-sm text-gray-600">= Học bổng 1 tháng cho 1 em học sinh</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Donation Form */}
      <Section background="white" padding="xl">
        <div className={selectedProgram ? "max-w-7xl mx-auto" : "max-w-4xl mx-auto"}>
          {showSuccess ? (
            <Card variant="elevated" padding="lg" className="border-t-4 border-green-500 text-center">
              <div className="text-7xl mb-6 animate-bounce">🎉</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cảm Ơn Bạn Rất Nhiều!
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Khoản đóng góp <span className="font-bold text-green-600">{formatCurrencyFull(selectedAmount)}</span> của bạn đã được ghi nhận.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-rose-50 p-6 rounded-2xl mb-6">
                <p className="text-gray-800 leading-relaxed">
                  💌 Chúng tôi đã gửi email xác nhận đến <strong>{donorInfo.email}</strong><br/>
                  📜 Giấy chứng nhận đóng góp sẽ được gửi trong vòng 24 giờ<br/>
                  📊 Bạn sẽ nhận được báo cáo tác động định kỳ hàng quý
                </p>
              </div>
              <div className="text-6xl mb-4">❤️</div>
              <p className="text-lg text-gray-700 font-semibold">
                Bạn đã thắp sáng hy vọng cho những trái tim nhỏ bé!
              </p>
            </Card>
          ) : (
            <div className={selectedProgram ? "grid lg:grid-cols-3 gap-8" : ""}>
              {/* Program Story Sidebar (when program selected) */}
              {selectedProgram && (
                <div className="lg:col-span-1 space-y-6">
                  <Card variant="elevated" padding="lg" className="sticky top-24">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">💝</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Bạn Đang Ủng Hộ
                      </h3>
                    </div>

                    <img
                      src={selectedProgram.image}
                      alt={selectedProgram.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />

                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      <span className="material-icons text-xs">category</span>
                      <span>{selectedProgram.category}</span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {selectedProgram.title}
                    </h4>

                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      {selectedProgram.description}
                    </p>

                    <div className="space-y-3 pb-4 mb-4 border-b border-gray-200">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Đã quyên góp</span>
                        <span className="font-bold text-green-600">
                          {(selectedProgram.raised / 1000000).toFixed(0)}M
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                          style={{ width: `${selectedProgram.progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>{selectedProgram.progress}%</span>
                        <span>Mục tiêu: {(selectedProgram.target / 1000000).toFixed(0)}M</span>
                      </div>
                    </div>

                    <div className="bg-rose-50 p-4 rounded-xl">
                      <div className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="material-icons text-rose-500 text-lg">favorite</span>
                        <p className="leading-relaxed">
                          <strong className="text-rose-600">{selectedProgram.donors}</strong> người 
                          đã tin tưởng và ủng hộ dự án này. Hãy là người tiếp theo!
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              )}

              {/* Donation Form */}
              <form onSubmit={handleSubmit} className={selectedProgram ? "lg:col-span-2" : ""}>
              <Card variant="elevated" padding="lg" className="border-t-4 border-green-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {selectedProgram ? `Ủng Hộ "${selectedProgram.title}"` : 'Chọn Số Tiền Ủng Hộ'}
                </h2>

            {/* Frequency */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Tần suất đóng góp
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFrequency('once')}
                  className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                    frequency === 'once'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="material-icons mb-1">payment</span>
                  <div>Một lần</div>
                </button>
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                    frequency === 'monthly'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="material-icons mb-1">autorenew</span>
                  <div>Hàng tháng</div>
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Chọn số tiền
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl border-2 font-bold transition-all ${
                      selectedAmount === amount && !customAmount
                        ? 'border-green-500 bg-green-50 text-green-700 scale-105 shadow-lg'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {formatCurrencyFull(amount)}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <input
                  type="number"
                  placeholder="Hoặc nhập số tiền tùy chỉnh"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    if (e.target.value) {
                      setSelectedAmount(parseInt(e.target.value) || 0);
                    }
                  }}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">VNĐ</span>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-green-50 to-rose-50 p-6 rounded-xl mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Số tiền đóng góp:</span>
                <span className="text-2xl font-bold text-green-600">
                  {formatCurrencyFull(selectedAmount || 0)}
                </span>
              </div>
              {frequency === 'monthly' && (
                <p className="text-sm text-gray-600">Hàng tháng</p>
              )}
            </div>

            {/* Donor Info */}
            <div className="space-y-4 mb-8">
              <div className="bg-rose-50 p-4 rounded-xl mb-4">
                <p className="text-rose-900 font-semibold text-sm flex items-center gap-2">
                  <span className="material-icons text-lg">info</span>
                  Thông tin của bạn giúp chúng tôi gửi lời cảm ơn và cập nhật về tác động của khoản đóng góp
                </p>
              </div>

              <h3 className="font-bold text-gray-900 mb-4 text-lg">Thông tin người ủng hộ</h3>
              
              <input
                type="text"
                placeholder="Họ và tên *"
                value={donorInfo.name}
                onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                value={donorInfo.email}
                onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all"
                required
              />
              <input
                type="tel"
                placeholder="Số điện thoại *"
                value={donorInfo.phone}
                onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-all"
                required
              />
              <textarea
                placeholder="Lời nhắn của bạn (tùy chọn) - Hãy chia sẻ lý do bạn muốn giúp đỡ..."
                value={donorInfo.message}
                onChange={(e) => setDonorInfo({...donorInfo, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none resize-none transition-all"
              />
            </div>

            {/* Thank You Message Preview */}
            <div className="bg-gradient-to-br from-green-50 via-rose-50 to-orange-50 p-6 rounded-2xl mb-8 border-2 border-green-200">
              <div className="text-center">
                <div className="text-5xl mb-3">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Cảm Ơn Bạn Đã Là Người Hùng Của Các Em!
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sau khi hoàn tất, chúng tôi sẽ gửi email xác nhận và giấy chứng nhận đóng góp. 
                  Bạn cũng sẽ nhận được cập nhật định kỳ về cách khoản đóng góp của bạn đang thay đổi cuộc sống các em.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              variant="primary"
              size="lg"
              type="submit"
              isLoading={isSubmitting}
              disabled={!donorInfo.name || !donorInfo.email || !donorInfo.phone}
              className="w-full shadow-2xl shadow-green-500/30 font-bold"
              leftIcon="favorite"
            >
              {isSubmitting ? 'Đang xử lý...' : `💝 Hoàn Tất Đóng Góp ${formatCurrencyFull(selectedAmount || 0)}`}
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              🔒 Thông tin của bạn được bảo mật tuyệt đối
            </p>
              </Card>
            </form>
            </div>
          )}
        </div>
      </Section>

      {/* Gratitude Section */}
      <Section background="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">🙏</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Từ Đáy Lòng, <span className="text-rose-600">Xin Cảm Ơn!</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Mỗi đóng góp của bạn không chỉ là tiền bạc, mà là tình yêu thương, là niềm tin, 
            là hy vọng cho những trái tim nhỏ bé. Bạn đang tạo nên những kỳ tích mỗi ngày.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-3">💌</div>
              <h3 className="font-bold text-gray-900 mb-2">Email Cảm Ơn</h3>
              <p className="text-sm text-gray-600">Gửi ngay sau khi đóng góp</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-3">📜</div>
              <h3 className="font-bold text-gray-900 mb-2">Giấy Chứng Nhận</h3>
              <p className="text-sm text-gray-600">Chứng nhận đóng góp chính thức</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Báo Cáo Tác Động</h3>
              <p className="text-sm text-gray-600">Cập nhật định kỳ hàng quý</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Donation Tiers */}
      <Section background="gray" padding="lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Các Mức Đóng Góp
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DONATION_TIERS.map((tier) => (
              <Card
                key={tier.title}
                variant={'popular' in tier && tier.popular ? 'elevated' : 'default'}
                padding="lg"
                hoverable
                className={`text-center relative ${'popular' in tier && tier.popular ? 'ring-2 ring-green-500 scale-105' : ''}`}
              >
                {'popular' in tier && tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Phổ biến nhất
                  </div>
                )}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  tier.color === 'primary' ? 'bg-green-100' :
                  tier.color === 'secondary' ? 'bg-rose-100' :
                  tier.color === 'accent' ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  <span className={`material-icons text-2xl ${
                    tier.color === 'primary' ? 'text-green-600' :
                    tier.color === 'secondary' ? 'text-rose-600' :
                    tier.color === 'accent' ? 'text-orange-600' : 'text-gray-600'
                  }`}>
                    {tier.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                {tier.amount > 0 && (
                  <p className="text-2xl font-bold text-green-600 mb-4">
                    {formatCurrencyFull(tier.amount)}
                  </p>
                )}
                <ul className="space-y-2 text-sm text-gray-600 text-left">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="material-icons text-sm text-green-500 mt-0.5">check_circle</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Bank Transfer Info */}
      <Section background="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <Card variant="bordered" padding="lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Thông Tin Chuyển Khoản
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Ngân hàng Vietcombank</h4>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Số tài khoản:</strong> 1234567890</p>
                  <p><strong>Chủ tài khoản:</strong> Quỹ Bông Hồng Nhỏ</p>
                  <p><strong>Chi nhánh:</strong> Hà Nội</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Nội dung chuyển khoản</h4>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-green-600 font-mono">UH [Họ tên] [Số điện thoại]</code>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Ví dụ: UH Nguyen Van A 0912345678
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
