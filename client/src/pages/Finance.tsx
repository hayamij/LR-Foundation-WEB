/**
 * Finance Page - Transparency & Accountability
 */

import Hero from '../components/ui/Hero';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';


export default function Finance() {
  const financialData = {
    year: 2024,
    totalIncome: 25000000000,
    totalExpense: 23500000000,
    currentBalance: 1500000000,
  };

  const incomeBreakdown = [
    { category: 'Quyên góp cá nhân', amount: 15000000000, percentage: 60 },
    { category: 'Tài trợ doanh nghiệp', amount: 7500000000, percentage: 30 },
    { category: 'Hoạt động gây quỹ', amount: 2500000000, percentage: 10 },
  ];

  const expenseBreakdown = [
    { category: 'Giáo dục', amount: 12000000000, percentage: 51 },
    { category: 'Y tế', amount: 8000000000, percentage: 34 },
    { category: 'Bác ái xã hội', amount: 3000000000, percentage: 13 },
    { category: 'Vận hành', amount: 500000000, percentage: 2 },
  ];

  return (
    <>
      <Hero
        title="Báo Cáo Tài Chính"
        description="Minh bạch - Trách nhiệm - Tin cậy"
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200"
        overlay="dark"
        height="md"
      />

      {/* Overview */}
      <Section background="gradient" padding="lg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tổng Quan Tài Chính Năm {financialData.year}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="elevated" padding="lg" className="text-center">
              <div className="text-green-600 font-bold text-sm mb-2">TỔNG THU</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {(financialData.totalIncome / 1000000000).toFixed(1)}B
              </div>
              <div className="text-gray-600 text-sm">VNĐ</div>
            </Card>

            <Card variant="elevated" padding="lg" className="text-center">
              <div className="text-rose-600 font-bold text-sm mb-2">TỔNG CHI</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {(financialData.totalExpense / 1000000000).toFixed(1)}B
              </div>
              <div className="text-gray-600 text-sm">VNĐ</div>
            </Card>

            <Card variant="elevated" padding="lg" className="text-center">
              <div className="text-blue-600 font-bold text-sm mb-2">SỐ DƯ</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {(financialData.currentBalance / 1000000000).toFixed(1)}B
              </div>
              <div className="text-gray-600 text-sm">VNĐ</div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Income & Expense */}
      <Section background="white" padding="xl">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Income */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nguồn Thu</h3>
            <Card variant="bordered" padding="lg">
              <div className="space-y-4">
                {incomeBreakdown.map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{item.category}</span>
                      <span className="text-green-600 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-green-500 h-full rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {(item.amount / 1000000000).toFixed(1)} tỷ VNĐ
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Expense */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Chi Tiêu</h3>
            <Card variant="bordered" padding="lg">
              <div className="space-y-4">
                {expenseBreakdown.map((item) => (
                  <div key={item.category}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{item.category}</span>
                      <span className="text-rose-600 font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-rose-500 h-full rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {(item.amount / 1000000000).toFixed(1)} tỷ VNĐ
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Commitment */}
      <Section background="primary" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Cam Kết Minh Bạch
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            100% đóng góp của bạn được sử dụng đúng mục đích và công khai minh bạch. 
            Chúng tôi báo cáo chi tiết hàng quý và hàng năm.
          </p>
          <div className="flex items-center justify-center gap-2 text-green-600 font-bold">
            <span className="material-icons">verified</span>
            <span>Kiểm toán bởi đơn vị độc lập</span>
          </div>
        </div>
      </Section>
    </>
  );
}
