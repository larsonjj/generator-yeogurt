/**
*   <%= _.classify(name) %> Model Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var <%= _.camelize('-' + name.toLowerCase()) %>Model = Backbone.Model.extend({

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

    return <%= _.camelize('-' + name.toLowerCase()) %>Model;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.camelize('-' + name.toLowerCase()) %>Model = Backbone.Model.extend({

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

module.exports = <%= _.camelize('-' + name.toLowerCase()) %>Model;
<% } %>