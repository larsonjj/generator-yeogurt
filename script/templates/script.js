/**
*   <%= _.classify(name) %> Script Description
*/
<% if (jsOption ==='RequireJS') { %>
define(function(require) {

    'use strict';

    var init = function() {
        // Intialize module
    };

    return init;

});
<% } else if (jsOption ==='Browserify') { %>
'use strict';

var init = function() {
    // Intialize module
};

module.exports = init;
<% } else { %>'use strict';
var <%= _.classify(name) %> = (function() {
    var init = function() {
         // Intialize module
    };

    return init;
}());
<% } %>