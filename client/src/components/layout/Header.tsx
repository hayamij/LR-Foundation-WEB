/**
 * Header Component
 * Sticky navigation with emotional branding and CTA
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION, SITE_CONFIG } from '../../config/constants';
import Button from '../ui/Button';
import { cn } from '../../utils/helpers';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/images/logo.png" 
                alt={SITE_CONFIG.name}
                className="w-12 h-12 object-contain transform group-hover:scale-105 transition-transform"
              />
              <div className="hidden md:block">
                <div className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {SITE_CONFIG.name}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {SITE_CONFIG.nameEn}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAVIGATION.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all',
                      isActive
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                    )}
                  >
                    <span className="material-icons text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="secondary"
                size="md"
                href="/donate"
                leftIcon="volunteer_activism"
                className="shadow-lg shadow-rose-500/20"
              >
                Ủng Hộ
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-icons text-gray-700">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              {NAVIGATION.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all',
                      isActive
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                  >
                    <span className="material-icons">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <Button
                  variant="secondary"
                  size="md"
                  href="/donate"
                  leftIcon="volunteer_activism"
                  className="w-full"
                >
                  Ủng Hộ Ngay
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}
