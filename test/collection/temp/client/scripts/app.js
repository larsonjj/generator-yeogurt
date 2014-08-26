/**
*   App Description
*/

'use strict';

var Router = require('./routes');

// Initialize route(s)
new Router();

Backbone.history.start();

// Enable React dev tools
window.React = require('react');

console.log('Welcome to Yeogurt');
