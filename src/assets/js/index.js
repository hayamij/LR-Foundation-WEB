/**
 * Main JavaScript Entry Point
 * LR Foundation WEB Application
 */

// Import CSS
import '../css/input.css';

// Import modules
import { initNavigation } from './modules/navigation';
import { initDarkMode } from './modules/darkMode';
import { initAnimations } from './modules/animations';
import { initForms } from './modules/forms';

/**
 * Application Initialization
 */
class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    console.log('🌹 LR Foundation WEB - Initializing...');

    try {
      // Initialize all modules
      initNavigation();
      initDarkMode();
      initAnimations();
      initForms();

      console.log('✅ Application initialized successfully');
    } catch (error) {
      console.error('❌ Application initialization failed:', error);
    }
  }
}

// Start the application
new App();

// Export for use in other scripts if needed
export default App;
