/*
*   root.js
*/
<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    // Our overall **RootView** is the top-level piece of UI.
    var RootView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: 'body',

        // Compile our stats template
        template: JST['dev/scripts/templates/root<% if (jsTemplate === 'Lo-dash (Underscore)') { %>.jst<% } else if (jsTemplate === 'Handlebars') { %>.hbs<% } else if (jsTemplate === 'Jade') { %><% } %>'],

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

    return RootView;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

// Our overall **RootView** is the top-level piece of UI.
var RootView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: 'body',

    // Compile our stats template
    template: JST['dev/scripts/templates/root<% if (jsTemplate === 'Lo-dash (Underscore)') { %>.jst<% } else if (jsTemplate === 'Handlebars') { %>.hbs<% } else if (jsTemplate === 'Jade') { %><% } %>'],

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

module.exports = RootView;
<% } %>