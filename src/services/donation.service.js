class DonationService {
    getDonationMethods() {
        return [
            {
                id: 'bank-transfer',
                name: 'Chuyển khoản ngân hàng',
                icon: 'bank',
                description: 'Chuyển khoản trực tiếp qua tài khoản ngân hàng',
                details: {
                bankName: 'Ngân hàng Vietcombank',
                accountNumber: '1234567890',
                accountName: 'QUỸ BÔNG HỒNG NHỎ',
                branch: 'Chi nhánh Hà Nội'
                }
            },
            {
                id: 'momo',
                name: 'Ví MoMo',
                icon: 'mobile',
                description: 'Quét mã QR hoặc chuyển khoản qua MoMo',
                details: {
                phoneNumber: '0123456789',
                qrCode: '/images/qr/momo-qr.png'
                }
            },
            {
                id: 'credit-card',
                name: 'Thẻ tín dụng',
                icon: 'credit-card',
                description: 'Thanh toán trực tuyến bằng thẻ Visa/Master/JCB',
                details: {
                note: 'Hệ thống thanh toán an toàn và bảo mật'
                }
            }
        ];
    }

    getSuggestedAmounts() {
        return [
            {
                amount: 100000,
                label: '100.000đ',
                description: 'Mua sách vở cho 1 em'
            },
            {
                amount: 500000,
                label: '500.000đ',
                description: 'Bữa ăn dinh dưỡng cho 1 tháng'
            },
            {
                amount: 1000000,
                label: '1.000.000đ',
                description: 'Học phí cho 1 học kỳ'
            },
            {
                amount: 5000000,
                label: '5.000.000đ',
                description: 'Hỗ trợ phẫu thuật nhỏ'
            }
        ];
    }

    validateDonation(data) {
        const errors = [];

        if (!data.amount || data.amount < 10000) {
            errors.push('Số tiền quyên góp tối thiểu là 10.000 VNĐ');
        }

        if (!data.donorName || data.donorName.trim().length < 2) {
            errors.push('Vui lòng nhập họ tên');
        }

        if (!data.email || !this.validateEmail(data.email)) {
            errors.push('Email không hợp lệ');
        }

        if (!data.phone || !this.validatePhone(data.phone)) {
            errors.push('Số điện thoại không hợp lệ');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    validatePhone(phone) {
        const re = /^[0-9]{10,11}$/;
        return re.test(phone.replace(/\s/g, ''));
    }

    async processDonation(data) {
        const validation = this.validateDonation(data);
        
        if (!validation.isValid) {
            return {
                success: false,
                errors: validation.errors
            };
        }

        console.log('Processing donation:', data);

        return {
            success: true,
            message: 'Cảm ơn sự đóng góp của bạn!',
            transactionId: `TXN${Date.now()}`,
            data: {
                amount: data.amount,
                donorName: data.donorName,
                email: data.email
            }
        };
    }

    getDonationPrograms() {
        return [
            {
                id: 'general',
                name: 'Quỹ chung',
                description: 'Hỗ trợ cho tất cả các chương trình của Quỹ'
            },
            {
                id: 'education',
                name: 'Hỗ trợ Giáo dục',
                description: 'Học bổng, sách vở, xây dựng trường học'
            },
            {
                id: 'healthcare',
                name: 'Y tế & Sức khỏe',
                description: 'Khám chữa bệnh, phẫu thuật, dinh dưỡng'
            },
            {
                id: 'social',
                name: 'Bác ái Xã hội',
                description: 'Xây nhà, cứu trợ thiên tai, chăm sóc người già'
            }
        ];
    }
}

module.exports = new DonationService();
