'use strict';

var React = require('react');
var Router = require('react-router');
var IndexPage = require('../_screens/index/index.jsx');
var BaseLayout = require('../_layouts/base.jsx');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var routes = (
  <Route handler={BaseLayout} path="/">
    <DefaultRoute handler={IndexPage} />
  </Route>
);

module.exports = routes;
