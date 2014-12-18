/**
*   Application Logic
*/

'use strict';
<% if (jsFramework === 'backbone' || jsFramework === 'react') { %>
var Router = require('./routes');
var UserModel = require('./models/user');
var MessagesModel = require('./models/messages');

// Create application namspace
var <%= _.classify(projectName) %> = {};<% if (useAuth) { %>

// Use GET and POST to support all browsers
// Also adds '_method' parameter with correct HTTP headers
Backbone.emulateHTTP = true;

// Create cleanup logic for Backbone views
Backbone.View.prototype.close = function() {
    this.remove();
    this.unbind();
    // Allows user to create OnClose callback within view
    // Should be used to cleanup bind', and 'on' events
    if (this.onClose) {
        this.onClose();
    }
};

// Create subview logic for Backbone views
// Allows the ability to attach views as subviews
Backbone.View.prototype.assign = function(selector, view) {
    var selectors;
    if (_.isObject(selector)) {
        selectors = selector;
    } else {
        selectors = {};
        selectors[selector] = view;
    }
    if (!selectors) {return;}
    _.each(selectors, function(view, selector) {
        view.setElement(this.$(selector)).render();
    }, this);
};

// Cache document
var $document = $(document);

// Send authorization header on each AJAX request
$document.ajaxSend(function(event, request) {
    var token = <%= _.classify(projectName) %>.account.getToken();
    if (token) {
        request.setRequestHeader('authorization', 'Bearer ' + token);
    }
});

// Handle displaying and cleaning up views
<%= _.classify(projectName) %>.showView = function(view) {
    if (this.currentView) {
        this.currentView.close();
    }

    this.currentView = view;

    $('#app-wrapper').html(this.currentView.render().$el);
};

// Create global event aggregator
<%= _.classify(projectName) %>.events = _.extend({}, Backbone.Events);<% } %>

// Initialize routes
<%= _.classify(projectName) %>.router = new Router();<% if (useAuth) { %>

// Setup user account
<%= _.classify(projectName) %>.account = new UserModel();

// Setup flash messages
<%= _.classify(projectName) %>.messages = new MessagesModel();<% } %>

// Check the auth status upon initialization,
// should happen before rendering any templates
<%= _.classify(projectName) %>.account.isAuthenticated({

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

});

// Set up global click event handler to use pushState for links
// use 'data-bypass' attribute on anchors to allow normal link behavior
$document.on('click', 'a:not([data-bypass])', function(event) {

    var href = $(this).attr('href');
    var protocol = this.protocol + '//';

    if (href.slice(protocol.length) !== protocol) {
        event.preventDefault();
        <%= _.classify(projectName) %>.router.navigate(href, true);
    }

});

console.log('Welcome to Yeogurt');

// Give access to app globally
window.<%= _.classify(projectName) %> = <%= _.classify(projectName) %>;
<% } else { %>
console.log('Welcome to Yeogurt');
<% } %>
