/* global requirejs */
'use strict';

var allTestFiles = [];
var TEST_REGEXP = /Spec\.js$/;

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(file);
    }
});

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/dev/scripts',

    paths: {<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>
        react: '../bower_components/jsx-requirejs-plugin/js/react-with-addons-0.10.0',
        JSXTransformer: '../bower_components/jsx-requirejs-plugin/js/JSXTransformer-0.10.0',
        jsx: '../bower_components/jsx-requirejs-plugin/js/jsx',
        text: '../bower_components/jsx-requirejs-plugin/js/text',
        <% } %>app: 'app'
    }<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>,
    jsx: {
        fileExtension: '.jsx'
    },<% } %>

    // ask Require.js to load these files (all our tests)
    deps: allTestFiles,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});