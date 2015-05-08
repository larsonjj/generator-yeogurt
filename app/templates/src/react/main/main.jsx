// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');

// Start listening to route changes
Router.run(routes, function(Handler) {
  // Mount app to #app-wrapper
  React.render(<Handler />, document.getElementById('app-wrapper'));
});

console.log('Welcome to Yeogurt');
