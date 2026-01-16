/**
 * Card Component
 * Flexible card container with multiple variants
 */

import type { CardProps, CardVariant, CardPadding } from '../../types';
import { cn } from '../../utils/helpers';

export default function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hoverable = false,
}: CardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses: Record<NonNullable<CardVariant>, string> = {
    default: 'bg-white shadow-sm border border-gray-100',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    bordered: 'bg-white border-2 border-gray-200',
    glass: 'bg-white/80 backdrop-blur-lg border border-white/20 shadow-lg',
  };
  
  const paddingClasses: Record<NonNullable<CardPadding>, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hoverable
    ? 'hover:-translate-y-1 hover:shadow-2xl cursor-pointer'
    : '';

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hoverClasses,
    className
  );

  return <div className={classes}>{children}</div>;
}
