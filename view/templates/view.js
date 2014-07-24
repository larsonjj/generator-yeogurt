/**
*   <%= _.classify(name) %> View Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function (require) {
    'use strict';

    var <%= _.classify(name) %>View = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        // Compile our stats template
        template: JST['client/templates/<%= _.camelize(name) %>.<% if (jsTemplate === 'Lo-dash (Underscore)') { %>jst<% } else if (jsTemplate === 'Handlebars') { %>hbs<% } else if (jsTemplate === 'Jade') { %>jade<% } else if (jsTemplate === 'Swig') { %>swig<% } %>'],

        // Delegated events
        events: {},

        // Code that runs when View is initialized
        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template);
            return this;
        }

    });

    return <%= _.classify(name) %>View;
});<% } else if (jsOption === 'Browserify') { %>
'use strict';

var <%= _.classify(name) %>View = Backbone.View.extend({

    tagName: 'div',

    id: '',

    className: '',

    // Compile our stats template
    template: JST['client/templates/<%= _.camelize(name) %>.<% if (jsTemplate === 'Lo-dash (Underscore)') { %>jst<% } else if (jsTemplate === 'Handlebars') { %>hbs<% } else if (jsTemplate === 'Jade') { %>jade<% } else if (jsTemplate === 'Swig') { %>swig<% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(this.template);
        return this;
    }

});

module.exports = <%= _.classify(name) %>View;
<% } %>