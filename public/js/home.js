/**
 * Home Page Interactive Features
 * Handles CTAs, animations, and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // CTA buttons
  const ctaButtons = document.querySelectorAll('button[class*="bg-primary"], a[class*="bg-primary"]');
  ctaButtons.forEach(button => {
    if (button.textContent.includes('Quyên góp ngay') || button.textContent.includes('Donate Now')) {
      button.addEventListener('click', (e) => {
        if (button.tagName === 'BUTTON') {
          e.preventDefault();
          window.location.href = '/donate';
        }
      });
    } else if (button.textContent.includes('Xem thêm') || button.textContent.includes('Learn More')) {
      button.addEventListener('click', (e) => {
        if (button.tagName === 'BUTTON') {
          e.preventDefault();
          window.location.href = '/about';
        }
      });
    } else if (button.textContent.includes('Khám phá') || button.textContent.includes('Explore')) {
      button.addEventListener('click', (e) => {
        if (button.tagName === 'BUTTON') {
          e.preventDefault();
          window.location.href = '/programs';
        }
      });
    }
  });
  
  // Featured project cards - navigate to detail
  const projectCards = document.querySelectorAll('[class*="hover:-translate-y"]');
  projectCards.forEach(card => {
    const detailButton = card.querySelector('button, a[href*="programs"]');
    if (detailButton) {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          detailButton.click();
        }
      });
    }
  });
  
  // Statistics counter animation
  const stats = document.querySelectorAll('[class*="text-4xl"][class*="font-bold"]');
  const animateCounter = (element, target) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString('vi-VN');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString('vi-VN');
      }
    }, duration / steps);
  };
  
  // Trigger counter animation when stats come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent.replace(/[^0-9]/g, '');
        const target = parseInt(text);
        if (!isNaN(target) && !entry.target.dataset.animated) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target, target);
        }
      }
    });
  }, { threshold: 0.5 });
  
  stats.forEach(stat => observer.observe(stat));
  
  // News card interactions
  const newsCards = document.querySelectorAll('[href*="news"]');
  newsCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (card.tagName === 'DIV') {
        e.preventDefault();
        window.location.href = '/news/detail/1';
      }
    });
  });
  
  // Smooth scroll for "Back to top" button
  const backToTopButton = document.querySelector('[href="#top"], [class*="scroll-to-top"]');
  if (backToTopButton) {
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  // Video play button (if any)
  const videoPlayButtons = document.querySelectorAll('[class*="play"]');
  videoPlayButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Create video modal
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4';
      modal.innerHTML = `
        <div class="relative w-full max-w-4xl">
          <button onclick="this.closest('.fixed').remove()" 
            class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
            <span class="material-icons text-4xl">close</span>
          </button>
          <div class="aspect-video bg-black rounded-lg overflow-hidden">
            <iframe width="100%" height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
      });
    });
  });
});
