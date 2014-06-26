/**
*   Home Router Description
*/

<% if (jsOption === 'RequireJS') { %>define(function (require) {
    'use strict';
    <% if (jsFramework === 'Backbone + React') { %>
    var React = require('react');
    var HomeComponent = require('jsx!views/home');<% } else if ((/Backbone/i).test(jsFramework)) { %>
    var HomeView = require('views/home');<% } %>

    var HomeRouter = Backbone.Router.extend({
        routes: {
            '*notFound' : 'default',
            '': 'default'
        },

        default: function() {
            console.log('Starting home (/) router');<% if (jsFramework === 'Backbone + React') { %>
            React.renderComponent(new HomeComponent(), document.getElementById('app-wrapper'));
            <% } else if ((/Backbone/i).test(jsFramework)) { %>
            // Initialize the home view
            new HomeView();<% } %>
        }

    });

    return HomeRouter;
});<% } else if (jsOption === 'Browserify') { %>'use strict';
<% if (jsFramework === 'Backbone + React') { %>
var React = require('react');
var HomeComponent = require('../views/home.jsx');
<% } else if ((/Backbone/i).test(jsFramework)) { %>
var HomeView = require('../views/home');<% } %>

var HomeRouter = Backbone.Router.extend({
    routes: {
        '*notFound' : 'default',
        '': 'default'
    },

    default: function() {
        console.log('Starting home (/) router');<% if (jsFramework === 'Backbone + React') { %>
        React.renderComponent(new HomeComponent(), document.getElementById('app-wrapper'));
        <% } else if ((/Backbone/i).test(jsFramework)) { %>
        // Initialize the home view
        new HomeView();<% } %>
    }

});

module.exports = HomeRouter;
<% } %>