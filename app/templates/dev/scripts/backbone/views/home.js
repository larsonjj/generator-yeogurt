/**
*   Root View Description
*/
<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';

    // Our overall **HomeView** is the top-level piece of UI.
    var HomeView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#app-wrapper',

        // Compile our stats template
        template: JST['dev/templates/home<% if (jsTemplate === 'Lo-dash (Underscore)') { %>.jst<% } else if (jsTemplate === 'Handlebars') { %>.hbs<% } else if (jsTemplate === 'Jade') { %><% } %>'],

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

    return HomeView;
});<% } else if (jsOption === 'Browserify') { %>'use strict';

// Our overall **HomeView** is the top-level piece of UI.
var HomeView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#app-wrapper',

    // Load up JST template
    template: JST['dev/templates/home<% if (jsTemplate === 'Lo-dash (Underscore)') { %>.jst<% } else if (jsTemplate === 'Handlebars') { %>.hbs<% } else if (jsTemplate === 'Jade') { %><% } %>'],

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

module.exports = HomeView;
<% } %>