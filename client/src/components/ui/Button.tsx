/**
 * Button Component
 * Versatile, accessible button with emotion-driven design
 */

import { Link } from 'react-router-dom';
import type { ButtonProps, ButtonVariant, ButtonSize } from '../../types';
import { cn } from '../../utils/helpers';

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  href,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses: Record<NonNullable<ButtonVariant>, string> = {
    primary: 'bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 focus:ring-green-500/50 active:scale-95',
    secondary: 'bg-rose-500 text-white hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30 focus:ring-rose-500/50 active:scale-95',
    accent: 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 focus:ring-orange-500/50 active:scale-95',
    outline: 'bg-transparent border-2 border-green-500 text-green-600 hover:bg-green-50 focus:ring-green-500/50 active:scale-95',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500/50',
  };
  
  const sizeClasses: Record<NonNullable<ButtonSize>, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
    xl: 'px-10 py-5 text-xl gap-3',
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {isLoading && (
        <span className="material-icons animate-spin">refresh</span>
      )}
      {!isLoading && leftIcon && (
        <span className="material-icons">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="material-icons">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {content}
    </button>
  );
}
