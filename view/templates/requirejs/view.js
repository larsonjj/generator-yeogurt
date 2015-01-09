/**
*   <%= _.classify(name) %> View Description
*/

define(function(require) {
    'use strict';

    var <%= _.classify(name) %> = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        // Compiled template
        template: JST['<%= templateFile %>.<% if (jsTemplate === 'underscore') { %>jst<% } else if (jsTemplate === 'handlebars') { %>hbs<% } else if (jsTemplate === 'jade') { %>jade<% } else if (jsTemplate === 'swig') { %>swig<% } %>'],

        // Delegated events
        events: {},

        // Code that runs when View is initialized
        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }

    });

    return <%= _.classify(name) %>;
});
