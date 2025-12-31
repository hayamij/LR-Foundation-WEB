/**
 * Main JavaScript - LR Foundation Website
 * Core functionality, animations and utilities
 * Centralized script to avoid code duplication
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initAnimations();
  
  // Initialize smooth scroll
  initSmoothScroll();
  
  // Initialize back to top button
  initBackToTop();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize dark mode toggle
  initDarkMode();
  
  // Add CSS animations to document
  addAnimationStyles();
  
  // Initialize page-specific features
  initPageSpecific();
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

// Utility: Show success modal
window.showSuccessModal = function(message) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full animate-scaleIn">
      <div class="text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="material-icons text-green-600 text-4xl">check_circle</span>
        </div>
        <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Thành công!</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">${message}</p>
        <button onclick="this.closest('.fixed').remove()" 
          class="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-bold transition-colors">
          Đóng
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
};

// Utility: Show error modal
window.showErrorModal = function(message) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full animate-scaleIn">
      <div class="text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="material-icons text-red-600 text-4xl">error</span>
        </div>
        <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Lỗi!</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-6">${message}</p>
        <button onclick="this.closest('.fixed').remove()" 
          class="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
          Đóng
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
};

// Initialize page-specific features
function initPageSpecific() {
  const path = window.location.pathname;
  
  if (path.includes('/programs')) {
    initProgramsPage();
    // Initialize program detail tabs if on detail page
    initProgramTabs();
  } else if (path.includes('/news')) {
    initNewsPage();
  } else if (path.includes('/donate')) {
    initDonatePage();
  } else if (path.includes('/contact')) {
    initContactPage();
  } else if (path === '/' || path === '/home') {
    initHomePage();
  }
  
  // Initialize newsletter form globally (in footer)
  initNewsletterForm();
}

// Programs page initialization
function initProgramsPage() {
  // Setup filter buttons
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterPrograms(filter);
      
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
      });
      button.classList.add('bg-primary', 'text-white');
    });
  });
  
  // Setup search
  const searchInput = document.querySelector('input[type="search"]');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchPrograms(e.target.value);
    });
  }
}

// News page initialization
function initNewsPage() {
  // Setup category filters
  const categoryButtons = document.querySelectorAll('[data-category-filter]');
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category-filter');
      filterNews(category);
      
      // Update active button
      categoryButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white', 'font-bold', 'shadow-sm');
        btn.classList.add('bg-surface-light', 'dark:bg-surface-dark', 'border', 'font-semibold');
      });
      button.classList.remove('bg-surface-light', 'dark:bg-surface-dark', 'border', 'font-semibold');
      button.classList.add('bg-primary', 'text-white', 'font-bold', 'shadow-sm');
    });
  });
}

// Donate page initialization  
function initDonatePage() {
  // Setup form submission
  const form = document.querySelector('#donateForm');
  if (form) {
    form.addEventListener('submit', handleDonationSubmit);
  }
}

// Contact page initialization
function initContactPage() {
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', handleContactSubmit);
  }
}

// Home page initialization
function initHomePage() {
  // Setup CTA buttons
  const ctaButtons = document.querySelectorAll('[data-cta]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const action = button.getAttribute('data-cta');
      if (action === 'donate') {
        window.location.href = '/donate';
      } else if (action === 'programs') {
        window.location.href = '/programs';
      } else if (action === 'about') {
        window.location.href = '/about';
      }
    });
  });
  
  // Setup newsletter form
  initNewsletterForm();
}

// Newsletter form handler (used globally in footer)
function initNewsletterForm() {
  const newsletterForm = document.querySelector('#newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(newsletterForm);
      const email = formData.get('email');
      
      if (!email || !isValidEmail(email)) {
        showToast('Vui lòng nhập email hợp lệ', 'error');
        return;
      }
      
      try {
        // For now, just show success message
        // In production, this would call an API endpoint
        showSuccessModal('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ gửi tin tức mới nhất đến email của bạn.');
        newsletterForm.reset();
      } catch (error) {
        console.error('Newsletter error:', error);
        showErrorModal('Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    });
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// API Functions - Removed loadPrograms and loadNews as data is server-side rendered

function filterPrograms(status) {
  const cards = document.querySelectorAll('[data-category]');
  cards.forEach(card => {
    if (status === 'all' || card.getAttribute('data-category') === status) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterNews(category) {
  const cards = document.querySelectorAll('[data-category]');
  cards.forEach(card => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

function searchPrograms(term) {
  const cards = document.querySelectorAll('[data-category]');
  const searchTerm = term.toLowerCase();
  
  cards.forEach(card => {
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const description = card.querySelector('p')?.textContent.toLowerCase() || '';
    
    if (title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

async function handleDonationSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  
  // Get form data using modern FormData API
  const formDataObj = new FormData(form);
  
  // Get selected amount from radio buttons or custom input
  let amount = 0;
  const selectedAmountRadio = form.querySelector('input[name="amount"]:checked');
  if (selectedAmountRadio && selectedAmountRadio.value !== 'other') {
    amount = parseInt(selectedAmountRadio.value);
  } else {
    // Get from custom amount input
    const customAmountInput = form.querySelector('input[name="amount"][type="number"]');
    amount = customAmountInput ? parseInt(customAmountInput.value) : 0;
  }
  
  // Get selected frequency
  const selectedFrequency = form.querySelector('input[name="frequency"]:checked');
  const frequency = selectedFrequency ? selectedFrequency.value : 'once';
  
  // Get selected payment method
  const selectedPayment = form.querySelector('input[name="payment_method"]:checked');
  const paymentMethod = selectedPayment ? 'qr' : 'qr'; // Default to qr
  
  // Build data object matching backend expectations
  const formData = {
    donorName: formDataObj.get('name') || '',
    donorEmail: formDataObj.get('email') || '',
    donorPhone: formDataObj.get('phone') || '',
    amount: amount,
    frequency: frequency,
    paymentMethod: paymentMethod,
    message: formDataObj.get('message') || '',
    isAnonymous: formDataObj.get('anonymous') === 'on'
  };
  
  // Validate amount
  if (!formData.amount || formData.amount < 10000) {
    showToast('Vui lòng chọn số tiền quyên góp (tối thiểu 10,000 VNĐ)', 'error');
    return;
  }
  
  try {
    const response = await fetch('/api/donations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      showSuccessModal('Cảm ơn bạn đã quyên góp! Chúng tôi sẽ liên hệ sớm nhất.');
      form.reset();
    } else {
      const errorMsg = result.message || result.error || 'Có lỗi xảy ra. Vui lòng thử lại.';
      showErrorModal(errorMsg);
    }
  } catch (error) {
    console.error('Donation error:', error);
    showErrorModal('Có lỗi xảy ra. Vui lòng thử lại.');
  }
}

async function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  
  // Use FormData API to automatically collect all form fields with name attributes
  const formDataObj = new FormData(form);
  
  // Convert FormData to plain object
  const formData = {
    name: formDataObj.get('name') || '',
    email: formDataObj.get('email') || '',
    phone: formDataObj.get('phone') || '',
    subject: formDataObj.get('subject') || '',
    message: formDataObj.get('message') || ''
  };
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      showSuccessModal('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
      form.reset();
    } else {
      const errorMsg = result.message || result.error || 'Có lỗi xảy ra. Vui lòng thử lại.';
      showErrorModal(errorMsg);
    }
  } catch (error) {
    console.error('Contact form error:', error);
    showErrorModal('Có lỗi xảy ra. Vui lòng thử lại.');
  }
}
// ========== Program Detail Tab Switching ==========
function initProgramTabs() {
  const tabContainer = document.getElementById('program-tabs');
  if (!tabContainer) return;

  const tabButtons = tabContainer.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => {
        btn.classList.remove('active', 'border-primary', 'text-primary', 'font-bold');
        btn.classList.add('border-transparent', 'text-gray-500', 'font-medium');
      });
      
      // Add active class to clicked button
      button.classList.remove('border-transparent', 'text-gray-500', 'font-medium');
      button.classList.add('active', 'border-primary', 'text-primary', 'font-bold');
      
      // Show appropriate content (for now just visual feedback)
      const tabName = button.getAttribute('data-tab');
      console.log('Switched to tab:', tabName);
    });
  });
}

// ========== Donate Confirm Page Functions ==========
function copyTransactionCode() {
  const codeElement = document.getElementById('transaction-code');
  if (!codeElement) return;
  
  const code = codeElement.textContent.trim();
  
  navigator.clipboard.writeText(code).then(() => {
    showToast('Đã sao chép mã giao dịch!', 'success');
  }).catch(err => {
    console.error('Copy failed:', err);
    showToast('Không thể sao chép', 'error');
  });
}

function downloadReceipt() {
  // Simulate receipt download
  showToast('Đang tải biên lai...', 'info');
  setTimeout(() => {
    showToast('Biên lai đã được tải về!', 'success');
  }, 1000);
}

function shareReceipt() {
  if (navigator.share) {
    navigator.share({
      title: 'Biên lai quyên góp - Quỹ Bông Hồng Nhỏ',
      text: 'Tôi vừa quyên góp cho Quỹ Bông Hồng Nhỏ. Hãy cùng chung tay giúp đỡ trẻ em nghèo!',
      url: window.location.href
    }).then(() => {
      showToast('Đã chia sẻ!', 'success');
    }).catch(err => {
      console.log('Share cancelled or failed:', err);
    });
  } else {
    showToast('Trình duyệt không hỗ trợ chia sẻ', 'error');
  }
}

// ========== News Detail Page Functions ==========
function shareFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
}

function toggleFavorite(button) {
  button.classList.toggle('text-primary');
  const isFavorited = button.classList.contains('text-primary');
  showToast(isFavorited ? 'Đã thêm vào yêu thích!' : 'Đã bỏ yêu thích', 'info');
}

function copyPageLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast('Đã sao chép liên kết!', 'success');
  }).catch(err => {
    console.error('Copy failed:', err);
    showToast('Không thể sao chép', 'error');
  });
}

// ========== Toast Notification ==========
function showToast(message, type = 'info') {
  // Remove existing toast if any
  const existingToast = document.getElementById('toast-notification');
  if (existingToast) {
    existingToast.remove();
  }
  
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };
  
  const toast = document.createElement('div');
  toast.id = 'toast-notification';
  toast.className = `fixed top-20 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down`;
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('animate-fade-out-up');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}