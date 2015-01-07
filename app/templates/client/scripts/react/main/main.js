/**
*   Application Logic
*/

'use strict';

var Router = require('director').Router;
var routes = require('./routes');
var Dispatcher = require('./dispatchers/default');
var userActions = require('./actions/user');
var ActionTypes = require('./constants/action-types');

// Setup router
var router = new Router(routes);<% if (useAuth) { %>

// Check the auth status upon initialization,
// should happen before rendering any templates
userActions.isAuthenticated({

    // Start routing once we have captured a user's auth status
    complete: function() {

        // Enable pushState for compatible browsers
        var enablePushState = true;

        // Detect is pushState is available
        var pushState = !!(enablePushState && window.history && window.history.pushState);

        if (pushState) {
            router.configure({
                html5history: true
            }).init();
        } else {
            router.init();
        }

        // Handle pushState for incompatible browsers (IE9 and below)
        if (!pushState && window.location.pathname !== '/') {
            window.location.replace('/#' + window.location.pathname);
        }

        // Handle route and page changes
        Dispatcher.register(function(payload) {

            var action = payload.action;

            if (action.actionType === ActionTypes.SET_CURRENT_ROUTE) {
                router.setRoute(action.route);
            }

            else if (action.actionType === ActionTypes.SET_CURRENT_PAGE) {
                // Set current page title
                document.title = action.page.title;
            }

            return true; // No errors.  Needed by promise in Dispatcher.
        });

    }

});<% } else { %>
// Enable pushState for compatible browsers
var enablePushState = true;

// Detect is pushState is available
var pushState = !!(enablePushState && window.history && window.history.pushState);

if (pushState) {
    router.configure({
        html5history: true
    }).init();
} else {
    router.init();
}

// Handle pushState for incompatible browsers (IE9 and below)
if (!pushState && window.location.pathname !== '/') {
    window.location.replace('/#' + window.location.pathname);
}

// Handle route and page changes
Dispatcher.register(function(payload) {

    var action = payload.action;

    if (action.actionType === ActionTypes.SET_CURRENT_ROUTE) {
        router.setRoute(action.route);
    }

    else if (action.actionType === ActionTypes.SET_CURRENT_PAGE) {
        // Set current page title
        document.title = action.page.title;
    }

    return true; // No errors.  Needed by promise in Dispatcher.
});<% } %>

console.log('Welcome to Yeogurt');
