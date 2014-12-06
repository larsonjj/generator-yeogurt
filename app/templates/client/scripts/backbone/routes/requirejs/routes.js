/**
*   Router
*/

define(function(require) {
    'use strict';

    var IndexView = require('./views/index');

    var Router = Backbone.Router.extend({
        // Defined routes
        routes: {
            '': 'index'
        },

        index: function() {
            // Initialize the view
            new IndexView();
        }
    });

    return Router;
});
