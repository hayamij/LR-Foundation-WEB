/**
 * About Page - Trust Building & Transparency
 */

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CORE_VALUES, TIMELINE } from '../config/constants';

export default function About() {
  return (
    <>
      <Hero
        title="Về Chúng Tôi"
        description="Hành trình lan tỏa yêu thương và ươm mầm hy vọng cho tương lai trẻ thơ Việt Nam"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuA1e4iStQ2AlSYMN5svhjKenHBYOKxZwMXwMiJGGqIlN_d2iTZ4BQ319qLzWNAWWtW7eyjgnGs4BDE7FACSUjQREz_cXje8WxK3FcIE8_3gFs4rE5G18RyCi3IkdlzPkqSFvEUvZbvHs1yxSdQts4QL5hO8o-mbQNTSnwaU01YoojGeOn7WT2yHlujXO92Nv6XnSYJwzMwJRrjz3aryWVNO9CEtHf_zOmUkEznpQcUhY71gwPI6-GmsTHBtvGX_3-QT4vRJ-AkWQfk"
        overlay="dark"
        height="md"
      />

      {/* Mission & Vision */}
      <Section background="white" padding="xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sứ Mệnh & Tầm Nhìn
            </h2>
            <p className="text-xl text-gray-600">
              Chúng tôi làm việc với trái tim và niềm tin vào một tương lai tốt đẹp hơn
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card variant="elevated" padding="lg" className="border-l-4 border-green-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                  <span className="material-icons text-3xl text-green-600">volunteer_activism</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Sứ Mệnh</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Cung cấp hỗ trợ thiết thực về giáo dục, y tế và dinh dưỡng cho trẻ em có hoàn cảnh khó khăn. 
                Chúng tôi là cầu nối giữa những tấm lòng hảo tâm và những mầm non đang cần sự che chở.
              </p>
            </Card>

            <Card variant="elevated" padding="lg" className="border-l-4 border-rose-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center">
                  <span className="material-icons text-3xl text-rose-600">visibility</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Tầm Nhìn</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Trở thành tổ chức từ thiện uy tín hàng đầu, nơi mọi trẻ em Việt Nam đều được tiếp cận 
                giáo dục bình đẳng và lớn lên trong tình yêu thương của cộng đồng.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Giá Trị Cốt Lõi</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CORE_VALUES.map((value) => (
            <Card key={value.id} variant="default" padding="lg" hoverable className="text-center h-full">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${value.bgColor}`}>
                <span className={`material-icons text-3xl ${value.color}`}>{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white" padding="xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Lịch Sử Hình Thành
          </h2>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200" />

            {TIMELINE.map((event, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  {/* Year Badge */}
                  <div className="relative z-10 flex-shrink-0 md:w-1/2 md:text-right">
                    <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-bold text-lg shadow-lg">
                      {event.year}
                    </span>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2" />

                  {/* Content */}
                  <div className="md:w-1/2 ml-16 md:ml-0">
                    <Card variant="elevated" padding="md" hoverable>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Cùng Chúng Tôi Tạo Nên <span className="text-green-600">Sự Khác Biệt</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Mỗi bước đi của bạn đều có ý nghĩa. Hãy tham gia cùng chúng tôi ngay hôm nay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" href="/donate" leftIcon="volunteer_activism">
              Đóng Góp Ngay
            </Button>
            <Button variant="primary" size="lg" href="/contact" leftIcon="mail">
              Liên Hệ Với Chúng Tôi
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
