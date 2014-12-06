/**
*   Application Logic
*/

define(function(require) {
    'use strict';<% if (jsFramework === 'backbone') { %>
    var Router = require('./routes');<% } %>

    var init = function(msg) {<% if (jsFramework === 'backbone') { %>
        // Initialize route(s)
        new Router();
        // Enable pushState for compatible browsers
        var enablePushState = true;

        // Disable for older browsers (IE8, IE9 etc)
        var pushState = !!(enablePushState && window.history && window.history.pushState);

        // Start route handling
        Backbone.history.start({ pushState : pushState, root : '/' });

        // Handle pushState for incompatible browsers
        if (!pushState && window.location.pathname !== '/') {
            window.location.replace('/#' + window.location.pathname);
        }<% } %>
        console.log('Welcome to Yeogurt');
    };

    return {
        init: init
    };
});
