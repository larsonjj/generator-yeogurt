/**
*   <%= _.classify(name) %> View Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    var <%= _.camelize('-' + name.toLowerCase()) %>View = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        // Compile our stats template
        template: JST['dev/scripts/templates/<%= _.camelize(name) %>.<% if (jsTemplate === 'Lo-dash (Underscore)') { %>jst<% } else if (jsTemplate === 'Handlebars') { %>hbs<% } else if (jsTemplate === 'Jade') { %>jade<% } else if (jsTemplate === 'Swig') { %>swig<% } %>'],

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

    return <%= _.camelize('-' + name.toLowerCase()) %>View;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

var <%= _.camelize('-' + name.toLowerCase()) %>View = Backbone.View.extend({

    tagName: 'div',

    id: '',

    className: '',

    // Compile our stats template
    template: JST['dev/scripts/templates/<%= _.camelize(name) %>.<% if (jsTemplate === 'Lo-dash (Underscore)') { %>jst<% } else if (jsTemplate === 'Handlebars') { %>hbs<% } else if (jsTemplate === 'Jade') { %>jade<% } else if (jsTemplate === 'Swig') { %>swig<% } %>'],

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

module.exports = <%= _.camelize('-' + name.toLowerCase()) %>View;
<% } %>