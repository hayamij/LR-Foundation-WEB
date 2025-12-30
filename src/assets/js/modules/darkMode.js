/**
 * Dark Mode Module
 * Handles dark mode toggle and persistence
 */

export function initDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  
  if (!darkModeToggle) {
    console.warn('Dark mode toggle button not found');
    return;
  }

  // Load saved preference or use system preference
  const savedMode = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = savedMode === 'true' || (!savedMode && prefersDark);

  // Apply initial state
  if (isDark) {
    document.documentElement.classList.add('dark');
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update icon
    const icon = darkModeToggle.querySelector('.material-icons');
    if (icon) {
      icon.textContent = isDarkMode ? 'light_mode' : 'dark_mode';
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('darkMode')) {
      document.documentElement.classList.toggle('dark', e.matches);
    }
  });

  console.log('✓ Dark mode initialized');
}
