/*
*   app.js
*   This file is where all global/app specific javascript should go
*/
<% if (jsOption === 'RequireJS') { %>'use strict';

define(['./modules/module'], function (someModule) {
    var app = {
        init: function(msg) {
            someModule.init('Module loaded from app.js');
            console.log(msg);
            return msg;
        }
    };
    return app;

});<% } else if (jsOption === 'Browserify') { %>
'use strict';
/* jshint unused:false */
/* global $:true */
var someModule = require('./modules/module');
var app = {
    init: function(msg) {
        someModule.init('Module called from app.js');
        console.log(msg);
        return msg;
    }
};

module.exports = app;<% } else { %>
'use strict';

var app = {
    init: function(msg) {
        console.log(msg);
        console.log('jQuery version: %s', $().jquery);
        return msg;
    }
};

app.init('Welcome to Yeogurt!');
<% } %>
