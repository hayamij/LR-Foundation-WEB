/**
 * Home Page
 * Emotion-driven storytelling design
 * Flow: Hero → Impact → Story → Programs → Stats → News → CTA
 */

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ImpactCard, ProgramCard, StatItem, NewsCard, DonorTicker, TopDonors, DonorTestimonials } from '../components/features';
import { SITE_CONFIG, IMPACT_AREAS, PROGRAMS, NEWS } from '../config/constants';

export default function Home() {
  const featuredPrograms = PROGRAMS.filter(p => p.urgent || p.progress >= 80).slice(0, 3);
  const latestNews = NEWS.slice(0, 3);

  return (
    <>
      {/* Hero Section - Emotional Hook */}
      <Hero
        title={
          <>
            Mang Nụ Cười Đến Cho <br />
            <span className="text-green-400">Trẻ Em Vùng Cao</span>
          </>
        }
        subtitle="🌟 Chương Trình Nổi Bật"
        description="Chúng tôi cam kết hỗ trợ giáo dục và y tế để mọi trẻ em đều có cơ hội phát triển toàn diện, bất kể hoàn cảnh xuất thân."
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAQxA8FNzaSwZkYh10Iy3VnOG3rIkb3ekdWfT5Akyvcg28V_TidiTTrQLtn29NaUbSDSeVx229pEvIScGSdajSa-QWvtX9Ty8t0IxTI10v8o6abB_Ecjrs0p1f0t1ZjvTeSOh6LsxiDlyskHOWuZ9PVYpTJnGw0EkkhYs9aSFCEU5DdMBS50NBLgoNnOp1N1ksVgtGWcP8-GCtdEiKvVGtXWuOa2btefWzE7yuXCmkb1j5_T5v0g6JUyH70-8X_KoizybhmUZ8ov1I"
        overlay="gradient"
        height="xl"
        actions={
          <>
            <Button
              variant="primary"
              size="lg"
              href="/about"
              rightIcon="arrow_forward"
              className="shadow-2xl"
            >
              Tìm Hiểu Thêm
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/donate"
              leftIcon="volunteer_activism"
              className="shadow-2xl shadow-rose-500/30"
            >
              Ủng Hộ Dự Án
            </Button>
          </>
        }
      />

      {/* Impact Areas - Visual Impact */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4 font-semibold">
            <span className="material-icons">volunteer_activism</span>
            <span>Lĩnh Vực Hoạt Động</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chúng Tôi Tạo Ra <span className="text-green-600">Tác Động</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ba trụ cột chính giúp chúng tôi mang lại những thay đổi tích cực và bền vững cho cộng đồng
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {IMPACT_AREAS.map((impact) => (
            <ImpactCard key={impact.id} impact={impact} />
          ))}
        </div>
      </Section>

      {/* Story Section - Building Trust */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-6 font-semibold">
              <span className="material-icons">info</span>
              <span>Về Chúng Tôi</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Kết Nối Yêu Thương, <br />
              <span className="text-green-600">Lan Tỏa Nhân Ái</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
              <p>
                <strong>Quỹ Bông Hồng Nhỏ</strong> là tổ chức phi lợi nhuận được thành lập với sứ mệnh 
                mang lại cuộc sống tốt đẹp hơn cho trẻ em nghèo vùng cao. Chúng tôi tin rằng mỗi sự 
                đóng góp nhỏ đều có thể tạo nên những thay đổi lớn lao.
              </p>
              <p>
                Với phương châm <strong className="text-green-600">"{SITE_CONFIG.mission}"</strong>, 
                chúng tôi tập trung vào các dự án phát triển bền vững, giúp cộng đồng yếu thế tự vươn lên.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                <div className="text-4xl font-extrabold text-green-600 mb-1">
                  {SITE_CONFIG.stats.yearsActive}+
                </div>
                <div className="text-sm text-gray-700 font-medium">Năm hoạt động</div>
              </div>
              <div className="p-6 bg-rose-50 rounded-2xl border-l-4 border-rose-500">
                <div className="text-4xl font-extrabold text-rose-600 mb-1">
                  {SITE_CONFIG.stats.childrenHelped / 1000}K+
                </div>
                <div className="text-sm text-gray-700 font-medium">Trẻ em được hỗ trợ</div>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              href="/about"
              rightIcon="arrow_forward"
            >
              Xem Chi Tiết
            </Button>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGrd_kSrdakYaUpP_lcnQFab6YpC7UnfLb0JR--FtwqKwDjhsfRs-GOIYwSHNjg71Qh8S1ed1ptZw4QqMN5qNn857DQKNkL5WofLIb5z07TP2eZXAt7NYqcV4Zond6SGQzr1Az8bIQ8PM3UFlFuOhd1-kMeB4n5WY0uizwICH_zueAUGj_EnS2dvqE9wEtTx5vfkVvjz5PindcukzUTkC69robvfRPx-r0vC5LUYFak5CdCQla00HwRUFUYxJ_SHXINcw40XYb_Zg"
                  alt="Trẻ em vùng cao"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600"
                  alt="Hoạt động từ thiện"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600"
                  alt="Trường học"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600"
                  alt="Học sinh"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border-t-4 border-green-500 hidden lg:block">
              <div className="text-sm text-gray-600 mb-1">Tổng đóng góp</div>
              <div className="text-3xl font-bold text-green-600">{SITE_CONFIG.stats.totalDonations}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Programs - Urgent & High Priority */}
      <Section background="gradient" padding="xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-4 font-semibold">
            <span className="material-icons">campaign</span>
            <span>Dự Án Nổi Bật</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Các Dự Án Đang <span className="text-rose-600">Cần Bạn</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những chương trình đang cần sự chung tay của bạn để mang lại cuộc sống tốt đẹp hơn
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {featuredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} featured={program.urgent} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            href="/programs"
            rightIcon="arrow_forward"
          >
            Xem Tất Cả Dự Án
          </Button>
        </div>
      </Section>

      {/* Stats Counter - Achievement Showcase */}
      <Section background="primary" padding="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Những Con Số <span className="text-green-600">Ấn Tượng</span>
          </h2>
          <p className="text-xl text-gray-700">
            Thành tựu chúng tôi đạt được nhờ sự ủng hộ của cộng đồng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatItem
            number={SITE_CONFIG.stats.yearsActive}
            label="Năm Hoạt Động"
            suffix="+"
            icon="schedule"
            color="primary"
          />
          <StatItem
            number={SITE_CONFIG.stats.childrenHelped}
            label="Trẻ Em Được Hỗ Trợ"
            suffix="+"
            icon="child_care"
            color="secondary"
          />
          <StatItem
            number={SITE_CONFIG.stats.projects}
            label="Dự Án Hoàn Thành"
            suffix="+"
            icon="task_alt"
            color="accent"
          />
          <StatItem
            number={SITE_CONFIG.stats.volunteers}
            label="Tình Nguyện Viên"
            suffix="+"
            icon="groups"
            color="primary"
          />
        </div>
      </Section>

      {/* Live Donor Ticker */}
      <DonorTicker />

      {/* Top Donors Wall */}
      <TopDonors />

      {/* Donor Testimonials */}
      <DonorTestimonials />

      {/* Latest News - WITH URGENCY */}
      <Section background="white" padding="lg">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full mb-4 font-bold animate-pulse">
            <span className="material-icons">emergency</span>
            <span>TIN TỨC KHẨN CẤP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Họ Đang <span className="text-rose-600">Cần Bạn Ngay!</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-semibold">
            💔 Mỗi phút trôi qua là một cơ hội để thay đổi cuộc đời của họ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {latestNews.map((article, index) => (
            <NewsCard 
              key={article.id} 
              article={article} 
              isUrgent={index === 0}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            href="/donate"
            rightIcon="favorite"
            className="shadow-xl shadow-rose-500/30 animate-pulse-slow"
          >
            🚨 Ủng Hộ Ngay - Mỗi Giây Đều Quý Giá!
          </Button>
        </div>
      </Section>

      {/* Final CTA - Emotional Appeal */}
      <Section background="gradient" padding="xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl">❤️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hãy Là Người <span className="text-rose-600">Thay Đổi</span> Cuộc Đời Các Em
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Mỗi đóng góp của bạn, dù nhỏ, đều có thể mang lại nụ cười và hy vọng cho những trẻ em 
            nghèo. Hãy cùng chúng tôi tạo nên điều kỳ diệu hôm nay!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="xl"
              href="/donate"
              leftIcon="volunteer_activism"
              className="shadow-2xl shadow-rose-500/30"
            >
              Ủng Hộ Ngay
            </Button>
            <Button
              variant="primary"
              size="xl"
              href="/contact"
              leftIcon="mail"
            >
              Trở Thành Đối Tác
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
