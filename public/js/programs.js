/**
 * Programs Page Interactive Features
 * Handles filtering, search, pagination, and favorites
 */

document.addEventListener('DOMContentLoaded', () => {
  // Filter buttons
  const filterButtons = document.querySelectorAll('[data-filter]');
  const programCards = document.querySelectorAll('[data-category]');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
      });
      button.classList.remove('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
      button.classList.add('bg-primary', 'text-white');
      
      // Filter cards
      programCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
          // Animate in
          card.style.animation = 'fadeIn 0.5s ease-in-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  
  // Search functionality
  const searchInput = document.querySelector('input[placeholder*="Tìm kiếm"]');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      programCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = card.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
  
  // Favorite/Heart buttons
  const favoriteButtons = document.querySelectorAll('[class*="cursor-pointer"][class*="heart"]');
  favoriteButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const icon = button.querySelector('.material-icons');
      
      if (icon.textContent === 'favorite_border') {
        icon.textContent = 'favorite';
        icon.classList.add('text-red-500');
        showToast('Đã thêm vào yêu thích');
      } else {
        icon.textContent = 'favorite_border';
        icon.classList.remove('text-red-500');
        showToast('Đã xóa khỏi yêu thích');
      }
    });
  });
  
  // "Xem chi tiết" and "Quyên góp ngay" buttons
  const detailButtons = document.querySelectorAll('button:has(.material-icons)');
  detailButtons.forEach(button => {
    if (button.textContent.includes('Xem chi tiết')) {
      button.addEventListener('click', () => {
        window.location.href = '/programs/detail/1';
      });
    } else if (button.textContent.includes('Quyên góp')) {
      button.addEventListener('click', () => {
        window.location.href = '/donate';
      });
    }
  });
  
  // Pagination
  const paginationButtons = document.querySelectorAll('[class*="pagination"] button');
  paginationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // Remove active state from all
      paginationButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('text-gray-700', 'dark:text-gray-300');
      });
      // Add active to clicked
      button.classList.add('bg-primary', 'text-white');
      button.classList.remove('text-gray-700', 'dark:text-gray-300');
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});

// Toast notification helper
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideInRight';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
