const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'tzzaac',
  experimentalStudio: true,
  video: true,
  env: {
    REACT_APP_MOVIE_API: 'fake'
  }
});
