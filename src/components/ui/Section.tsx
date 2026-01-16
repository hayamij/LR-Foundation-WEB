/**
 * Section Component
 * Container section with consistent spacing and backgrounds
 */

import type { SectionProps, SectionBackground, SectionPadding } from '../../types';
import { cn } from '../../utils/helpers';

export default function Section({
  id,
  children,
  className,
  background = 'white',
  padding = 'lg',
  container = true,
}: SectionProps) {
const backgroundClasses: Record<NonNullable<SectionBackground>, string> = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-green-50',
    secondary: 'bg-rose-50',
    gradient: 'bg-gradient-to-br from-green-50 via-white to-rose-50',
  };

const paddingClasses: Record<NonNullable<SectionPadding>, string> = {
    none: '',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };

  return (
    <section
      id={id}
      className={cn(backgroundClasses[background], paddingClasses[padding], className)}
    >
      {container ? (
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
