/*
*   app.js
*   This file is where all global/app specific javascript should go
*/
<% if (jsOption ==='RequireJS') { %>'use strict';

define(['./modules/module'], function (someModule) {
    var app = {
        init: function(msg) {
            someModule.init();
            console.log(msg);
            return msg;
        }
    };
    return app;

});<% } %><% if (jsOption ==='Browserify') { %>
'use strict';
/* jshint unused:false */
/* global $:true */
var $ = require('jquery'),
someModule = require('./modules/module');
var app = {
    init: function(msg) {
        someModule.init();
        console.log(msg);
        return msg;
    }
};

module.exports = app;<% } %>