/**
*   Router
*/

'use strict';

var <%= _.camelize(projectName) %> = <%= _.camelize(projectName) %> || {};

(function () {

    // Router
    <%= _.camelize(projectName) %>.Router = Backbone.Router.extend({
        // Defined routes
        routes: {
            '': 'index'
        },

        index: function() {
            // Initialize the view
            new <%= _.camelize(projectName) %>.IndexView();
        }
    });

    // Instantiate Router
    new <%= _.camelize(projectName) %>.Router();

    // Enable pushState for compatible browsers
    var enablePushState = true;

    // Disable for older browsers (IE8, IE9 etc)
    var pushState = !!(enablePushState && window.history && window.history.pushState);

    // Start route handling
    Backbone.history.start({ pushState : pushState, root : '/' });

    // Handle pushState for incompatibl browsers
    if (!pushState && window.location.pathname !== '/') {
        window.location.replace('/#' + window.location.pathname);
    }

})();
