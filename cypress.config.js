const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({ plugins: [createEsbuildPlugin.default(config)] })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    reportDir: './cypress/reports/mochawesome-report',
    reportPageTitle: 'Shan Test report',
    charts: true,
    overwrite: false,
    html: false,
    json: true,
  },

  screenshotsFolder: './cypress/reports/mochawesome-report/assets',
  defaultCommandTimeout: 100000,
  pageLoadTimeout: 100000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    //supportFile:false,
    baseUrl: 'https://example.cypress.io',
    specPattern: [
      './cypress/e2e/**/*.{feature,features}',
      './cypress/e2e/[filepath]/**/*.{feature,features}',
    ],
  },
});
