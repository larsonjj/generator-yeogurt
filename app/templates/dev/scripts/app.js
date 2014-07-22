/**
*   App Description
*/
<% if (jsOption === 'RequireJS') { %>
define(function (require) {
    'use strict';
    <% if ((/Backbone/i).test(jsFramework)) { %>
    var Router = require('routes');<% } %>

    var init = function(msg) {
        <% if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize route(s)
        new Router();<% if (ieSupport) { %>
        // Enable pushState for compatible browsers
        var enablePushState = true;

        // Disable for older browsers (IE8, IE9 etc)
        var pushState = !!(enablePushState && window.history && window.history.pushState);

        // Start route handling
        Backbone.history.start({ pushState : pushState, root : '/' });

        if (!pushState && window.location.pathname !== '/') {
            window.location.replace('/#' + window.location.pathname);
        }<% } else { %>
        Backbone.history.start();

        console.log('Welcome to Yeogurt');
        <% } %><% } %>
    };

    return {
        init: init
    };
});<% } else if (jsOption === 'Browserify') { %>
'use strict';
<% if ((/Backbone/i).test(jsFramework)) { %>
var Router = require('./routes');

// Initialize route(s)
new Router();
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
Backbone.history.start();

console.log('Welcome to Yeogurt');<% } %>
<% if (jsFramework === 'Backbone + React') { %>
// Enable React dev tools
window.React = require('react');<% } %>
<% } %><% } else if (jsOption === 'None (Vanilla JavaScript)') { %>
'use strict';<% if (jsFramework === 'Backbone') { %>

// Create global namespaces for Models, Collections, and Views
window.<%= _.classify(projectName) %> = {
    init: function () {
        console.log('Welcome to Yeogurt');
    }
};

$(document).ready(function () {
    <%= _.classify(projectName) %>.init();
});
<% } else { %>

console.log('Welcome to Yeogurt');<% } %><% } %>
