'use strict';

var React = require('react');
var routeActions = require('../modules/route/route.action');<% if (useJsx) { %>
var IndexPage = React.createFactory(require('./index/index.jsx'));<% } else { %>
var IndexPage = React.createFactory(require('./index/index'));<% } %>

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
