'use strict';

var config = {
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
    source: 'src',
    destination: 'build',
    temporary: 'tmp',<% if (useDashboard) { %>
    docs: '_docs',<% } %>
    modules: '_modules',
    layouts: '_layouts',
    images: '_images',
    styles: '_styles',
    scripts: '_scripts',
    data: '_data',
  }
};

module.exports = config;
