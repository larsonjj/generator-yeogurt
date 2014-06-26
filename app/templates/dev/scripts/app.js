/**
*   App Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';<% if ((/Backbone/i).test(jsFramework)) { %>
    var HomeRouter = require('routes/home');<% } %>
    var someModule = require('./modules/module');
    var app = {
        init: function(msg) {
            someModule.init('Module loaded from app.js');
            console.log(msg);<% if ((/Backbone/i).test(jsFramework)) { %>
            // Initialize routing and start Backbone.history()
            new HomeRouter();
            Backbone.history.start();
            <% } %>
            return 'app initialized';
        }
    };
    return app;

});<% } else if (jsOption === 'Browserify') { %>'use strict';
<% if ((/Backbone/i).test(jsFramework)) { %>
var HomeRouter = require('./routes/home');<% } %>
var someModule = require('./modules/module');
var app = {
    init: function(msg) {
        someModule.init('Module called from app.js');
        console.log(msg);<% if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize routing and start Backbone.history()
        new HomeRouter();
        Backbone.history.start();
        <% } %>
        return 'app initialized';
    }
};

module.exports = app;<% } else if (jsOption === 'None (Vanilla JavaScript)') { %>
'use strict';

var app = {
    init: function(msg) {
        console.log(msg);
        console.log('jQuery version: %s', $().jquery);
        return 'app initialized';
    }
};

app.init('Welcome to Yeogurt!');
<% } %>
