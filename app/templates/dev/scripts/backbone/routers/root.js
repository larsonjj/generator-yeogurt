/*
*   root.js
*/
<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';
    <% if (jsFramework === 'Backbone + React') { %>
    var React = require('react');
    var RootComponent = require('jsx!components/root');<% } else if ((/Backbone/i).test(jsFramework)) { %>
    var RootView = require('views/root');<% } %>

    var RootRouter = Backbone.Router.extend({
        routes: {
            '*notFound' : 'default',
            '': 'default'
        },

        default: function() {
            console.log('Starting root (/) router');<% if (jsFramework === 'Backbone + React') { %>
        React.renderComponent(new RootComponent(), document.body);
        <% } else if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize the root view
        new RootView();<% } %>
        }

    });

    return RootRouter;
});<% } else if (jsOption === 'Browserify') { %>'use strict';
<% if (jsFramework === 'Backbone + React') { %>
var React = require('react');
var RootComponent = require('../components/root.jsx');
<% } else if ((/Backbone/i).test(jsFramework)) { %>
var RootView = require('./views/root');<% } %>

var RootRouter = Backbone.Router.extend({
    routes: {
        '*notFound' : 'default',
        '': 'default'
    },

    default: function() {
        console.log('Starting root (/) router');<% if (jsFramework === 'Backbone + React') { %>
        React.renderComponent(new RootComponent(), document.body);
        <% } else if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize the root view
        new RootView();<% } %>
    }

});

module.exports = RootRouter;
<% } %>