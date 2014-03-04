/*
*   <%= _.slugify(name.toLowerCase()) %>.js
*/
<% if (jsOption ==='RequireJS') { %>define([
    // module dependencies
    'jquery'
], function ($) {

    'use strict';

    // private function
    var init = function() {
        var $ele = $('<p></p>');

        $ele.append('<%= name %> loaded!');
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
var <%= name %> = {
    init: function() {
        var $ele = $('<p></p>');

        $ele.append('<%= name %> loaded!');
        console.log($ele.text());
    }
};

module.exports = <%= name %>;<% } %>