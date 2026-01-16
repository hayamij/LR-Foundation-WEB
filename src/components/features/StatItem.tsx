/**
 * StatsCounter Component
 * Animated statistics showcase
 */

import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  number: string | number;
  label: string;
  suffix?: string;
  icon?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

export default function StatItem({ number, label, suffix = '', icon, color = 'primary' }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const colorClasses = {
    primary: 'text-green-600 bg-green-50',
    secondary: 'text-rose-600 bg-rose-50',
    accent: 'text-orange-600 bg-orange-50',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const target = typeof number === 'number' ? number : parseInt(number.replace(/\D/g, ''));
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div ref={ref} className="text-center group">
      {/* Icon (optional) */}
      {icon && (
        <div className={cn(
          'w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform',
          colorClasses[color]
        )}>
          <span className="material-icons text-2xl">{icon}</span>
        </div>
      )}

      {/* Number */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-2">
        {typeof number === 'string' && number.includes('+') ? (
          <>{count.toLocaleString()}+</>
        ) : (
          <>{count.toLocaleString()}{suffix}</>
        )}
      </div>

      {/* Label */}
      <div className="text-sm md:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}
