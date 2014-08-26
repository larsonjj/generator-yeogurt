/**
*   Main Router Description
*/

'use strict';

var React = require('react');
var MainComponent = require('./components/main.jsx');


var MainRouter = Backbone.Router.extend({
    routes: {
        '': 'default'
    },

    default: function() {
        React.renderComponent(new MainComponent(), document.getElementById('app-wrapper'));
    }
});

module.exports = MainRouter;
