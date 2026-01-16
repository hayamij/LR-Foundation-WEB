/**
 * Hero Component
 * Emotional, full-width hero section with image and overlay
 */

import type { HeroProps, HeroOverlay, HeroHeight } from '../../types';
import { cn } from '../../utils/helpers';

export default function Hero({
  title,
  subtitle,
  description,
  image,
  imageAlt = '',
  overlay = 'dark',
  height = 'lg',
  actions,
  className,
  children,
}: HeroProps) {
  const overlayClasses: Record<NonNullable<HeroOverlay>, string> = {
    light: 'bg-gradient-to-r from-white/90 via-white/70 to-transparent',
    dark: 'bg-gradient-to-r from-black/70 via-black/50 to-transparent',
    gradient: 'bg-gradient-to-r from-green-900/90 via-green-800/70 to-transparent',
  };

  const heightClasses: Record<NonNullable<HeroHeight>, string> = {
    sm: 'h-[400px]',
    md: 'h-[500px]',
    lg: 'h-[600px]',
    xl: 'h-[700px]',
    full: 'h-screen',
  };

  return (
    <section className={cn('relative w-full overflow-hidden', heightClasses[height], className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[3000ms]"
        />
        <div className={cn('absolute inset-0', overlayClasses[overlay])} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            {subtitle && (
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-4 border border-white/30">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-sm font-bold uppercase tracking-wide">
                  {subtitle}
                </span>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              {title}
            </h1>
            
            {description && (
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/95 font-light leading-relaxed drop-shadow-lg max-w-2xl">
                {description}
              </p>
            )}
            
            {actions && (
              <div className="flex flex-col sm:flex-row gap-4">
                {actions}
              </div>
            )}

            {children}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}
