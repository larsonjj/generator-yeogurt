'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default.jsx');
var Link = require('../modules/link.jsx');
var userActions = require('../../actions/user');


var LoginComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <DefaultLayout>
        <h3>Sign in</h3>
        <form method="post" action="/login" onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" placeholder="Enter your email" autofocus="autofocus" />
          </p>

          <p>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder="Password" />
          </p>

          <button>Login</button>
          <p><Link url="/forgot">Forgot your password?</Link></p>
        </form>
      </DefaultLayout>
      /* jshint ignore:end */
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var form = e.currentTarget;
    userActions.login(form);
  }
});

module.exports = LoginComponent;
