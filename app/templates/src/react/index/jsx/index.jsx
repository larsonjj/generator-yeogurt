'use strict';

var React = require('react');
var mainActions = require('../_scripts/actions/main.actions');

var IndexComponent = React.createClass({
  componentWillMount: function() {
    mainActions.setPage({title: '<%= projectName %>'});
  },
  render: function() {
    return (
      <div>
        <div className="main-container">
          <div className="yeogurt-info">
            <h1>Welcome to Yeogurt!</h1>
            <p>
              Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator">documentation</a> and start mixing up something awesome.
            </p>
            <p>
              <img src="/images/yeogurt-swirl.png" width="75px" className="logo" />
            </p><% if (useJsdoc || useKss) { %>
            <p className="links"><% if (useKss) { %>
              <a href="/autodocs/styleguide/index.html">Styleguide</a><% } %><% if (useJsdoc) { %>
              <a href="/autodocs/jsdoc/index.html">API</a><% } %>
            </p><% } %>
          </div>
        </div>
        <code className="version">v<%= pkg.version %></code>
      </div>
    );
  }
});

module.exports = IndexComponent;
