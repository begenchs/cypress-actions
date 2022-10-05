const { defineConfig } = require('cypress');
/**
 * @type {Cypress.PluginConfig}
 */

module.exports = defineConfig({
  projectId: 'tzzaac',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-log-to-output').install(on)
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  experimentalStudio: true,
  video: false,
});
