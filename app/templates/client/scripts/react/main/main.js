/**
*   Application Logic
*/

'use strict';

var app = require('./app');
var userActions = require('./actions/user');
var ActionTypes = require('./constants/action-types');

// Handle route and page changes
app.dispatcher.register(function(payload) {

    var action = payload.action;

    if (action.actionType === ActionTypes.SET_CURRENT_ROUTE) {
        app.router.setRoute(action.route);
    }

    else if (action.actionType === ActionTypes.SET_CURRENT_PAGE) {
        // Check to see if code is running in the browser
        if (typeof window === 'undefined') {
            // Set current page title
            document.title = action.page.title;
        }
    }

    return true; // No errors.  Needed by promise in Dispatcher.
});<% if (useAuth) { %>

// Check the auth status upon initialization,
// should happen before rendering any templates
userActions.isAuthenticated({

    // Start backbone routing once we have captured a user's auth status
    complete: function() {

        // Enable pushState for compatible browsers
        var enablePushState = true;

        // Detect is pushState is available
        var pushState = !!(enablePushState && window.history && window.history.pushState);

        if (pushState) {
            app.router.configure({
                html5history: true
            }).init();
        } else {
            app.router.init();
        }

        // Handle pushState for incompatible browsers (IE9 and below)
        if (!pushState && window.location.pathname !== '/') {
            window.location.replace('/#' + window.location.pathname);
        }

    }

});<% } else { %>
// Enable pushState for compatible browsers
var enablePushState = true;

// Detect is pushState is available
var pushState = !!(enablePushState && window.history && window.history.pushState);

if (pushState) {
    app.router.configure({
        html5history: true
    }).init();
} else {
    app.router.init();
}

// Handle pushState for incompatible browsers (IE9 and below)
if (!pushState && window.location.pathname !== '/') {
    window.location.replace('/#' + window.location.pathname);
}<% } %>

// Give access to app globally
window.app = app;

console.log('Welcome to Yeogurt');
