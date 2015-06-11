'use strict';

var config = {
  // Site information
  title: 'Sample',
  description: 'A new Pistacheo application.',

  // Local server settings
  host: '127.0.0.1',
  port: '9010',

  // URL that site will be served from
  baseUrl: '/',

  // Directories
  // Relative to project root and used within Grunt tasks
  // NOTE: folders prefixed with an underscore (_) will have it removed when moved to build target
  // EX: src/_images -> build/images
  // NOTE: folders NOT prefixed with underscore (_) will be copied to build target 1 to 1
  // EX: src/fonts -> build/fonts
  directories: {
    // Source directory: author files location
    source: 'src',

    // Destination directory: build target location
    destination: 'build',

    // Temporary directory: temporary development files location
    temporary: 'tmp',

    // Extra configurable directories<% if (singlePageApplication) { %>
    screens: '_screens',<% } %>
    modules: '_modules',
    layouts: '_layouts',
    images: '_images',
    styles: '_styles',
    scripts: '_scripts'
  }
};

module.exports = config;
