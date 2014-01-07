<% if (jsOption ==='RequireJS') { %>/* global define */
'use strict';
define([], function () {
    return 'Welcome to Yeogurt!';
});<% } %>
<% if (jsOption ==='Browserify') { %>
'use strict';
/* jshint unused:false */
/* global jquery:false */
var $ = require('jquery');
var app = {
    init: function() {
        console.log('Welcome to Yeogurt!');
    }
};

module.exports = app;<% } %>