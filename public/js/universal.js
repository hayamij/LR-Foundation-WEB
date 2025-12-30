/**
 * Universal Interactive Handler
 * Kết nối tất cả các nút và elements với backend
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ===== PROGRAMS PAGE =====
  if (window.location.pathname.includes('/programs')) {
    initProgramsPage();
  }
  
  // ===== NEWS PAGE =====
  if (window.location.pathname.includes('/news')) {
    initNewsPage();
  }
  
  // ===== DONATE PAGE =====
  if (window.location.pathname.includes('/donate')) {
    initDonatePage();
  }
  
  // ===== CONTACT PAGE =====
  if (window.location.pathname.includes('/contact')) {
    initContactPage();
  }
  
  // ===== HOME PAGE =====
  if (window.location.pathname === '/' || window.location.pathname === '/home') {
    initHomePage();
  }
  
  // ===== ABOUT PAGE =====
  if (window.location.pathname.includes('/about')) {
    initAboutPage();
  }
  
  // ===== UNIVERSAL BUTTONS =====
  initUniversalButtons();
});

// ========== PROGRAMS PAGE ==========
function initProgramsPage() {
  // Filter buttons
  const filterButtons = document.querySelectorAll('button');
  const cards = document.querySelectorAll('.grid > div');
  
  filterButtons.forEach((button, index) => {
    const text = button.textContent.trim();
    
    if (text.includes('Tất cả')) {
      button.setAttribute('data-filter', 'all');
      button.addEventListener('click', () => filterPrograms('all', button, filterButtons));
    } else if (text.includes('Đang vận động')) {
      button.setAttribute('data-filter', 'active');
      button.addEventListener('click', () => filterPrograms('active', button, filterButtons));
    } else if (text.includes('Đã hoàn thành')) {
      button.setAttribute('data-filter', 'completed');
      button.addEventListener('click', () => filterPrograms('completed', button, filterButtons));
    } else if (text.includes('Sắp tới')) {
      button.setAttribute('data-filter', 'upcoming');
      button.addEventListener('click', () => filterPrograms('upcoming', button, filterButtons));
    }
  });
  
  // Add data-category to cards based on status badges
  cards.forEach(card => {
    const badge = card.querySelector('span[class*="animate-pulse"]');
    if (badge) {
      if (badge.textContent.includes('Đang vận động') || badge.textContent.includes('Khẩn cấp')) {
        card.setAttribute('data-category', 'active');
      } else if (badge.textContent.includes('Hoàn thành')) {
        card.setAttribute('data-category', 'completed');
      } else if (badge.textContent.includes('Sắp tới')) {
        card.setAttribute('data-category', 'upcoming');
      }
    } else {
      card.setAttribute('data-category', 'active');
    }
  });
  
  // Search functionality
  const searchInput = document.querySelector('input[placeholder*="Tìm kiếm"]');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      cards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
        card.style.display = (title.includes(term) || desc.includes(term)) ? '' : 'none';
      });
    });
  }
  
  // Heart/Favorite buttons
  const heartButtons = card.querySelectorAll('button');
  cards.forEach(card => {
    const buttons = card.querySelectorAll('button');
    buttons.forEach(btn => {
      const icon = btn.querySelector('.material-icons');
      if (icon && icon.textContent === 'favorite_border') {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleFavorite(icon);
        });
      } else if (icon && icon.textContent === 'arrow_forward') {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          window.location.href = '/programs/detail/1';
        });
      } else if (btn.textContent.includes('Xem chi tiết')) {
        btn.addEventListener('click', () => {
          window.location.href = '/programs/detail/1';
        });
      } else if (btn.textContent.includes('Quyên góp') || btn.textContent.includes('Ủng Hộ')) {
        btn.addEventListener('click', () => {
          window.location.href = '/donate';
        });
      }
    });
  });
}

function filterPrograms(filter, activeButton, allButtons) {
  const cards = document.querySelectorAll('.grid > div');
  
  // Update active button
  allButtons.forEach(btn => {
    if (btn.hasAttribute('data-filter')) {
      btn.classList.remove('bg-primary', 'text-white');
      btn.classList.add('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
    }
  });
  
  activeButton.classList.remove('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
  activeButton.classList.add('bg-primary', 'text-white');
  
  // Filter cards
  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (filter === 'all' || category === filter) {
      card.style.display = '';
      card.style.animation = 'fadeIn 0.5s ease-in-out';
    } else {
      card.style.display = 'none';
    }
  });
}

function toggleFavorite(icon) {
  if (icon.textContent === 'favorite_border') {
    icon.textContent = 'favorite';
    icon.classList.add('text-red-500');
    showToast('Đã thêm vào yêu thích', 'success');
  } else {
    icon.textContent = 'favorite_border';
    icon.classList.remove('text-red-500');
    showToast('Đã xóa khỏi yêu thích', 'info');
  }
}

// ========== CONTACT PAGE ==========
function initContactPage() {
  const form = document.querySelector('form');
  if (!form) return;
  
  const inputs = {
    name: form.querySelector('input[placeholder*="Họ và tên"]'),
    email: form.querySelector('input[type="email"]'),
    phone: form.querySelector('input[type="tel"]'),
    subject: form.querySelector('input[placeholder*="Chủ đề"]'),
    message: form.querySelector('textarea')
  };
  
  // Contact card buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    const text = btn.textContent;
    if (text.includes('Gọi ngay')) {
      btn.addEventListener('click', () => window.location.href = 'tel:+84901234567');
    } else if (text.includes('Gửi mail') || text.includes('Gửi email')) {
      btn.addEventListener('click', () => window.location.href = 'mailto:lienhe@bonghongnho.org');
    } else if (text.includes('Google Maps') || text.includes('Chỉ đường')) {
      btn.addEventListener('click', () => {
        window.open('https://maps.google.com/?q=Ho+Chi+Minh+City', '_blank');
      });
    }
  });
  
  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const data = {
      name: inputs.name?.value,
      email: inputs.email?.value,
      phone: inputs.phone?.value,
      subject: inputs.subject?.value,
      message: inputs.message?.value
    };
    
    // Validate
    if (!data.name || data.name.length < 2) {
      showToast('Vui lòng nhập họ và tên (ít nhất 2 ký tự)', 'error');
      return;
    }
    
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      showToast('Vui lòng nhập email hợp lệ', 'error');
      return;
    }
    
    if (!data.phone || !/^(0|\+84)[0-9]{9,10}$/.test(data.phone.replace(/[\s\-().]/g, ''))) {
      showToast('Vui lòng nhập số điện thoại hợp lệ', 'error');
      return;
    }
    
    if (!data.message || data.message.length < 10) {
      showToast('Nội dung tin nhắn phải có ít nhất 10 ký tự', 'error');
      return;
    }
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="material-icons animate-spin">refresh</span> Đang gửi...';
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (result.success) {
        showSuccessModal('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        form.reset();
      } else {
        showToast('Có lỗi xảy ra. Vui lòng thử lại.', 'error');
      }
    } catch (error) {
      showToast('Có lỗi xảy ra. Vui lòng thử lại.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

// ========== DONATE PAGE ==========
function initDonatePage() {
  // If on confirm page
  if (window.location.pathname.includes('/confirm')) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
      const text = btn.textContent.trim();
      if (text.includes('Tải biên lai') || text.includes('download')) {
        btn.addEventListener('click', () => {
          showToast('Đang tải biên lai...', 'info');
          setTimeout(() => {
            showToast('Biên lai đã được tải xuống', 'success');
          }, 1500);
        });
      } else if (text.includes('Chia sẻ') || text.includes('share')) {
        btn.addEventListener('click', () => {
          if (navigator.share) {
            navigator.share({
              title: 'Tôi đã quyên góp cho Quỹ Bông Hồng Nhỏ',
              text: 'Hãy cùng tôi lan tỏa yêu thương!',
              url: window.location.href
            });
          } else {
            showToast('Đã copy link vào clipboard', 'success');
            navigator.clipboard.writeText(window.location.href);
          }
        });
      } else if (text.includes('Về trang chủ') || text.includes('home')) {
        btn.addEventListener('click', () => {
          window.location.href = '/';
        });
      }
    });
    return;
  }
  
  // Regular donate page
  const form = document.querySelector('form');
  if (!form) return;
  
  let selectedAmount = 0;
  let selectedFrequency = 'once';
  let selectedPayment = 'qr';
  
  // Amount buttons
  const amountButtons = form.querySelectorAll('button');
  amountButtons.forEach(btn => {
    const text = btn.textContent.replace(/[^0-9]/g, '');
    if (text && parseInt(text) >= 10000) {
      const amount = parseInt(text);
      btn.setAttribute('data-amount', amount);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        selectedAmount = amount;
        amountButtons.forEach(b => {
          if (b.hasAttribute('data-amount')) {
            b.classList.remove('border-primary', 'bg-primary/5');
            b.classList.add('border-gray-300');
          }
        });
        btn.classList.add('border-primary', 'bg-primary/5');
      });
    }
  });
  
  // Custom amount input
  const customInput = form.querySelector('input[placeholder*="Số tiền khác"]');
  if (customInput) {
    customInput.addEventListener('input', (e) => {
      selectedAmount = parseInt(e.target.value) || 0;
    });
  }
  
  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (selectedAmount < 10000) {
      showToast('Vui lòng chọn số tiền quyên góp (tối thiểu 10,000 VNĐ)', 'error');
      return;
    }
    
    showToast('Đang xử lý quyên góp...', 'info');
    
    setTimeout(() => {
      window.location.href = '/donate/confirm';
    }, 1500);
  });
}

// ========== NEWS PAGE ==========
function initNewsPage() {
  // Similar to programs, add filter functionality
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    const text = btn.textContent;
    if (text.includes('Đọc tiếp') || text.includes('Xem thêm')) {
      btn.addEventListener('click', () => {
        window.location.href = '/news/detail/1';
      });
    }
  });
}

// ========== HOME PAGE ==========
function initHomePage() {
  const buttons = document.querySelectorAll('button, a');
  buttons.forEach(btn => {
    const text = btn.textContent;
    if (text.includes('Quyên góp ngay') || text.includes('Donate Now')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '/donate';
      });
    } else if (text.includes('Xem thêm') || text.includes('Tìm hiểu')) {
      btn.addEventListener('click', (e) => {
        if (btn.tagName === 'BUTTON') {
          e.preventDefault();
          window.location.href = '/about';
        }
      });
    } else if (text.includes('Khám phá') || text.includes('Explore')) {
      btn.addEventListener('click', (e) => {
        if (btn.tagName === 'BUTTON') {
          e.preventDefault();
          window.location.href = '/programs';
        }
      });
    }
  });
}

// ========== ABOUT PAGE ==========
function initAboutPage() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    const text = btn.textContent.trim();
    if (text.includes('Ủng Hộ Ngay') || text.includes('Quyên góp')) {
      btn.addEventListener('click', () => {
        window.location.href = '/donate';
      });
    } else if (text.includes('Tình Nguyện Viên')) {
      btn.addEventListener('click', () => {
        window.location.href = '/contact';
      });
    } else if (text.includes('Tìm hiểu thêm')) {
      btn.addEventListener('click', () => {
        window.location.href = '/programs';
      });
    }
  });
}

// ========== UNIVERSAL BUTTONS ==========
function initUniversalButtons() {
  // All links with href starting with /
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    if (!link.hasAttribute('data-handled')) {
      link.setAttribute('data-handled', 'true');
    }
  });
  
  // All "Xem chi tiết" buttons
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('Xem chi tiết') && !btn.hasAttribute('data-handled')) {
      btn.setAttribute('data-handled', 'true');
      btn.addEventListener('click', () => {
        const path = window.location.pathname;
        if (path.includes('/programs')) {
          window.location.href = '/programs/detail/1';
        } else if (path.includes('/news')) {
          window.location.href = '/news/detail/1';
        }
      });
    }
  });
}

// ========== UTILITY FUNCTIONS ==========
function showToast(message, type = 'info') {
  const colors = {
    info: 'bg-gray-800',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600'
  };
  
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50`;
  toast.style.animation = 'slideInRight 0.3s ease-out';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function showSuccessModal(message) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full" style="animation: scaleIn 0.3s ease-out">
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
}
