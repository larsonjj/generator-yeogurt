/**
*   Main Description
*/

'use strict';
<% if (jsOption ==='RequireJS') { %>require.config({
    paths: {<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>
        react: '../bower_components/jsx-requirejs-plugin/js/react-with-addons-0.10.0',
        JSXTransformer: '../bower_components/jsx-requirejs-plugin/js/JSXTransformer-0.10.0',
        jsx: '../bower_components/jsx-requirejs-plugin/js/jsx',
        text: '../bower_components/jsx-requirejs-plugin/js/text',
        <% } %>app: 'app'
    }<% if (jsFramework === 'Backbone + React' && jsOption === 'RequireJS') { %>,
    jsx: {
        fileExtension: '.jsx'
    }<% } %>
});

require(['app'], function (app) {
    app.init('Welcome to Yeogurt!');
});<% } %>
<% if (jsOption === 'Browserify') { %>var app = require('./app');

app.init('Welcome to Yeogurt!');
<% if (jsFramework === 'Backbone + React') { %>
// Enable React dev tools
window.React = require('react');<% } %>
<% } %>
