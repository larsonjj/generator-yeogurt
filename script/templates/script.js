/**
*   <%= _.classify(name) %> Script Description
*/

<% if (jsOption ==='RequireJS') { %>define(function(require) {

    'use strict';

    var <%= _.classify(name) %> = {
        init: function(msg) {

        }
    };

    return <%= _.classify(name) %>;

});
<% } else if (jsOption ==='Browserify') { %>'use strict';

var <%= _.classify(name) %> = {
    init: function(msg) {

    }
};

module.exports = <%= _.classify(name) %>;<% } else { %>'use strict';
var <%= _.classify(name) %> = {
    init: function(msg) {

    }
};
<% } %>