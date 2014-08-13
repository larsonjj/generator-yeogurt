/**
*   Main View Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function (require) {
    'use strict';

    // Our overall **MainView** is the top-level piece of UI.
    var MainView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#app-wrapper',

        // Compile our stats template
        template: JST['client/templates/main<% if (jsTemplate === 'Lo-dash') { %>.jst<% } else if (jsTemplate === 'Handlebars') { %>.hbs<% } else if (jsTemplate === 'Jade') { %><% } %>'],

        // Delegated events
        events: {},

        // Code that runs when View is initialized
        initialize: function () {
            this.render();
        },

        // Logic to render out template
        render: function () {
            this.$el.html(this.template);
            return this;
        }

    });

    return MainView;
});<% } %><% if (jsOption === 'Browserify') { %>
'use strict';

// Our overall **MainView** is the top-level piece of UI.
var MainView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: '#app-wrapper',

    // Load up JST template
    template: JST['client/templates/main<% if (jsTemplate === 'Lo-dash') { %>.jst<% } else if (jsTemplate === 'Handlebars') { %>.hbs<% } else if (jsTemplate === 'Jade') { %><% } %>'],

    // Delegated events
    events: {},

    // Code that runs when View is initialized
    initialize: function () {
        this.render();
    },

    // Logic to render out template
    render: function () {
        this.$el.html(this.template);
        return this;
    }

});

module.exports = MainView;
<% } %><% if (jsOption === 'None') { %>
'use strict';

var <%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

(function () {

    <%= _.camelize(projectName) %>.MainView  = Backbone.View.extend({
        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: '#app-wrapper',

        // Load up JST template
        template: JST['client/templates/main<% if (jsTemplate === 'Lo-dash') { %>.jst<% } else if (jsTemplate === 'Handlebars') { %>.hbs<% } else if (jsTemplate === 'Jade') { %><% } %>'],

        // Delegated events
        events: {},

        // Code that runs when View is initialized
        initialize: function () {
            this.render();
        },

        // Logic to render out template
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });

})();
<% } %>