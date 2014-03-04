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
        var $ele = $('<p></p>');

        $ele.append('Module loaded!');
        console.log($ele.text());
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
        var $ele = $('<p></p>');

        $ele.append('Module loaded!');
        console.log($ele.text());
    }
};

module.exports = someModule;<% } %>