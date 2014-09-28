/**
*   <%= _.classify(name) %> Model Description
*/
<% if (jsOption === 'requirejs') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }

    });

    return <%= _.classify(name) %>;
});<% } else if (jsOption === 'browserify') { %>
'use strict';

var <%= _.classify(name) %> = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        return response;
    }

});

module.exports = <%= _.classify(name) %>;
<% } %>