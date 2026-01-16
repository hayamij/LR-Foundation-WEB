import { TOP_DONORS } from '../../config/constants';

const BADGE_CONFIG = {
  platinum: { color: 'from-gray-300 to-gray-500', icon: 'workspace_premium', label: 'Bạch Kim' },
  gold: { color: 'from-yellow-300 to-yellow-600', icon: 'stars', label: 'Vàng' },
  silver: { color: 'from-gray-200 to-gray-400', icon: 'star', label: 'Bạc' },
  bronze: { color: 'from-orange-300 to-orange-600', icon: 'grade', label: 'Đồng' },
} as const;

export default function TopDonors() {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mb-4">
            Nhà Hảo Tâm Tiêu Biểu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tri ân những tấm lòng vàng đã đồng hành cùng chúng tôi trong hành trình lan tỏa yêu thương
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TOP_DONORS.map((donor, index) => {
            const badge = BADGE_CONFIG[donor.badge as keyof typeof BADGE_CONFIG];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                {/* Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}
                  >
                    <span className="material-icons text-white">{badge.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{donor.name}</div>
                    <div className="text-sm text-gray-500">{badge.label} • {donor.totalDonations} lần ủng hộ</div>
                  </div>
                </div>

                {/* Amount */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-4">
                  <div className="text-sm text-gray-600 mb-1">Tổng đóng góp</div>
                  <div className="text-2xl font-bold text-green-600">
                    {donor.amount.toLocaleString('vi-VN')}đ
                  </div>
                </div>

                {/* Message */}
                <div className="flex items-start gap-2 text-gray-600 italic">
                  <span className="material-icons text-sm text-green-500 mt-0.5">format_quote</span>
                  <p className="text-sm leading-relaxed">{donor.message}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Bạn cũng có thể trở thành một phần của cộng đồng yêu thương</p>
          <a
            href="/donate"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>Đóng Góp Ngay</span>
            <span className="material-icons">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
