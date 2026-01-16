/**
 * ImpactCard Component
 * Showcases impact areas with emotional design
 */

import type { ImpactArea } from '../../types';
import Card from '../ui/Card';
import { cn } from '../../utils/helpers';

interface ImpactCardProps {
  impact: ImpactArea;
}

export default function ImpactCard({ impact }: ImpactCardProps) {
  const colorClasses = {
    primary: {
      icon: 'text-green-600 bg-green-100',
      border: 'border-green-200',
      hover: 'hover:border-green-400 hover:shadow-green-500/20',
    },
    secondary: {
      icon: 'text-rose-600 bg-rose-100',
      border: 'border-rose-200',
      hover: 'hover:border-rose-400 hover:shadow-rose-500/20',
    },
    accent: {
      icon: 'text-orange-600 bg-orange-100',
      border: 'border-orange-200',
      hover: 'hover:border-orange-400 hover:shadow-orange-500/20',
    },
  };

  const colors = colorClasses[impact.color];

  return (
    <Card
      variant="bordered"
      padding="lg"
      className={cn(
        'h-full border-l-4 transition-all duration-300 group',
        colors.border,
        colors.hover
      )}
    >
      {/* Icon */}
      <div className={cn(
        'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300',
        colors.icon
      )}>
        <span className="material-icons text-3xl">{impact.icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
        {impact.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {impact.description}
      </p>

      {/* Stats */}
      <div className={cn(
        'pt-4 border-t-2',
        colors.border
      )}>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">
            {impact.stats.number}
          </span>
          <span className="text-sm text-gray-600 font-medium">
            {impact.stats.label}
          </span>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </Card>
  );
}
