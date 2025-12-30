/**
 * Contact Page Interactive Features
 * Handles form validation and submission
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('form');
  
  if (!contactForm) return;
  
  // Form inputs
  const nameInput = contactForm.querySelector('input[placeholder*="Họ và tên"]');
  const emailInput = contactForm.querySelector('input[type="email"]');
  const phoneInput = contactForm.querySelector('input[type="tel"]');
  const subjectInput = contactForm.querySelector('input[placeholder*="Chủ đề"]');
  const messageInput = contactForm.querySelector('textarea');
  const submitButton = contactForm.querySelector('button[type="submit"]');
  
  // Validation functions
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const validatePhone = (phone) => {
    return /^(0|\+84)[0-9]{9,10}$/.test(phone.replace(/[\s\-().]/g, ''));
  };
  
  const showError = (input, message) => {
    const errorDiv = input.parentElement.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    
    if (!input.parentElement.querySelector('.error-message')) {
      input.parentElement.appendChild(errorDiv);
    }
    
    input.classList.add('border-red-500');
  };
  
  const clearError = (input) => {
    const errorDiv = input.parentElement.querySelector('.error-message');
    if (errorDiv) errorDiv.remove();
    input.classList.remove('border-red-500');
  };
  
  // Real-time validation
  if (emailInput) {
    emailInput.addEventListener('blur', () => {
      if (emailInput.value && !validateEmail(emailInput.value)) {
        showError(emailInput, 'Email không đúng định dạng');
      } else {
        clearError(emailInput);
      }
    });
  }
  
  if (phoneInput) {
    phoneInput.addEventListener('blur', () => {
      if (phoneInput.value && !validatePhone(phoneInput.value)) {
        showError(phoneInput, 'Số điện thoại không đúng định dạng');
      } else {
        clearError(phoneInput);
      }
    });
  }
  
  // Form submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear all errors
    [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
      if (input) clearError(input);
    });
    
    // Validate all fields
    let isValid = true;
    
    if (!nameInput?.value || nameInput.value.trim().length < 2) {
      showError(nameInput, 'Họ và tên phải có ít nhất 2 ký tự');
      isValid = false;
    }
    
    if (!emailInput?.value || !validateEmail(emailInput.value)) {
      showError(emailInput, 'Email không hợp lệ');
      isValid = false;
    }
    
    if (!phoneInput?.value || !validatePhone(phoneInput.value)) {
      showError(phoneInput, 'Số điện thoại không hợp lệ');
      isValid = false;
    }
    
    if (!subjectInput?.value || subjectInput.value.trim().length < 5) {
      showError(subjectInput, 'Chủ đề phải có ít nhất 5 ký tự');
      isValid = false;
    }
    
    if (!messageInput?.value || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Nội dung tin nhắn phải có ít nhất 10 ký tự');
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading state
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="material-icons animate-spin">refresh</span> Đang gửi...';
    
    try {
      // Send to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
          subject: subjectInput.value,
          message: messageInput.value
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Show success message
        showSuccessModal('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        contactForm.reset();
      } else {
        showErrorModal('Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showErrorModal('Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
    }
  });
  
  // Contact card buttons (Phone, Email, Location)
  const contactButtons = document.querySelectorAll('[class*="hover:bg-"]');
  contactButtons.forEach(button => {
    const text = button.textContent;
    
    if (text.includes('Gọi ngay') || text.includes('📞')) {
      button.addEventListener('click', () => {
        window.location.href = 'tel:+84901234567';
      });
    } else if (text.includes('Gửi email') || text.includes('✉️')) {
      button.addEventListener('click', () => {
        window.location.href = 'mailto:info@lrfoundation.org';
      });
    } else if (text.includes('Chỉ đường') || text.includes('📍')) {
      button.addEventListener('click', () => {
        window.open('https://maps.google.com/?q=Ho+Chi+Minh+City', '_blank');
      });
    }
  });
});

// Success modal
function showSuccessModal(message) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full animate-scaleIn">
      <div class="text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="material-icons text-green-600 text-4xl">check_circle</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">Thành công!</h3>
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

// Error modal
function showErrorModal(message) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
  modal.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full animate-scaleIn">
      <div class="text-center">
        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span class="material-icons text-red-600 text-4xl">error</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">Lỗi!</h3>
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
}
