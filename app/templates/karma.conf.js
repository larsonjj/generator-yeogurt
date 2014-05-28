// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: [<% if (testFramework === 'Jasmine') { %>'jasmine'<% } else if (testFramework === 'Mocha + Chai') { %>'mocha', 'chai'<% } %><% if (jsOption === 'Browserify') { %>,'browserify'<% } %>],

        // list of files / patterns to load in the browser
        files: [
            'dev/bower_components/jquery/dist/jquery.js',<% if ((/Backbone/i).test(jsFramework)) { %>
            'dev/bower_components/underscore/underscore.js',
            'dev/bower_components/backbone/backbone.js',<% } %><% if (jsFramework === 'Backbone + React') { %>
            'dev/bower_components/backbone-react-component/lib/component.js',<% } %><% if (jsTemplate === 'Handlebars') { %>
            'dev/bower_components/handlebars/handlebars.runtime.js',<% } else if (jsTemplate === 'Jade') { %>'dev/bower_components/jade/runtime.js',<% } %><% if (jsFramework === 'Backbone') { %>
            '.tmp/templates.js',<% } %><% if (jsOption === 'RequireJS') { %>
            {
                pattern: 'dev/bower_components/**/*.js',
                included: false
            }, {
                pattern: 'dev/scripts/**/*.<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>{js,jsx}<% } else { %>js<% } %>',
                included: false
            }, {
                pattern: 'test/**/*-spec.js',
                included: false
            },
            'node_modules/requirejs/require.js',
            'node_modules/karma-requirejs/lib/adapter.js',
            'test/test-main.js',<% } else if (jsOption === 'Browserify') { %>
            'test/**/*-spec.js'<% } else { %>
            'dev/scripts/*.js',
            'test/**/*-spec.js'<% } %>
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
            // transform: ['browserify-shim'],<% if (jsFramework === 'Backbone + React') { %>
            transform: [require('grunt-react').browserify],<% } %>
            // debug: true,
            // noParse: ['jquery'],
            watch: true,
        },

        // Add browserify to preprocessors
        preprocessors: {'test/**/*-spec.js': ['browserify']},<% } %>

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
