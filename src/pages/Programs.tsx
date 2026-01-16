/**
 * Programs Page - Full Program Listing with Impact Showcase
 */

import { useState } from 'react';
import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { ProgramCard } from '../components/features';
import { PROGRAMS } from '../config/constants';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Tất cả', icon: 'apps' },
    { id: 'education', label: 'Giáo dục', icon: 'school' },
    { id: 'healthcare', label: 'Y tế', icon: 'medical_services' },
    { id: 'social', label: 'Bác ái', icon: 'people' },
  ];

  const filteredPrograms = PROGRAMS.filter((program) => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const urgentPrograms = filteredPrograms.filter(p => p.urgent);
  const regularPrograms = filteredPrograms.filter(p => !p.urgent);

  return (
    <>
      <Hero
        title="Các Dự Án Của Chúng Tôi"
        description="Những hoạt động ý nghĩa đang cần sự chung tay của bạn để mang lại cuộc sống tốt đẹp hơn"
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        overlay="dark"
        height="md"
      />

      {/* Filters */}
      <Section background="white" padding="md" className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                search
              </span>
              <input
                type="text"
                placeholder="Tìm kiếm dự án..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="material-icons text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Results Summary */}
      <Section background="gray" padding="sm">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600">
            Tìm thấy <strong className="text-green-600">{filteredPrograms.length}</strong> dự án
            {selectedCategory !== 'all' && ` trong lĩnh vực ${categories.find(c => c.id === selectedCategory)?.label}`}
          </p>
        </div>
      </Section>

      {/* Urgent Programs */}
      {urgentPrograms.length > 0 && (
        <Section background="gradient" padding="lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold">
                <span className="material-icons animate-pulse">local_fire_department</span>
                <span>Dự Án Khẩn Cấp</span>
              </div>
              <p className="text-gray-600">Các dự án cần sự hỗ trợ gấp</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {urgentPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} featured />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Regular Programs */}
      <Section background="white" padding="lg">
        <div className="max-w-7xl mx-auto">
          {regularPrograms.length > 0 ? (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Các Dự Án Đang Hoạt Động
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <span className="material-icons text-6xl text-gray-300 mb-4">search_off</span>
              <p className="text-xl text-gray-500">Không tìm thấy dự án phù hợp</p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bạn Muốn Hỗ Trợ Dự Án Nào?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Mọi đóng góp của bạn đều tạo nên sự khác biệt lớn lao trong cuộc sống của các em
          </p>
          <Button variant="secondary" size="xl" href="/donate" leftIcon="volunteer_activism">
            Ủng Hộ Ngay
          </Button>
        </div>
      </Section>
    </>
  );
}
