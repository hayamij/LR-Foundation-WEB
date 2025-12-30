/**
 * Validation Utilities
 * Các hàm tiện ích để validate dữ liệu
 */

/**
 * Validate email
 */
const isValidEmail = (email) => {
  if (!email) return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
const isValidPhone = (phone) => {
    if (!phone) return false;
    const cleaned = phone.replace(/\s/g, '');
    const re = /^(0|\+84)[0-9]{9,10}$/;
    return re.test(cleaned);
};

const isValidUrl = (url) => {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
};

const isRequired = (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string') return value.trim().length > 0;
    return true;
};

const minLength = (value, min) => {
    if (!value) return false;
    return value.toString().length >= min;
};

const maxLength = (value, max) => {
    if (!value) return true;
    return value.toString().length <= max;
};

const inRange = (value, min, max) => {
    const num = Number(value);
    if (isNaN(num)) return false;
    return num >= min && num <= max;
};

const sanitizeHtml = (str) => {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
};

const validateForm = (data, rules) => {
    const errors = {};
    
    for (const [field, fieldRules] of Object.entries(rules)) {
        const value = data[field];
        
        if (fieldRules.required && !isRequired(value)) {
        errors[field] = fieldRules.messages?.required || `${field} là bắt buộc`;
        continue;
        }
        
        if (value) {
        if (fieldRules.email && !isValidEmail(value)) {
            errors[field] = fieldRules.messages?.email || 'Email không hợp lệ';
        }
        
        if (fieldRules.phone && !isValidPhone(value)) {
            errors[field] = fieldRules.messages?.phone || 'Số điện thoại không hợp lệ';
        }
        
        if (fieldRules.url && !isValidUrl(value)) {
            errors[field] = fieldRules.messages?.url || 'URL không hợp lệ';
        }
        
        if (fieldRules.minLength && !minLength(value, fieldRules.minLength)) {
            errors[field] = fieldRules.messages?.minLength || 
            `${field} phải có ít nhất ${fieldRules.minLength} ký tự`;
        }
        
        if (fieldRules.maxLength && !maxLength(value, fieldRules.maxLength)) {
            errors[field] = fieldRules.messages?.maxLength || 
            `${field} không được quá ${fieldRules.maxLength} ký tự`;
        }
        
        if (fieldRules.min !== undefined && fieldRules.max !== undefined) {
            if (!inRange(value, fieldRules.min, fieldRules.max)) {
            errors[field] = fieldRules.messages?.range || 
                `${field} phải trong khoảng ${fieldRules.min} - ${fieldRules.max}`;
            }
        }
        }
    }
  
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

module.exports = {
    isValidEmail,
    isValidPhone,
    isValidUrl,
    isRequired,
    minLength,
    maxLength,
    inRange,
    sanitizeHtml,
    validateForm
};
