/**
 * Forms Module
 * Handles form validation and submission
 */

export function initForms() {
  // Handle donation form
  const donationForm = document.getElementById('donation-form');
  if (donationForm) {
    initDonationForm(donationForm);
  }

  // Handle contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    initContactForm(contactForm);
  }

  console.log('✓ Forms initialized');
}

/**
 * Initialize donation form
 */
function initDonationForm(form) {
  const amountInputs = form.querySelectorAll('input[name="amount"]');
  const customAmountInput = form.querySelector('input[name="custom-amount"]');

  // Handle preset amount selection
  amountInputs.forEach(input => {
    input.addEventListener('change', () => {
      if (customAmountInput) {
        customAmountInput.value = '';
      }
    });
  });

  // Handle custom amount input
  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      amountInputs.forEach(input => {
        input.checked = false;
      });
    });
  }

  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        window.location.href = result.redirectUrl || '/donate/confirm';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  });
}

/**
 * Initialize contact form
 */
function initContactForm(form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Validate required fields
    if (!validateContactForm(data)) {
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  });
}

/**
 * Validate contact form data
 */
function validateContactForm(data) {
  if (!data.name || data.name.trim() === '') {
    alert('Vui lòng nhập tên của bạn');
    return false;
  }

  if (!data.email || !isValidEmail(data.email)) {
    alert('Vui lòng nhập email hợp lệ');
    return false;
  }

  if (!data.message || data.message.trim() === '') {
    alert('Vui lòng nhập nội dung tin nhắn');
    return false;
  }

  return true;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
