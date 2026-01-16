/**
 * NewsCard Component
 * URGENT News article card with emotional triggers and donate CTA
 */

import type { NewsArticle } from '../../types';
import { formatDate, formatRelativeTime } from '../../utils/helpers';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'horizontal';
  isUrgent?: boolean;
}

export default function NewsCard({ article, variant = 'default', isUrgent = false }: NewsCardProps) {
  if (variant === 'horizontal') {
    return (
      <Card 
        variant="default" 
        padding="none" 
        hoverable 
        className={`overflow-hidden ${isUrgent ? 'ring-2 ring-rose-500 shadow-lg shadow-rose-500/20' : ''}`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Image with Urgency Badge */}
          <div className="md:w-2/5 h-56 md:h-auto overflow-hidden relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
            {isUrgent && (
              <div className="absolute top-4 left-4 px-4 py-2 bg-rose-500 text-white rounded-lg font-bold text-sm shadow-xl animate-pulse flex items-center gap-2">
                <span className="material-icons text-lg">emergency</span>
                KHẨN CẤP!
              </div>
            )}
          </div>

          {/* Content */}
          <div className="md:w-3/5 p-6 flex flex-col justify-between bg-gradient-to-br from-white to-rose-50/20">
            {/* Meta */}
            <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
              <span className={`px-3 py-1 rounded-full font-bold ${isUrgent ? 'bg-rose-100 text-rose-700' : 'bg-green-100 text-green-700'}`}>
                {article.category}
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <span className="material-icons text-sm">schedule</span>
                {formatRelativeTime(article.date)}
              </span>
            </div>

            {/* Title with emotion */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-rose-600 transition-colors">
              {article.title}
            </h3>

            {/* Excerpt with emotional emphasis */}
            <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed font-medium">
              {article.excerpt}
            </p>

            {/* Urgent CTA Section */}
            {isUrgent && (
              <div className="mb-4 p-4 bg-rose-50 border-l-4 border-rose-500 rounded-lg">
                <p className="text-rose-900 font-bold text-sm mb-2">
                  💔 Mỗi giây trôi qua, họ đang cần sự giúp đỡ!
                </p>
                <Link to="/donate">
                  <button className="w-full bg-rose-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                    <span className="material-icons">favorite</span>
                    Ủng hộ ngay
                  </button>
                </Link>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="material-icons text-base">person</span>
                <span>{article.author}</span>
              </div>
              <button className="text-green-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all group">
                Đọc chi tiết
                <span className="material-icons text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card 
      variant="default" 
      padding="none" 
      hoverable 
      className={`overflow-hidden h-full flex flex-col ${isUrgent ? 'ring-2 ring-rose-500 shadow-xl shadow-rose-500/30 animate-pulse-slow' : ''}`}
    >
      {/* Image with Urgency Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
        {isUrgent ? (
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-rose-900/20 to-transparent" />
        ) : null}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${isUrgent ? 'bg-rose-500 text-white animate-pulse' : 'bg-white/90 backdrop-blur-sm text-green-700'}`}>
          {isUrgent && <span className="material-icons text-xs mr-1">emergency</span>}
          {article.category}
        </div>
        {isUrgent && (
          <div className="absolute bottom-4 left-4 right-4 bg-rose-500 text-white px-3 py-2 rounded-lg font-bold text-xs shadow-xl">
            ⏰ TÌNH HUỐNG KHẨN CẤP - CẦN HỖ TRỢ NGAY!
          </div>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 flex-1 flex flex-col ${isUrgent ? 'bg-gradient-to-b from-rose-50/30 to-white' : ''}`}>
        {/* Date */}
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
          <span className="material-icons text-base">schedule</span>
          <time className="font-semibold">{formatDate(article.date)}</time>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold mb-2 line-clamp-2 transition-colors flex-1 ${isUrgent ? 'text-rose-900 hover:text-rose-600' : 'text-gray-900 hover:text-green-600'}`}>
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed font-medium">
          {article.excerpt}
        </p>

        {/* Urgent Donate CTA */}
        {isUrgent && (
          <div className="mb-4">
            <Link to="/donate">
              <button className="w-full bg-rose-500 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                <span className="material-icons animate-pulse">favorite</span>
                Giúp đỡ ngay
              </button>
            </Link>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="material-icons text-sm">person</span>
            <span>{article.author}</span>
          </div>
          <button className={`font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all group ${isUrgent ? 'text-rose-600' : 'text-green-600'}`}>
            Xem thêm
            <span className="material-icons text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
}
