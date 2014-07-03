/**
*   App Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';<% if ((/Backbone/i).test(jsFramework)) { %>
    var HomeRouter = require('routes/home');<% } %>
    var app = {
        init: function(msg) {
            console.log(msg);<% if ((/Backbone/i).test(jsFramework)) { %>
            // Initialize routing and start Backbone.history()
            new HomeRouter();
            Backbone.history.start();
            <% } %>
        }
    };
    return app;

});<% } else if (jsOption === 'Browserify') { %>'use strict';
<% if ((/Backbone/i).test(jsFramework)) { %>
var HomeRouter = require('./routes/home');<% } %>
var app = {
    init: function(msg) {
        console.log(msg);<% if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize routing and start Backbone.history()
        new HomeRouter();
        Backbone.history.start();
        <% } %>
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
