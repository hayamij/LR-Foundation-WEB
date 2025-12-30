/**
 * Navigation Module
 * Handles mobile menu, scroll effects, and active navigation states
 */

export function initNavigation() {
  // Mobile menu toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuButton?.querySelector('.material-icons');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('hidden');
      
      if (isOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.textContent = 'close';
      } else {
        mobileMenu.classList.add('hidden');
        menuIcon.textContent = 'menu';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.textContent = 'menu';
      }
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.textContent = 'menu';
      }
    });
  }

  // Highlight active navigation item
  highlightActiveNav();

  // Scroll effect for header
  initScrollEffect();

  console.log('✓ Navigation initialized');
}

/**
 * Highlight active navigation based on current page
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a[href]');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('text-primary', 'font-semibold');
      link.classList.remove('text-gray-600');
    }
  });
}

/**
 * Add scroll effect to header
 */
function initScrollEffect() {
  const header = document.querySelector('header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add('shadow-lg');
    } else {
      header.classList.remove('shadow-lg');
    }

    lastScroll = currentScroll;
  });
}
