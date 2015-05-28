'use strict';

// Site information
var title = '<%= projectName %>';
var description = 'A new Yeogurt site.';

// Local server settings
var host = '127.0.0.1';
var port = '9010';

// URL that site will be served from
var baseUrl = '/';

// Directories
// Relative to project root and used within Grunt tasks
// NOTE: folders prefixed with an underscore (_) will have it removed when moved to build target
// EX: src/_images -> build/images
// NOTE: folders NOT prefixed with underscore (_) will be copied to build target 1 to 1
// EX: src/fonts -> build/fonts
var directories = {
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
  scripts: '_scripts',
  docs: '_autodocs'
};

module.exports = {
  title: title,
  description: description,
  host: host,
  port: port,
  baseUrl: baseUrl,
  directories: directories
};
