/*
*   app.js
*   This file is where all global/app specific javascript should go
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(function (require) {<% if ((/Backbone/i).test(jsFramework)) { %>
    var RootRouter = require('routers/root');<% } %>
    var someModule = require('./modules/module');
    var App = {
        init: function(msg) {
            someModule.init('Module loaded from app.js');
            console.log(msg);<% if ((/Backbone/i).test(jsFramework)) { %>
            // Initialize routing and start Backbone.history()
            new RootRouter();
            Backbone.history.start();
            <% } %>
            return 'app initialized';
        }
    };
    return App;

});<% } else if (jsOption === 'Browserify') { %>
'use strict';
/* jshint unused:false */
/* global $:true */<% if ((/Backbone/i).test(jsFramework)) { %>
var RootRouter = require('./routers/root');<% } %>
var someModule = require('./modules/module');
var App = {
    init: function(msg) {
        someModule.init('Module called from app.js');
        console.log(msg);<% if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize routing and start Backbone.history()
        new RootRouter();
        Backbone.history.start();
        <% } %>
        return 'app initialized';
    }
};

module.exports = App;<% } else if (jsOption === 'None (Vanilla JavaScript)') { %>
'use strict';

var App = {
    init: function(msg) {
        console.log(msg);
        console.log('jQuery version: %s', $().jquery);
        return 'app initialized';
    }
};

App.init('Welcome to Yeogurt!');
<% } %>
