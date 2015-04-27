// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

var karmaConf = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: [<% if (testFramework === 'jasmine') { %>'jasmine'<% } else if (testFramework === 'mocha') { %>'mocha', 'chai'<% } %>],

    // list of files / patterns to load in the browser
    files: [<% if (jsFramework !== 'react') { %>
      'node_modules/jquery/dist/jquery.js',<% } %><% if (jsFramework === 'angular') { %>
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/angular-route/angular-route.js',<% } %><% if (jsFramework === 'backbone') { %>
      'node_modules/backbone/node_modules/underscore/underscore.js',
      'node_modules/backbone/backbone.js',<% } %><% if (jsFramework === 'react') { %>
      'src/_vendor/phantomjs-shims.js',<% } %><% if (jsTemplate === 'handlebars') { %>
      'node_modules/handlebars/dist/handlebars.runtime.js',<% } else if (jsTemplate === 'jade') { %>'node_modules/jade/runtime.js',<% } %><% if (jsFramework === 'backbone') { %>
      '.tmp/scripts/templates.js',<% } %><% if (jsOption === 'requirejs') { %>
      'node_modules/requirejs/require.js',
      'src/*scripts/main.karma.js',
      {
        pattern: 'src/*scripts/**/*.js',
        included: false
      }, {
        pattern: 'src/**/*.spec.js',
        included: false
      },
      // Karma adapter to run tests (must be loaded last)
      'node_modules/karma-requirejs/lib/adapter.js',<% } else if (jsOption === 'browserify') { %>
      '.tmp/scripts/bundle.js'<% } else { %><% if (jsFramework === 'backbone') { %>
      // Load all scripts except ones that require a specific order (ie. 'main' and 'routes')
      'src/*scripts/**/!(main|routes).js',<% if (jsFramework === 'backbone' && jsOption === 'none') { %>
      'src/**/_layouts/**/*.js',<% } %>
      'src/*scripts/routes.js',<% } %><% if (jsFramework !== 'angular') { %>
      'src/*scripts/main.js',
      'src/**/*.spec.js'<% } %><% } %>
    ],

    // list of files to exclude
    exclude: [<% if (jsOption === 'requirejs') { %>
      'src/*scripts/main.js'
    <% } %>],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // Setup to allow external devices to access karma tests
    // Change to '127.0.0.1' to disallow external access
    host: '0.0.0.0',

    // web server port
    port: 9011,

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // If browser does not have any activity for given timeout [ms], kill it
    browserNoActivityTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};

module.exports = karmaConf;
