const { defineConfig } = require('cypress')
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome', 
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  e2e: {
    baseUrl:  process.env.CYPRESS_BASE_URL || 'https://practice.expandtesting.com/notes/app',  
    supportFile: 'cypress/support/e2e.js',
    specPattern: ['cypress/e2e/**/*.spec.js', 'cypress/api/**/*.spec.js'], 
    setupNodeEvents(on, config) {
      config.env.login_email = process.env.CYPRESS_LOGIN_EMAIL;
      config.env.login_password = process.env.CYPRESS_LOGIN_PASSWORD;
      return config;
    },
  },
})