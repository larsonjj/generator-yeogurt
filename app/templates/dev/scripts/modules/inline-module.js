/*
*   inline-module.js
*   This is just an example file showing basic use of component scripts
*/
<% if (jsOption ==='RequireJS') { %>'use strict';

// Asyncronous with module loading
require(['domReady', 'jquery'], function (domReady, $) {
    domReady(function () {
        console.log('inline-module script loaded');
        console.log($('body'));
    });
});
<% } %><% if (jsOption ==='Browserify') { %>/*global $:true */
'use strict';

$(function () {
    console.log('inline-module script loaded');
});<% } %>