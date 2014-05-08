/*
*   main.js
*   This file is where all scripts will be configured and/or imported
*/

'use strict';
<% if (jsOption ==='RequireJS') { %>require.config({
    paths: {
        app: 'app'
    }
});

require(['app'], function (app) {
    // use app here
    app.init('Welcome to Yeogurt!');
    console.log('Running jQuery %s', $().jquery);
});<% } %>
<% if (jsOption ==='Browserify') { %>var app = require('./app');

app.init('Welcome to Yeogurt!');
<% } %>