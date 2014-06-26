/**
*   <%= _.classify(name) %> Router Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var <%= _.classify(name) %>Router = Backbone.Router.extend({

        routes: {
        },

    });

    return <%= _.classify(name) %>Router;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.classify(name) %>Router = Backbone.Router.extend({

    routes: {
    },

});

module.exports = <%= _.classify(name) %>Router;
<% } %>