'use strict';

var React = require('react');
var mainActions = require('../../_scripts/actions/main.actions');

var HomeComponent = React.createClass({
  componentWillMount: function() {
    mainActions.setPage({title: '<%= projectName %>'});
  },
  render: function() {
    return (
      <div>
        <div className="yeogurt-info">
          <h1>Welcome to Yeogurt!</h1>
          <p>
            Take a look at the <a href="https://github.com/larsonjj/generator-yeogurt#yeogurt-generator">documentation</a> and start mixing up something awesome.
          </p>
          <p>
            <img src="images/yeogurt-swirl.png" width="75px" className="logo" />
          </p>
        </div>
        <code className="version">v<%= pkg.version %></code>
      </div>
    );
  }
});

module.exports = HomeComponent;
