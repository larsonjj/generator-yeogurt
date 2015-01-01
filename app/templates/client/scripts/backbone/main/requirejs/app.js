/**
*   Application Logic
*/

define(function(require, exports, module) {
    'use strict';<% if (useAuth) { %>

    var UserModel = require('./models/user');
    var MessagesModel = require('./models/messages');<% } %>
    var Router = require('./routes');

    // Alias the module for easier identification.
    var app = module.exports;

    // The root path to run the application through.
    app.root = '/';

    // Global event aggregator
    app.events = _.extend({}, Backbone.Events);

    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();<% if (useAuth) { %>

    // Setup user account
    app.user = new UserModel();

    // Setup global flash messages
    app.messages = new MessagesModel();

    // Handle displaying and cleaning up views
    app.showView = function(view) {
        if (this.currentView) {
            this.currentView.close();
        }

        this.currentView = view;

        $('#app-wrapper').html(this.currentView.render().$el);
    };<% } %>

});
