'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexPage = React.createFactory(require('./_screens/index/index.jsx'));
var BaseLayout = React.createFactory(require('./_layouts/base.jsx'));

var routes = (
  <Route handler={BaseLayout} path="/">
    <DefaultRoute handler={IndexPage} />
  </Route>
);

module.exports = routes;
