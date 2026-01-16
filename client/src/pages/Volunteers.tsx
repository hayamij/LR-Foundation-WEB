/**
 * Volunteers Page - Danh sách tình nguyện viên
 */

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { VOLUNTEERS } from '../config/constants';

export default function Volunteers() {
  return (
    <>
      <Hero
        title={
          <>
            Đội Ngũ <span className="text-green-400">Tình Nguyện Viên</span>
          </>
        }
        description="Những con người tuyệt vời đã dành thời gian và tâm huyết để mang yêu thương đến cộng đồng"
        image="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200"
        overlay="gradient"
        height="md"
      />

      {/* Stats Section */}
      <Section background="primary" padding="lg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">{VOLUNTEERS.length}+</div>
              <div className="text-gray-700 font-semibold">Tình nguyện viên</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {VOLUNTEERS.reduce((sum, v) => sum + v.hours, 0).toLocaleString()}
              </div>
              <div className="text-gray-700 font-semibold">Giờ cống hiến</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-700 font-semibold">Dự án tham gia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Tận tâm & yêu thương</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Volunteers List */}
      <Section background="white" padding="xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gặp Gỡ Đội Ngũ Của Chúng Tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những người hùng thầm lặng đằng sau mỗi hoạt động từ thiện
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {VOLUNTEERS.map((volunteer) => (
              <Card
                key={volunteer.id}
                variant="elevated"
                padding="lg"
                hoverable
                className="text-center group"
              >
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={volunteer.avatar}
                    alt={volunteer.name}
                    className="w-full h-full rounded-full object-cover ring-4 ring-green-100 group-hover:ring-green-300 transition-all"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    <span className="material-icons text-lg">volunteer_activism</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{volunteer.name}</h3>
                <p className="text-sm text-green-600 font-semibold mb-3">{volunteer.role}</p>
                
                <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-4">
                  <span className="material-icons text-xs">location_on</span>
                  <span>{volunteer.location}</span>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {volunteer.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{volunteer.hours}</div>
                    <div className="text-xs text-gray-600">Giờ tình nguyện</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{volunteer.programs.length}</div>
                    <div className="text-xs text-gray-600">Dự án</div>
                  </div>
                </div>

                {/* Join Date */}
                <div className="mt-4 text-xs text-gray-500">
                  Tham gia từ {new Date(volunteer.joined).toLocaleDateString('vi-VN')}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="gradient" padding="xl">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl mb-6">🙌</div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hãy Tham Gia Cùng Chúng Tôi!
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Trở thành tình nguyện viên và góp phần tạo nên những thay đổi tích cực cho cộng đồng. 
              Mỗi người đều có thể tạo ra sự khác biệt!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card variant="elevated" padding="md">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="font-bold text-gray-900 mb-2">Đóng Góp Sức Lực</h3>
                <p className="text-sm text-gray-600">Tham gia các hoạt động thực địa</p>
              </Card>
              <Card variant="elevated" padding="md">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="font-bold text-gray-900 mb-2">Chia Sẻ Kiến Thức</h3>
                <p className="text-sm text-gray-600">Dạy học, tư vấn chuyên môn</p>
              </Card>
              <Card variant="elevated" padding="md">
                <div className="text-3xl mb-3">❤️</div>
                <h3 className="font-bold text-gray-900 mb-2">Lan Tỏa Yêu Thương</h3>
                <p className="text-sm text-gray-600">Truyền cảm hứng cho cộng đồng</p>
              </Card>
            </div>

            <Button
              variant="primary"
              size="xl"
              href="/contact"
              leftIcon="mail"
              className="shadow-2xl"
            >
              Đăng Ký Tình Nguyện Viên
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
