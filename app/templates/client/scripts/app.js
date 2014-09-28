/**
*   Application Logic
*/
<% if (jsOption === 'requirejs') { %>
define(function(require) {
    'use strict';<% if (jsFramework === 'backbone') { %>
    var Router = require('./routes');<% } %>

    var init = function(msg) {<% if (jsFramework === 'backbone') { %>
        // Initialize route(s)
        new Router();<% if (ieSupport) { %>
        // Enable pushState for compatible browsers
        var enablePushState = true;

        // Disable for older browsers (IE8, IE9 etc)
        var pushState = !!(enablePushState && window.history && window.history.pushState);

        // Start route handling
        Backbone.history.start({ pushState : pushState, root : '/' });

        // Handle pushState for incompatible browsers
        if (!pushState && window.location.pathname !== '/') {
            window.location.replace('/#' + window.location.pathname);
        }<% } else { %>
        Backbone.history.start();<% } %><% } %>

        console.log('Welcome to Yeogurt');
    };

    return {
        init: init
    };
});<% } else if (jsOption === 'browserify') { %>
'use strict';
<% if (jsFramework === 'backbone' || jsFramework === 'react') { %>
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

// Handle pushState for incompatible browsers
if (!pushState && window.location.pathname !== '/') {
    window.location.replace('/#' + window.location.pathname);
}<% } else { %>
Backbone.history.start();<% } %><% if (jsFramework === 'react') { %>

// Enable React dev tools
window.React = require('react');<% } %>
<% } %>
console.log('Welcome to Yeogurt');<% } else if (jsOption === 'none') { %>
'use strict';<% if (jsFramework === 'backbone') { %>

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
