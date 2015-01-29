'use strict';

var React = require('react');
var routeActions = require('./actions/routes');<% if (useJsx) { %>
var IndexPage = React.createFactory(require('./components/index.jsx'));<% } else { %>
var IndexPage = React.createFactory(require('./components/index'));<% } %>

var render = function(Page) {
  React.render(new Page(), document.getElementById('app-wrapper'));
};

var index = function() {
  render(IndexPage);
};

var routes = {
  '/': index
};

module.exports = routes;
