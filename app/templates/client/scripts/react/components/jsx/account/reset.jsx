'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default.jsx');
var userActions = require('../../actions/user');

var ResetComponent = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <DefaultLayout>
        <h3>Reset Password</h3>
        <form method="post" onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="password">New Password</label>
            <input type="password" name="password" defaultValue="" placeholder="New password" autofocus="autofocus" />
          </p>

          <p>
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" name="confirm" defaultValue="" placeholder="Confirm password" />
          </p>

          <button>Change Password</button>
        </form>
      </DefaultLayout>
      /* jshint ignore:end */
    );
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var form = e.currentTarget;
    userActions.reset(form);
  }
});

module.exports = ResetComponent;
