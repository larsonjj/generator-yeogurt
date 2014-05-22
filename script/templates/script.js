/*
*   <%= _.camelize(name) %>.js
*/
<% if (jsOption ==='RequireJS') { %>define(function(require) {

    'use strict';

    // private function
    var init = function(msg) {
        var $ele = $('<p></p>');

        $ele.append('<%= name %> loaded! - Message: ' + msg);
        console.log($ele.text());
        return $ele.text() + 'initialized';
    };

    // Public API
    return {
        // run private initialize function
        init: init
    };

});
<% } else if (jsOption ==='Browserify') { %>'use strict';

// private function
var <%= camelCase(name) %> = {
    init: function(msg) {
        var $ele = $('<p></p>');

        $ele.append('<%= name %> loaded! - Message: ' + msg);
        console.log($ele.text());
        return $ele.text() + 'initialized';
    }
};

module.exports = <%= name %>;<% } else { %>'use strict';
var <%= camelCase(name) %> = {
    init: function(msg) {
        var $ele = $('<p></p>');

        $ele.append('<%= name %> loaded! - Message: ' + msg);
        console.log($ele.text());
        return $ele.text() + 'initialized';
    }
};
<% } %>