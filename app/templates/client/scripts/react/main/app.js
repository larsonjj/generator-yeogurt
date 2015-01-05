/**
*   Application Logic
*/

'use strict';

var React = require('react');
var Router = require('director');
var Dispatcher = require('flux').Dispatcher;
var PayloadSources = require('./constants/payload-sources');
var routes = require('./routes');
var assign = require('object-assign');

// Alias the module for easier identification.
var app = module.exports;

// Create router
app.router = new Router(routes);

// Create global dispatcher
app.dispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        this.dispatch({
            source: PayloadSources.VIEW_ACTION,
            action: action
        });
    }
});

/**
 * Check if Page component has a layout property; and if it does,
 * wrap the page with the specified layout, then mount to #app-wrapper.
 */
app.render = function(page) {
    var layout = null;
    var child = null;
    var props = {};
    while ((layout = page.type.layout || (page.defaultProps && page.defaultProps.layout))) {
        child = React.createElement(page, props, child);
        page = layout;
    }
    React.render(React.createElement(page, props, child), document.getElementById('app-wrapper'));
};
