/**
 * ProgramCard Component
 * Emotional program card with progress bar and impact showcase
 */

import type { Program } from '../../types';
import { formatCurrency, cn } from '../../utils/helpers';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
}

export default function ProgramCard({ program, featured = false }: ProgramCardProps) {
  const categoryColors = {
    education: 'bg-green-500 text-white',
    healthcare: 'bg-rose-500 text-white',
    social: 'bg-orange-500 text-white',
  };

  return (
    <Card
      variant={featured ? 'elevated' : 'default'}
      padding="none"
      hoverable
      className={cn('overflow-hidden group', featured && 'ring-2 ring-green-500')}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Category Badge */}
        <div className={cn(
          'absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg',
          categoryColors[program.category]
        )}>
          {program.categoryLabel}
        </div>

        {/* Urgent Badge */}
        {program.urgent && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg animate-pulse">
            <span className="material-icons text-sm">local_fire_department</span>
            Khẩn cấp
          </div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
          {program.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {program.description}
        </p>

        {/* Impact */}
        <div className="flex items-center gap-2 mb-4 text-sm text-green-700 bg-green-50 px-3 py-2 rounded-lg">
          <span className="material-icons text-lg">check_circle</span>
          <span className="font-semibold">{program.impact}</span>
        </div>

        {/* Progress Section */}
        <div className="mb-6">
          {/* Stats */}
          <div className="flex justify-between items-baseline mb-2">
            <div>
              <span className="text-2xl font-bold text-rose-600">
                {formatCurrency(program.raised)}
              </span>
              <span className="text-gray-500 text-sm ml-1">đã quyên góp</span>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-600">Mục tiêu: </span>
              <span className="text-sm font-bold text-gray-900">
                {formatCurrency(program.target)}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
            <div
              className={cn(
                'absolute top-0 left-0 h-full rounded-full transition-all duration-1000 shadow-lg',
                program.progress >= 90 ? 'bg-gradient-to-r from-green-500 to-green-600' :
                program.progress >= 50 ? 'bg-gradient-to-r from-orange-500 to-orange-600' :
                'bg-gradient-to-r from-rose-500 to-rose-600'
              )}
              style={{ width: `${program.progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
            </div>
          </div>

          {/* Percentage & Donors */}
          <div className="flex justify-between items-center mt-2 text-xs">
            <span className="font-bold text-rose-600">{program.progress}% hoàn thành</span>
            <span className="text-gray-600 flex items-center gap-1">
              <span className="material-icons text-sm">group</span>
              {program.donors} người ủng hộ
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            leftIcon="volunteer_activism"
            href={`/donate?program=${program.id}`}
          >
            Ủng Hộ Ngay
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="px-4"
            href={`/programs/${program.id}`}
          >
            <span className="material-icons text-lg">info</span>
          </Button>
        </div>
      </div>

      {/* Featured Ribbon */}
      {featured && (
        <div className="absolute -top-1 -right-1">
          <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
            ⭐ Nổi bật
          </div>
        </div>
      )}
    </Card>
  );
}
