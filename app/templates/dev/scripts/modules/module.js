/*
*   module.js
*   This is just an example file showing basic use of component scripts
*/
<% if (jsOption ==='RequireJS') { %>define([
    // module dependencies
    'jquery'
], function ($) {

    'use strict';

    // private function
    var init = function() {
        console.log($('body'));
    };

    // Public API
    return {
        // run private initialize function
        init: init
    };

});
<% } %><% if (jsOption ==='Browserify') { %>'use strict';

// private function
var someModule = {
    init: function() {
        console.log($('body'));
    }
};

module.exports = someModule;<% } %>