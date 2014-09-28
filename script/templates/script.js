/**
*   <%= _.classify(name) %> Script Description
*/
<% if (jsOption === 'requirejs') { %>
define(function(require) {

    'use strict';

    var init = function() {
        // Intialize module
    };

    return {
        init: init
    };

});
<% } else if (jsOption === 'browserify') { %>
'use strict';

var <%= _.classify(name) %> = (function() {

    var init = function() {
         // Intialize module
    };

    return {
        init: init
    };

})();

module.exports = <%= _.classify(name) %>;
<% } else { %>'use strict';
var <%= _.classify(name) %> = (function() {

    var init = function() {
         // Intialize module
    };

    return init;

}());
<% } %>