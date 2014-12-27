// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: [<% if (testFramework === 'jasmine') { %>'jasmine'<% } else if (testFramework === 'mocha') { %>'mocha', 'chai'<% } %>],

        // list of files / patterns to load in the browser
        files: [
            'client/bower_components/jquery/dist/jquery.js',<% if (jsFramework === 'backbone' || jsFramework === 'react') { %>
            'client/bower_components/underscore/underscore.js',
            'client/bower_components/backbone/backbone.js',<% if (useAuth) { %>
            'client/bower_components/jquery.cookie/jquery.cookie.js',<% } %><% if (jsFramework === 'react') { %>
            'test/helpers/phantomjs-shims.js',<% } %><% } %><% if (jsTemplate === 'handlebars') { %>
            'client/bower_components/handlebars/handlebars.runtime.js',<% } else if (jsTemplate === 'jade') { %>'client/bower_components/jade/runtime.js',<% } %><% if (jsFramework === 'backbone') { %>
            'test/scripts/templates.js',<% } %><% if (jsOption === 'requirejs') { %>
            {
                pattern: 'client/bower_components/**/*.js',
                included: false
            }, {
                pattern: 'client/scripts/**/*.js',
                included: false
            }, {
                pattern: 'test/**/*.spec.js',
                included: false
            },
            'node_modules/requirejs/require.js',
            'node_modules/karma-requirejs/lib/adapter.js',
            'test/test-main.js',<% } else if (jsOption === 'browserify') { %>
            'test/scripts/bundle.js'<% } else { %><% if (jsFramework === 'backbone') { %>
            // Load all scripts except ones that require a specific order (ie. 'main' and 'routes')
            'client/scripts/**/!(main|routes).js',
            'client/scripts/routes.js',<% } %>
            'client/scripts/main.js',
            'test/**/*.spec.js'<% } %>
        ],

        // list of files to exclude
        exclude: [<% if (jsOption === 'requirejs') { %>
            'client/scripts/main.js'
        <% } %>],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

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
        browserNoActivityTimeout: 100000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
