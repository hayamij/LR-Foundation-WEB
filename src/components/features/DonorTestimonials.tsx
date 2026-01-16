import { DONOR_TESTIMONIALS } from '../../config/constants';

export default function DonorTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mb-4">
            Chia Sẻ Từ Trái Tim
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những câu chuyện ý nghĩa từ những người đã đồng hành cùng chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {DONOR_TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-green-100"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-green-600 font-semibold">{testimonial.role}</p>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                    <span className="material-icons text-xs">schedule</span>
                    <span>{new Date(testimonial.date).toLocaleDateString('vi-VN')}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <span className="material-icons absolute -left-2 -top-2 text-4xl text-green-200">
                  format_quote
                </span>
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  {testimonial.testimonial}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Đã ủng hộ</div>
                  <div className="font-bold text-green-600">
                    {testimonial.amount.toLocaleString('vi-VN')}đ
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Cho dự án</div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.program}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
