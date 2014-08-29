/**
*   <%= _.classify(name) %> Model Description
*/
<% if (jsOption === 'requirejs') { %>
define(function(require) {
    'use strict';

    var <%= _.classify(name) %>Model = Backbone.Model.extend({

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

    return <%= _.classify(name) %>Model;
});<% } else if (jsOption === 'browserify') { %>
'use strict';

var <%= _.classify(name) %>Model = Backbone.Model.extend({

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

module.exports = <%= _.classify(name) %>Model;
<% } %>