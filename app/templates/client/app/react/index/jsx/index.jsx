'use strict';

var React = require('react');
var BaseLayout = require('../layout/base.jsx');
var pageAction = require('../../modules/page/page.action');

var IndexComponent = React.createClass({
  componentWillMount: function() {
    pageAction.set({title: '<%= projectName %>'});
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <BaseLayout>
        <div className="main-container">
          <div className="yeogurt-info">
            <h1>Welcome to Yeogurt!</h1>
            <p>
              Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator">documentation</a> and start mixing up something awesome.
            </p>
            <p>
              <img src="/assets/images/yeogurt-swirl.png" width="75px" className="logo" />
            </p><% if (useJsdoc || useKss) { %>
            <p className="links"><% if (useKss) { %>
              <a href="/docs/styleguide/index.html">Styleguide</a><% } %><% if (useJsdoc) { %>
              <a href="/docs/jsdoc/index.html">API</a><% } %>
            </p><% } %>
          </div>
        </div>
        <code className="version">v<%= pkg.version %></code>
      </BaseLayout>
      /* jshint ignore:end */
    );
  }
});

module.exports = IndexComponent;
