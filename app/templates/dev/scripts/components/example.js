<% if (jsOption ==='RequireJS') { %>'use strict';

// Asyncronous with module loading
require(['domReady', 'jquery'], function (domReady, $) {
    domReady(function () {
        console.log($('body'));
    });
});
<% } %>
<% if (jsOption ==='Browserify') { %>/*global $:false */
'use strict';

$(function () {
    console.log($('body'));
});<% } %>