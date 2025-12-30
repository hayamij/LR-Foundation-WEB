/**
 * Component Loader for LR Foundation Website
 * Loads shared header and footer components dynamically
 */

(function() {
    'use strict';
    
    // Component configuration
    const COMPONENTS = {
        header: '/components/header.html',
        footer: '/components/footer.html'
    };
    
    /**
     * Load a component from external HTML file
     */
    async function loadComponent(componentName, targetSelector) {
        try {
            const response = await fetch(COMPONENTS[componentName]);
            
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName}: ${response.status}`);
            }
            
            const html = await response.text();
            const targetElement = document.querySelector(targetSelector);
            
            if (targetElement) {
                targetElement.outerHTML = html;
                console.log(`✓ Loaded ${componentName} component`);
                return true;
            } else {
                console.warn(`Target element ${targetSelector} not found for ${componentName}`);
                return false;
            }
        } catch (error) {
            console.error(`Error loading ${componentName}:`, error);
            return false;
        }
    }
    
    /**
     * Initialize mobile menu toggle
     */
    function initMobileMenu() {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
            console.log('✓ Mobile menu initialized');
        }
    }
    
    /**
     * Initialize dark mode toggle
     */
    function initDarkMode() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }
    
    /**
     * Initialize all components
     */
    async function initComponents() {
        console.log('Loading shared components...');
        
        // Load header if placeholder exists
        const headerPlaceholder = document.querySelector('[data-component="header"]');
        if (headerPlaceholder) {
            await loadComponent('header', '[data-component="header"]');
            // Re-initialize mobile menu after header loads
            setTimeout(initMobileMenu, 100);
        }
        
        // Load footer if placeholder exists
        const footerPlaceholder = document.querySelector('[data-component="footer"]');
        if (footerPlaceholder) {
            await loadComponent('footer', '[data-component="footer"]');
        }
        
        // Initialize dark mode
        initDarkMode();
        
        console.log('Components loaded successfully!');
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initComponents);
    } else {
        initComponents();
    }
})();
