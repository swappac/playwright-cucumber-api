import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    // Base URL for all requests
    baseURL: 'https://api.agify.io',

    // Default headers for all requests
    extraHTTPHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // Add any other default headers you need
      // 'Authorization': 'Bearer your-token',
    },
  },
  
  // Other Playwright configurations
  testDir: './features',
  timeout: 30000,
  reporter: [
    ['html'],
    ['json', { outputFile: 'reports/test-results.json' }]
  ],
};

export default config;