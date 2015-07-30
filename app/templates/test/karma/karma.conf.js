// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';
var path = require('path');
var pjson = require('./package.json');
var config = pjson.config;
var dirs = config.directories;
var testFiles = path.join(__dirname, dirs.source, '**/*.test.js');
var preprocessors = {};
preprocessors[testFiles] = ['browserify'];

var karmaConf = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['browserify'<% if (testFramework === 'jasmine') { %>, 'jasmine'<% } else if (testFramework === 'mocha') { %>, 'mocha', 'chai'<% } %>],

    // list of files / patterns to load in the browser
    files: [
      './phantomjs-shims.js',
      testFiles
    ],

    // list of files to exclude
    exclude: [],

    preprocessors: preprocessors,

    browserify: {
      debug: true,
      transform: [
        require('envify'),
        require('babelify')
      ]
    },

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
    browsers: ['PhantomJS'],

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
