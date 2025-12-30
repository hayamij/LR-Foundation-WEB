/**
 * Navigation Handler for LR Foundation Website
 * Automatically updates all navigation links to use proper routing
 */

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
    
    function initNavigation() {
        // Define route mappings
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
            
            // Check if text matches any route
            if (routeMap[text]) {
                link.href = routeMap[text];
                console.log(`Updated link: "${text}" -> ${routeMap[text]}`);
            }
            // Special handling for logo links (usually have nested elements)
            else if (link.querySelector('svg') || link.querySelector('.size-10, .w-10, .w-14')) {
                link.href = '/';
                console.log('Updated logo link -> /');
            }
            // Handle buttons with specific classes
            else if (link.classList.contains('btn') || link.parentElement?.classList.contains('btn')) {
                // Check for donate-related buttons
                if (text.toLowerCase().includes('quyên') || 
                    text.toLowerCase().includes('góp') || 
                    text.toLowerCase().includes('ủng hộ') ||
                    link.classList.contains('bg-secondary') ||
                    link.classList.contains('bg-primary')) {
                    link.href = '/donate';
                    console.log(`Updated button: "${text}" -> /donate`);
                }
            }
        });
        
        // Update buttons with onclick handlers
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            const text = button.textContent.trim();
            
            if (routeMap[text]) {
                button.onclick = function() {
                    window.location.href = routeMap[text];
                };
                button.style.cursor = 'pointer';
                console.log(`Updated button: "${text}" -> ${routeMap[text]}`);
            } else if (text.toLowerCase().includes('quyên') || 
                       text.toLowerCase().includes('góp') ||
                       text.toLowerCase().includes('ủng hộ') ||
                       text.toLowerCase().includes('donate')) {
                button.onclick = function() {
                    window.location.href = '/donate';
                };
                button.style.cursor = 'pointer';
                console.log(`Updated button: "${text}" -> /donate`);
            }
        });
        
        // Handle "Xem thêm", "Tìm hiểu thêm", "Đọc thêm" links
        const actionLinks = document.querySelectorAll('a[href="#"]');
        actionLinks.forEach(link => {
            const text = link.textContent.trim().toLowerCase();
            
            if (text.includes('xem thêm') || text.includes('xem tất cả')) {
                // Context-based routing
                if (document.title.toLowerCase().includes('tin tức') || 
                    link.closest('section')?.textContent.toLowerCase().includes('tin tức')) {
                    link.href = '/news';
                } else {
                    link.href = '/programs';
                }
            } else if (text.includes('tìm hiểu thêm') || text.includes('giới thiệu')) {
                link.href = '/about';
            } else if (text.includes('đọc thêm') || text.includes('chi tiết')) {
                // Check if it's a news or program detail
                if (document.title.toLowerCase().includes('tin tức')) {
                    link.href = '/news/detail/1';
                } else if (document.title.toLowerCase().includes('chương trình')) {
                    link.href = '/programs/detail/1';
                }
            }
        });
        
        console.log('Navigation initialization complete');
    }
})();
