/**
 * News Page Interactive Features
 * Handles category filtering, search, and pagination
 */

document.addEventListener('DOMContentLoaded', () => {
  // Category filter buttons
  const categoryButtons = document.querySelectorAll('[data-category-filter]');
  const newsCards = document.querySelectorAll('[data-news-category]');
  
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category-filter');
      
      // Update active button
      categoryButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
      });
      button.classList.remove('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
      button.classList.add('bg-primary', 'text-white');
      
      // Filter news cards
      newsCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-news-category') === category) {
          card.style.display = '';
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
      
      newsCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const excerpt = card.querySelector('p')?.textContent.toLowerCase() || '';
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
  
  // Sidebar category links
  const sidebarCategories = document.querySelectorAll('[data-sidebar-category]');
  sidebarCategories.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-sidebar-category');
      
      // Trigger main filter
      const mainFilterButton = document.querySelector(`[data-category-filter="${category}"]`);
      if (mainFilterButton) {
        mainFilterButton.click();
      }
      
      // Scroll to news grid
      const newsGrid = document.querySelector('[class*="grid"]');
      if (newsGrid) {
        newsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
  
  // "Read more" / "Đọc tiếp" buttons
  const readMoreButtons = document.querySelectorAll('a[href*="news/detail"], button:has(.material-icons)');
  readMoreButtons.forEach(button => {
    if (button.textContent.includes('Đọc tiếp') || button.textContent.includes('Xem thêm')) {
      button.addEventListener('click', (e) => {
        if (button.tagName === 'BUTTON') {
          e.preventDefault();
          window.location.href = '/news/detail/1';
        }
      });
    }
  });
  
  // Pagination
  const paginationButtons = document.querySelectorAll('[class*="pagination"] button, [class*="pagination"] a');
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
  
  // Social share buttons (if any)
  const shareButtons = document.querySelectorAll('[data-share]');
  shareButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = button.getAttribute('data-share');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      
      let shareUrl = '';
      switch (platform) {
        case 'facebook':
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case 'twitter':
          shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
          break;
        case 'zalo':
          shareUrl = `https://zalo.me/share?url=${url}`;
          break;
      }
      
      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });
});
