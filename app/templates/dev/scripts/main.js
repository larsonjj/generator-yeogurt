/**
*   Main Description
*/

'use strict';
<% if (jsOption ==='RequireJS') { %>require.config({
    paths: {
        app: 'app'
    }
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
