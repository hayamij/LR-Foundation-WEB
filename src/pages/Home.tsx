/**
 * Home Page
 * Emotion-driven storytelling design
 * Flow: Hero → Impact → Story → Programs → Stats → News → CTA
 */

import { useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ImpactCard, ProgramCard, StatItem, NewsCard, /*DonorTicker,*/ TopDonors, DonorTestimonials } from '../components/features';
import { SITE_CONFIG, IMPACT_AREAS, PROGRAMS, NEWS } from '../config/constants';

export default function Home() {
  const featuredPrograms = PROGRAMS.filter(p => p.urgent || p.progress >= 80).slice(0, 3);
  const latestNews = NEWS.slice(0, 3);

  // Auto-sliding images for Story section
  const storyImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
  ];

  // Auto-sliding images for Hero section
  const heroImages = [
    '/images/9.jpg',
    '/images/5.jpg',
    // '/images/6.jpg',
    // '/images/7.jpg',
    // '/images/8.jpg',
    // '/images/10.jpg',
    // '/images/11.jpg',
    // '/images/12.jpg',
    // '/images/13.jpg',
    '/images/14.jpg',
  ];

  const [currentStoryImageIndex, setCurrentStoryImageIndex] = useState(0);
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  useEffect(() => {
    const storyInterval = setInterval(() => {
      setCurrentStoryImageIndex((prev) => (prev + 1) % storyImages.length);
    }, 5000);

    const heroInterval = setInterval(() => {
      setCurrentHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(storyInterval);
      clearInterval(heroInterval);
    };
  }, [storyImages.length, heroImages.length]);

  return (
    <>
      {/* Hero Section - Emotional Hook with Slideshow */}
      <section className="relative w-full overflow-hidden h-[700px]">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <div className="max-w-3xl">
              {/* Subtitle */}
              <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-white px-4 py-2 rounded-full mb-6 font-semibold">
                <span>🌟 Chương Trình Nổi Bật</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Mang Nụ Cười Đến Cho <br />
                <span className="text-green-400">Trẻ Em Vùng Cao</span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Chúng tôi cam kết hỗ trợ giáo dục và y tế để mọi trẻ em đều có cơ hội phát triển toàn diện, bất kể hoàn cảnh xuất thân.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
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
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImageIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentHeroImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Chuyển đến slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentHeroImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all z-10"
          aria-label="Slide trước"
        >
          <span className="material-icons text-white text-2xl">chevron_left</span>
        </button>
        <button
          onClick={() => setCurrentHeroImageIndex((prev) => (prev + 1) % heroImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all z-10"
          aria-label="Slide tiếp theo"
        >
          <span className="material-icons text-white text-2xl">chevron_right</span>
        </button>
      </section>

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
          {IMPACT_AREAS.map((area) => (
            <ImpactCard key={area.id} impact={area} />
          ))}
        </div>
      </Section>

      {/* Story Section - Emotional Connection */}
      <Section background="white" padding="xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              <span className="material-icons">favorite</span>
              <span>Câu Chuyện Của Chúng Tôi</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Mỗi Đóng Góp Là Một <span className="text-green-600">Nụ Cười</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Little Roses Foundation (LRF) được thành lập với mục tiêu mang lại hy vọng và 
              cơ hội cho những trẻ em nghèo ở vùng cao. Chúng tôi tin rằng mỗi đứa trẻ đều 
              xứng đáng có một tương lai tươi sáng.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                <div className="text-4xl font-bold text-green-600 mb-2">{SITE_CONFIG.stats.childrenHelped}+</div>
                <div className="text-sm text-gray-700 font-medium">Trẻ em được hỗ trợ</div>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl border border-rose-100">
                <div className="text-4xl font-bold text-rose-600 mb-2">{SITE_CONFIG.stats.projects}+</div>
                <div className="text-sm text-gray-700 font-medium">Dự án hoàn thành</div>
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

          {/* Image Slideshow */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
              {storyImages.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentStoryImageIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Hoạt động từ thiện ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {storyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStoryImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentStoryImageIndex
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Chuyển đến ảnh ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentStoryImageIndex((prev) => (prev - 1 + storyImages.length) % storyImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all shadow-lg z-10"
                aria-label="Ảnh trước"
              >
                <span className="material-icons text-gray-800">chevron_left</span>
              </button>
              <button
                onClick={() => setCurrentStoryImageIndex((prev) => (prev + 1) % storyImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all shadow-lg z-10"
                aria-label="Ảnh tiếp theo"
              >
                <span className="material-icons text-gray-800">chevron_right</span>
              </button>
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
      {/* <DonorTicker /> */}

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
