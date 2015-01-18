'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default.jsx');
var userActions = require('../../actions/user');

var SignupComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <DefaultLayout>
        <h3>Sign up</h3>
        <form id="signup-form" method="post" action="/user" onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" placeholder="Email" />
          </p>

          <p>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder="Password" />
          </p>

          <p>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
          </p>

          <button>Signup</button>
        </form>
      </DefaultLayout>
      /* jshint ignore:end */
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var form = e.currentTarget;
    userActions.signup(form);
  }
});

module.exports = SignupComponent;
