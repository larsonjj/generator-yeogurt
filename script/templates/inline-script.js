/*
*   <%= _.slugify(name.toLowerCase()) %>.js
*/
<% if (jsOption ==='RequireJS') { %>'use strict';

// Asyncronous with module loading
require(['domReady', 'jquery'], function (domReady, $) {
    domReady(function () {
        console.log('<%= _.slugify(name.toLowerCase()) %> script loaded');
        console.log($('body'));
    });
});
<% } %><% if (jsOption ==='Browserify') { %>/*global $:true */
'use strict';

$(function () {
    console.log('<%= _.slugify(name.toLowerCase()) %> script loaded');
});<% } %>
