const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { findDownloadedFile } = require('./cypress/plugins/file-task');

module.exports = defineConfig({
  e2e: {

    viewportWidth: 1920,
    viewportHeight: 1080,

    watchForFileChanges: false,

    video: true,
    videosFolder: 'cypress/evidencias/videos',

    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/evidencias/screenshots',

    specPattern: "cypress/e2e/**/*.feature",

    baseUrl: "https://www.automationexercise.com",

    downloadsFolder: "cypress/downloads",

    async setupNodeEvents(on, config) {

      // ✔ CUCUMBER MODERNO (badeball)
      await preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      on('task', {
        findDownloadedFile,
      });

      return config;
    },
  },
});