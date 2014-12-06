/**
*   Application Logic
*/

'use strict';
<% if (jsFramework === 'backbone' || jsFramework === 'react') { %>
var Router = require('./routes');

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
}<% if (jsFramework === 'react') { %>

// Enable React dev tools
window.React = require('react');<% } %>
<% } %>
console.log('Welcome to Yeogurt');
