/*
*   app.js
*   This file is where all global/app specific javascript should go
*/

<% if (jsOption ==='RequireJS') { %>/* global define */
'use strict';
define([], function () {
    return 'Welcome to Yeogurt!';
});<% } %><% if (jsOption ==='Browserify') { %>
'use strict';
/* jshint unused:false */
/* global $:true */
var $ = require('jquery');
var app = {
    init: function() {
        console.log('Welcome to Yeogurt!');
    }
};

module.exports = app;<% } %>