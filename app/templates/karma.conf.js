// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'<% if (jsOption === 'RequireJS') { %>,'requirejs'<% } else if (jsOption === 'Browserify') { %>,'browserify'<% } %>],

        // list of files / patterns to load in the browser
        files: [<% if (jsOption === 'RequireJS') { %>
            {
                pattern: 'dev/bower_components/**/*.js',
                included: false
            }, {
                pattern: 'dev/scripts/**/*.js',
                included: false
            }, {
                pattern: 'test/**/*Spec.js',
                included: false
            },

            'test/test-main.js'<% } else if (jsOption === 'Browserify') { %>
            'test/spec/*.js'<% } else { %>
            'dev/bower_components/jquery/jquery.js',
            'dev/scripts/*.js',
            'test/spec/*.js'<% } %>
        ],

        // list of files to exclude
        exclude: [<% if (jsOption === 'RequireJS') { %>
            'dev/scripts/main.js'
        <% } %>],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // web server port
        port: 8080,

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
        browsers: ['Chrome'],<% if (jsOption === 'Browserify') { %>

        // Browserify config (all optional)
        browserify: {
            // extensions: ['.coffee'],
            // ignore: [],
            transform: ['browserify-shim'],
            // debug: true,
            // noParse: ['jquery'],
            watch: true,
        },

        // Add browserify to preprocessors
        preprocessors: {'test/spec/*': ['browserify']},<% } %>

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
