/**
*   Application Logic
*/

'use strict';
<% if (jsFramework === 'backbone' || jsFramework === 'react') { %>
var Router = require('./routes');
var UserModel = require('./models/user');
var MessagesModel = require('./models/messages');

// Alias the module for easier identification.
var app = module.exports;

// The root path to run the application through.
app.root = '/';

// Create global event aggregator
app.events = _.extend({}, Backbone.Events);

// Initialize routes
app.router = new Router();

// Setup user account
app.account = new UserModel();

// Setup flash messages
app.messages = new MessagesModel();

// Handle displaying and cleaning up views
app.showView = function(view) {
    if (this.currentView) {
        this.currentView.close();
    }

    this.currentView = view;

    $('#app-wrapper').html(this.currentView.render().$el);
};<% } else { %>
console.log('Welcome to Yeogurt');
<% } %>
