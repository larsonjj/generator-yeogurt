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
// NOTE: folders NOT prefixed with underscore (_) will be copied to build target
// EX: src/fonts -> build/fonts
var directories = {
  // Source directory: author files location
  source: 'src',

  // Destination directory: build target location
  destination: 'build',

  // Temporary directory: temporary development files location
  temporary: '.tmp',<% if (singlePageApplication) { %>
  screens: '_screens',<% } %>
  modules: '_modules',
  layouts: '_layouts',
  images: '_images',
  styles: '<% if (cssOption !== 'css') { %>_<% } %>styles',
  scripts: '<% if (jsOption !== 'none' || jsFramework === 'angular') { %>_<% } %>scripts',
  docs: '_autodocs'
};

// Concatenate and minify input files to a single output file
var process = {
  scripts: {
    // Vendor/Third-Party scripts
    vendor: {
      // Input script files relative to project root
      input: [
        'node_modules/jquery/dist/jquery.js',<% if (jsFramework === 'backbone') { %>
        'node_modules/backbone/node_modules/underscore/underscore.js',
        'node_modules/backbone/backbone.js',<% } %><% if (jsFramework === 'angular') { %>
        'node_modules/angular/angular.js',
        'node_modules/angular-route/angular-route.js',
        'node_modules/json3/lib/json3.js',<% } %><% if (jsTemplate === 'handlebars') { %>
        'node_modules/handlebars/dist/handlebars.runtime.js',<% } else if (jsTemplate === 'jade') { %>
        'node_modules/jade/runtime.js'<% } %>
      ],
      // Output script file relative to build target
      // 'grunt serve' -> <temporary directory>/<scripts directory>/global.js
      // 'grunt build' -> <destination directory>/<scripts directory>/global.js
      output: 'vendor.js'
    }
  },
  styles: {
    // Vendor/Third-Party styles
    vendor: {
      // Input style files relative to project root
      input: [
        'node_modules/normalize.css/normalize.css'
      ],
      // Output style file relative to build target
      // 'grunt serve' -> <temporary directory>/<styles directory>/global.js
      // 'grunt build' -> <destination directory>/<styles directory>/global.js
      output: 'vendor.css'
    }
  }
};

module.exports = {
  title: title,
  description: description,
  host: host,
  port: port,
  baseUrl: baseUrl,
  directories: directories,
  process: process
};
