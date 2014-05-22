/*
*   <%= _.camelize(name) %>.js
*/
<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var <%= _.camelize('-' + name.toLowerCase()) %>Router = Backbone.Router.extend({

        routes: {
        },

    });

    return <%= _.camelize('-' + name.toLowerCase()) %>Router;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.camelize('-' + name.toLowerCase()) %>Router = Backbone.Router.extend({

    routes: {
    },

});

module.exports = <%= _.camelize('-' + name.toLowerCase()) %>Router;
<% } %>