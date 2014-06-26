/**
*   Example Module Description
*/

<% if (jsOption ==='RequireJS') { %>define(function (require) {

    'use strict';

    var someModule = {
        init: function(msg) {
            var $ele = $('<p></p>');

            $ele.append('Module loaded! - Message: ' + msg);
            console.log($ele.text());
            return $ele.text();
        }
    };

    return someModule;

});
<% } %><% if (jsOption ==='Browserify') { %>'use strict';

var someModule = {
    init: function() {
        var $ele = $('<p></p>');

        $ele.append('Module loaded!');
        console.log($ele.text());
    }
};

module.exports = someModule;<% } %>