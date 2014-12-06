/**
*   Router
*/

'use strict';
<% if (jsFramework === 'react') { %>
var React = require('react');<% if (useJsx) { %>
var IndexComponent = React.createFactory(require('./components/index.jsx'));<% } else { %>
var IndexComponent = require('./components/index.js');<% } %>
<% } else if (jsFramework === 'backbone') { %>
var IndexView = require('./views/index');<% } %>

var Router = Backbone.Router.extend({
    // Defined routes
    routes: {
        '': 'index'
    },

    index: function() {<% if (jsFramework === 'react') { %>
        React.render(new IndexComponent(), document.getElementById('app-wrapper'));<% } else if (jsFramework === 'backbone') { %>
        // Initialize the view
        new IndexView();<% } %>
    }
});

module.exports = Router;
