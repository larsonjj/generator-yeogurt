/**
*   Application Logic
*/

define(function(require) {
    'use strict';<% if (jsFramework === 'backbone') { %>
    var Router = require('./routes');<% } %><% if (jsFramework === 'none') { %>

    var init = function() {
        console.log('Welcome to Yeogurt');
    };<% } else if (jsFramework === 'backbone') { %>
    var init = function() {<% if (useAuth) { %>
        // Check the auth status upon initialization,
        // should happen before rendering any templates
        this.account.isAuthenticated({

            // Start backbone routing once we have captured a user's auth status
            complete: function() {

                // Enable pushState for compatible browsers
                var enablePushState = true;

                // Detect is pushState is available
                var pushState = !!(enablePushState && window.history && window.history.pushState);

                if (pushState) {
                    Backbone.history.start({ pushState: true, root: '/' });
                } else {
                    Backbone.history.start();
                }

                // Handle pushState for incompatible browsers (IE9 and below)
                if (!pushState && window.location.pathname !== '/') {
                    window.location.replace('/#' + window.location.pathname);
                }

            }

        });<% } %>
        console.log('Welcome to Yeogurt');
    };<% if (useAuth) { %>

    // Handle displaying and cleaning up views
    var showView = function(view) {
        if (this.currentView) {
            this.currentView.close();
        }

        this.currentView = view;

        $('#app-wrapper').html(this.currentView.render().$el);
    };

    // Create global event aggregator
    var events = _.extend({}, Backbone.Events);<% } %>

    // Initialize routes
    var router = new Router();<% if (useAuth) { %>

    // Setup user account
    var account = new UserModel();

    // Setup flash messages
    var messages = new MessagesModel();<% } %><% } %>

    return {
        init: init<% if (jsFramework === 'backbone' && useAuth) { %>,
        showView: showView<% } %>
    };
});
