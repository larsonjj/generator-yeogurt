/**
*   Main Router Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function (require) {
    'use strict';

    var MainView = require('views/main');

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'default'
        },

        default: function() {
            // Initialize the main view
            new MainView();
        }
    });

    return MainRouter;
});<% } else if (jsOption === 'Browserify') { %>
'use strict';
<% if (jsFramework === 'Backbone + React') { %>
var React = require('react');
var MainComponent = require('./views/main.jsx');
<% } else if ((/Backbone/i).test(jsFramework)) { %>
var MainView = require('./views/main');<% } %>

var MainRouter = Backbone.Router.extend({
    routes: {
        '': 'default'
    },

    default: function() {<% if (jsFramework === 'Backbone + React') { %>
        React.renderComponent(new MainComponent(), document.getElementById('app-wrapper'));<% } else if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize the main view
        new MainView();<% } %>
    }
});

module.exports = MainRouter;
<% } %><% if (jsOption === 'None (Vanilla JavaScript)') { %>
'use strict';

var <%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

(function () {

    // Main Router
    <%= _.camelize(projectName) %>.MainRouter = Backbone.Router.extend({
        routes: {
            '': 'default'
        },

        default: function() {
            // Initialize the main view
            new <%= _.camelize(projectName) %>.MainView();
        }
    });

    // Instantiate Main Router
    new <%= _.camelize(projectName) %>.MainRouter();

    <% if (ieSupport) { %>
    // Enable pushState for compatible browsers
    var enablePushState = true;

    // Disable for older browsers (IE8, IE9 etc)
    var pushState = !!(enablePushState && window.history && window.history.pushState);

    // Start route handling
    Backbone.history.start({ pushState : pushState, root : '/' });

    // Handle pushState for incompatibl browsers
    if (!pushState && window.location.pathname !== '/') {
        window.location.replace('/#' + window.location.pathname);
    }<% } else { %>
    // Start route handling
    Backbone.history.start();
    <% } %>

})();
<% } %>