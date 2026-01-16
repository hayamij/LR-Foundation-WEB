/**
 * Program Detail Page - Chi tiết dự án
 */

import { useParams, Link } from 'react-router';
import { PROGRAMS, PROGRAM_UPDATES } from '../config/constants';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function ProgramDetail() {
  const { id } = useParams();
  const program = PROGRAMS.find(p => p.id === Number(id));
  const updates = PROGRAM_UPDATES.filter(u => u.programId === Number(id));

  if (!program) {
    return (
      <Section background="white" padding="xl">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Không tìm thấy dự án</h1>
          <Button variant="primary" href="/programs">
            Quay lại danh sách
          </Button>
        </div>
      </Section>
    );
  }

  const progressPercent = (program.raised / program.target) * 100;
  const daysLeft = Math.ceil((new Date('2024-12-31').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/90 text-white px-4 py-2 rounded-full mb-4 font-semibold backdrop-blur">
              <span className="material-icons text-sm">category</span>
              <span>{program.category}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Playfair_Display']">
              {program.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              {program.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Section background="white" padding="xl">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Progress Stats */}
              <Card variant="elevated" padding="lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tiến Độ Dự Án</h2>
                
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">Đã quyên góp</span>
                      <span className="text-sm font-bold text-green-600">{program.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">
                        {(program.raised / 1000000).toFixed(0)}M
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Đã quyên góp</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">
                        {(program.target / 1000000).toFixed(0)}M
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Mục tiêu</div>
                    </div>
                    <div className="text-center p-4 bg-rose-50 rounded-xl">
                      <div className="text-2xl font-bold text-rose-600">
                        {program.donors}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Nhà hảo tâm</div>
                    </div>
                  </div>

                  {/* Time Left */}
                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-500">
                    <span className="material-icons text-orange-600">schedule</span>
                    <div>
                      <div className="font-bold text-gray-900">Còn {daysLeft} ngày</div>
                      <div className="text-sm text-gray-600">để hoàn thành dự án</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Impact & Goals */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tác Động & Mục Tiêu</h2>
                <Card variant="bordered" padding="lg">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-start gap-3">
                        <span className="material-icons text-green-600 text-3xl">emoji_events</span>
                        <div>
                          <div className="font-bold text-lg text-gray-900 mb-2">Kết Quả Mong Đợi</div>
                          <p className="text-gray-700">{program.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Updates Timeline */}
              {updates.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Cập Nhật Tiến Độ</h2>
                  <div className="space-y-6">
                    {updates.map((update, index) => (
                      <Card key={index} variant="elevated" padding="lg" hoverable>
                        <div className="flex gap-6">
                          <img
                            src={update.image}
                            alt={update.title}
                            className="w-32 h-32 object-cover rounded-xl flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                update.type === 'success' ? 'bg-green-100 text-green-700' :
                                update.type === 'milestone' ? 'bg-blue-100 text-blue-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {update.type === 'success' ? '✅ Thành công' :
                                 update.type === 'milestone' ? '🎯 Cột mốc' : '📢 Cập nhật'}
                              </span>
                              <span className="text-sm text-gray-500">
                                {new Date(update.date).toLocaleDateString('vi-VN')}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{update.title}</h3>
                            <p className="text-gray-700 leading-relaxed">{update.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Donate Card */}
              <Card variant="elevated" padding="lg" className="sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Hãy Chung Tay
                  </h3>
                  <p className="text-gray-600">
                    Mỗi đóng góp đều ý nghĩa
                  </p>
                </div>

                <Link
                  to={`/donate?program=${program.id}`}
                  className="block w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-center py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span className="material-icons">volunteer_activism</span>
                    Ủng Hộ Dự Án Này
                  </span>
                </Link>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-sm">check_circle</span>
                    <span>Minh bạch 100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-sm">check_circle</span>
                    <span>Chứng nhận điện tử</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-sm">check_circle</span>
                    <span>Cập nhật tiến độ</span>
                  </div>
                </div>
              </Card>

              {/* Share Card */}
              <Card variant="bordered" padding="md">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Chia Sẻ Dự Án</h4>
                <div className="flex gap-3 justify-center">
                  <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <span className="material-icons text-sm">facebook</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                    <span className="material-icons text-sm">share</span>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors">
                    <span className="material-icons text-sm">link</span>
                  </button>
                </div>
              </Card>

              {/* Back Button */}
              <Link
                to="/programs"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="material-icons">arrow_back</span>
                <span>Quay lại danh sách</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
