/**
 * Navigation Handler for LR Foundation Website
 * Automatically updates navigation links to use proper routing
 */

(function() {
    'use strict';
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
    
    function initNavigation() {
        const routeMap = {
            'Trang chủ': '/',
            'Trang Chủ': '/',
            'Về Chúng Tôi': '/about',
            'Giới thiệu chung': '/about',
            'Tầm nhìn': '/about',
            'Sứ mệnh': '/about',
            'Đội ngũ': '/about',
            'Đội ngũ nhân sự': '/about',
            'Chương Trình': '/programs',
            'Chương trình': '/programs',
            'Chương Trình - Dự Án': '/programs',
            'Giáo Dục': '/programs',
            'Giáo dục': '/programs',
            'Y Tế': '/programs',
            'Y tế': '/programs',
            'Bác Ái': '/programs',
            'Bác ái': '/programs',
            'Gây quỹ': '/programs',
            'Tin Tức': '/news',
            'Tin tức': '/news',
            'Báo Cáo': '/news',
            'Báo cáo': '/news',
            'Câu chuyện': '/news',
            'Tài liệu': '/news',
            'Công Khai Tài Chính': '/finance',
            'Liên Hệ': '/contact',
            'Liên hệ': '/contact',
            'Quyên Góp': '/donate',
            'Quyên góp': '/donate',
            'Đóng Góp': '/donate',
            'Đóng góp': '/donate',
            'Ủng Hộ': '/donate',
            'Ủng hộ': '/donate',
            'Quyên Góp Ngay': '/donate',
            'Đóng Góp Ngay': '/donate'
        };
        
        // Update all links with href="#"
        const links = document.querySelectorAll('a[href="#"]');
        
        links.forEach(link => {
            const text = link.textContent.trim();
            
            if (routeMap[text]) {
                link.href = routeMap[text];
            }
            else if (link.querySelector('svg') || link.querySelector('.size-10, .w-10, .w-14')) {
                link.href = '/';
            }
            else if (link.classList.contains('btn') || link.parentElement?.classList.contains('btn')) {
                if (text.toLowerCase().includes('quyên') || 
                    text.toLowerCase().includes('góp') || 
                    text.toLowerCase().includes('ủng hộ') ||
                    link.classList.contains('bg-secondary') ||
                    link.classList.contains('bg-primary')) {
                    link.href = '/donate';
                }
            }
        });
        
        // Update buttons with onclick handlers
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            const text = button.textContent.trim();
            
            if (routeMap[text]) {
                button.onclick = () => window.location.href = routeMap[text];
                button.style.cursor = 'pointer';
            } else if (text.toLowerCase().includes('quyên') || 
                       text.toLowerCase().includes('góp') ||
                       text.toLowerCase().includes('ủng hộ') ||
                       text.toLowerCase().includes('donate')) {
                button.onclick = () => window.location.href = '/donate';
                button.style.cursor = 'pointer';
            }
        });
        
        // Handle "Xem thêm", "Tìm hiểu thêm" links
        const actionLinks = document.querySelectorAll('a[href="#"]');
        actionLinks.forEach(link => {
            const text = link.textContent.trim().toLowerCase();
            
            if (text.includes('xem thêm') || text.includes('xem tất cả')) {
                if (document.title.toLowerCase().includes('tin tức') || 
                    link.closest('section')?.textContent.toLowerCase().includes('tin tức')) {
                    link.href = '/news';
                } else {
                    link.href = '/programs';
                }
            } else if (text.includes('tìm hiểu thêm') || text.includes('giới thiệu')) {
                link.href = '/about';
            } else if (text.includes('đọc thêm') || text.includes('chi tiết')) {
                if (document.title.toLowerCase().includes('tin tức')) {
                    link.href = '/news/detail/1';
                } else if (document.title.toLowerCase().includes('chương trình')) {
                    link.href = '/programs/detail/1';
                }
            }
        });
    }
})();
