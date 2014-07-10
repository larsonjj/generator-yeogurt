/**
*   App Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';<% if ((/Backbone/i).test(jsFramework)) { %>
    var HomeRouter = require('routes/home');<% } %>
    var app = {
        init: function(msg) {
            <% if ((/Backbone/i).test(jsFramework)) { %>
            $.ajaxPrefilter(function( options ) {
            options.dataType = 'json';
        });
            // Initialize routing and start Backbone.history()
            new HomeRouter();<% if (ieSupport) { %>
            // Enable pushState for compatible browsers
            var enablePushState = true;

            // Disable for older browsers (IE8, IE9 etc)
            var pushState = !!(enablePushState && window.history && window.history.pushState);

            Backbone.history.start({ pushState : pushState, root : '/' });

            if (!pushState && window.location.pathname !== '/') {
                window.location.replace('/#' + window.location.pathname);
            }<% } else { %>
            Backbone.history.start();
            <% } %><% } %>
        }
    };
    return app;

});<% } else if (jsOption === 'Browserify') { %>'use strict';
<% if ((/Backbone/i).test(jsFramework)) { %>
var HomeRouter = require('./routes/home');<% } %>
var app = {
    init: function(msg) {
        <% if ((/Backbone/i).test(jsFramework)) { %>
        $.ajaxPrefilter(function( options ) {
            options.dataType = 'json';
        });
        // Initialize routing and start Backbone.history()
        new HomeRouter();<% if (ieSupport) { %>
        // Enable pushState for compatible browsers
        var enablePushState = true;

        // Disable for older browsers (IE8, IE9 etc)
        var pushState = !!(enablePushState && window.history && window.history.pushState);

        Backbone.history.start({ pushState : pushState, root : '/' });

        if (!pushState && window.location.pathname !== '/') {
            window.location.replace('/#' + window.location.pathname);
        }<% } else { %>
        Backbone.history.start();
        <% } %><% } %>
    }
};

module.exports = app;<% } else if (jsOption === 'None (Vanilla JavaScript)') { %>
'use strict';

var app = {
    init: function(msg) {
        console.log(msg);
    }
};

app.init('Welcome to Yeogurt!');
<% } %>
