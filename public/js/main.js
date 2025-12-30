/**
 * Main JavaScript - LR Foundation Website
 * Core functionality and animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initAnimations();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Initialize back to top button
  initBackToTop();
  
  // Initialize mobile menu (if needed)
  initMobileMenu();
  
  // Initialize dark mode toggle
  initDarkMode();
  
  // Add CSS animations to document
  addAnimationStyles();
});

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Fade-in animation on scroll
function initAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.card, section, [class*="hover:-translate-y"]').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// Back to top button
function initBackToTop() {
  let backToTopButton = document.querySelector('[class*="back-to-top"]');
  
  // Create button if doesn't exist
  if (!backToTopButton) {
    backToTopButton = document.createElement('button');
    backToTopButton.className = 'fixed bottom-6 right-6 bg-primary hover:bg-primary-dark text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-40 opacity-0 pointer-events-none';
    backToTopButton.innerHTML = '<span class="material-icons">arrow_upward</span>';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);
  }
  
  // Show/hide based on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.pointerEvents = 'auto';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.pointerEvents = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuButton = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Dark mode toggle
function initDarkMode() {
  const darkModeToggle = document.querySelector('[data-dark-mode-toggle]');
  
  if (darkModeToggle) {
    // Check saved preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    
    darkModeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDarkNow = document.documentElement.classList.contains('dark');
      localStorage.setItem('darkMode', isDarkNow);
    });
  }
}

// Add animation styles dynamically
function addAnimationStyles() {
  if (document.getElementById('custom-animations')) return;
  
  const style = document.createElement('style');
  style.id = 'custom-animations';
  style.textContent = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    @keyframes scaleIn {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
    
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-out;
    }
    
    .animate-slideInRight {
      animation: slideInRight 0.3s ease-out;
    }
    
    .animate-slideOutRight {
      animation: slideOutRight 0.3s ease-out;
    }
    
    .animate-scaleIn {
      animation: scaleIn 0.3s ease-out;
    }
    
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// Utility: Show toast notification
window.showToast = function(message, type = 'info') {
  const toast = document.createElement('div');
  const colors = {
    info: 'bg-gray-800',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600'
  };
  
  toast.className = `fixed bottom-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideInRight`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
};

// Utility: Format currency
window.formatCurrency = function(amount) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

// Utility: Format date
window.formatDate = function(date) {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};
