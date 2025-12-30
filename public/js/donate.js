/**
 * Donation Page Interactive Features
 * Handles amount selection, payment methods, and form submission
 */

document.addEventListener('DOMContentLoaded', () => {
  const donateForm = document.querySelector('form');
  
  if (!donateForm) return;
  
  // Amount selection buttons
  const amountButtons = document.querySelectorAll('[data-amount]');
  const customAmountInput = document.querySelector('input[placeholder*="Số tiền khác"]');
  let selectedAmount = 0;
  
  amountButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active state from all buttons
      amountButtons.forEach(btn => {
        btn.classList.remove('border-primary', 'bg-primary/5');
        btn.classList.add('border-gray-300');
      });
      
      // Add active state to clicked button
      button.classList.remove('border-gray-300');
      button.classList.add('border-primary', 'bg-primary/5');
      
      // Set selected amount
      selectedAmount = parseInt(button.getAttribute('data-amount'));
      
      // Clear custom amount
      if (customAmountInput) {
        customAmountInput.value = '';
      }
    });
  });
  
  // Custom amount input
  if (customAmountInput) {
    customAmountInput.addEventListener('input', (e) => {
      // Remove active state from preset buttons
      amountButtons.forEach(btn => {
        btn.classList.remove('border-primary', 'bg-primary/5');
        btn.classList.add('border-gray-300');
      });
      
      selectedAmount = parseInt(e.target.value) || 0;
    });
  }
  
  // Frequency toggles (One-time vs Monthly)
  const frequencyButtons = document.querySelectorAll('[data-frequency]');
  let selectedFrequency = 'once';
  
  frequencyButtons.forEach(button => {
    button.addEventListener('click', () => {
      frequencyButtons.forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-gray-100', 'text-gray-700');
      });
      
      button.classList.remove('bg-gray-100', 'text-gray-700');
      button.classList.add('bg-primary', 'text-white');
      
      selectedFrequency = button.getAttribute('data-frequency');
    });
  });
  
  // Payment method selection
  const paymentMethods = document.querySelectorAll('[data-payment]');
  let selectedPayment = 'qr';
  
  paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
      paymentMethods.forEach(m => {
        m.classList.remove('border-primary', 'bg-primary/5');
        m.classList.add('border-gray-300');
      });
      
      method.classList.remove('border-gray-300');
      method.classList.add('border-primary', 'bg-primary/5');
      
      selectedPayment = method.getAttribute('data-payment');
      
      // Show relevant payment info
      showPaymentInfo(selectedPayment);
    });
  });
  
  // Anonymous checkbox
  const anonymousCheckbox = document.querySelector('input[type="checkbox"][id*="anonymous"]');
  let isAnonymous = false;
  
  if (anonymousCheckbox) {
    anonymousCheckbox.addEventListener('change', (e) => {
      isAnonymous = e.target.checked;
    });
  }
  
  // Form submission
  const submitButton = donateForm.querySelector('button[type="submit"]');
  
  donateForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
      donorName: donateForm.querySelector('input[placeholder*="Họ và tên"]')?.value,
      donorEmail: donateForm.querySelector('input[type="email"]')?.value,
      donorPhone: donateForm.querySelector('input[type="tel"]')?.value,
      amount: selectedAmount,
      frequency: selectedFrequency,
      paymentMethod: selectedPayment,
      message: donateForm.querySelector('textarea')?.value,
      isAnonymous: isAnonymous
    };
    
    // Validation
    if (!formData.amount || formData.amount < 10000) {
      showErrorModal('Vui lòng chọn số tiền quyên góp (tối thiểu 10,000 VNĐ)');
      return;
    }
    
    if (!formData.donorName || formData.donorName.trim().length < 2) {
      showErrorModal('Vui lòng nhập họ và tên (ít nhất 2 ký tự)');
      return;
    }
    
    if (!formData.donorEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.donorEmail)) {
      showErrorModal('Vui lòng nhập email hợp lệ');
      return;
    }
    
    if (!formData.donorPhone || !/^(0|\+84)[0-9]{9,10}$/.test(formData.donorPhone.replace(/[\s\-().]/g, ''))) {
      showErrorModal('Vui lòng nhập số điện thoại hợp lệ');
      return;
    }
    
    // Show loading
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="material-icons animate-spin">refresh</span> Đang xử lý...';
    
    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Redirect to confirmation page
        window.location.href = '/donate/confirm';
      } else {
        showErrorModal(result.error || 'Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (error) {
      showErrorModal('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalText;
    }
  });
  
  // Format currency display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };
  
  // Update total display when amount changes
  const updateTotalDisplay = () => {
    const totalDisplay = document.querySelector('[data-total]');
    if (totalDisplay && selectedAmount > 0) {
      totalDisplay.textContent = formatCurrency(selectedAmount);
    }
  };
  
  // Update display on amount change
  if (customAmountInput) {
    customAmountInput.addEventListener('input', updateTotalDisplay);
  }
  
  amountButtons.forEach(button => {
    button.addEventListener('click', updateTotalDisplay);
  });
});

function showPaymentInfo(method) {
  // Show payment-specific instructions
  const infoDiv = document.querySelector('[data-payment-info]') || document.createElement('div');
  infoDiv.setAttribute('data-payment-info', '');
  infoDiv.className = 'mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800';
  
  const messages = {
    qr: 'Quét mã QR để chuyển khoản qua ứng dụng ngân hàng của bạn.',
    wallet: 'Chọn ví điện tử (Momo, ZaloPay, VNPay) để thanh toán.',
    card: 'Nhập thông tin thẻ tín dụng/ghi nợ để hoàn tất quyên góp.',
    bank: 'Chuyển khoản trực tiếp đến tài khoản ngân hàng của chúng tôi.'
  };
  
  infoDiv.innerHTML = `
    <div class="flex items-start gap-3">
      <span class="material-icons text-blue-600">info</span>
      <p class="text-sm text-blue-900 dark:text-blue-100">${messages[method]}</p>
    </div>
  `;
  
  const paymentSection = document.querySelector('[data-payment]')?.closest('div').parentElement;
  if (paymentSection && !document.querySelector('[data-payment-info]')) {
    paymentSection.appendChild(infoDiv);
  }
}

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
