'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/default.jsx');
var userStore = require('../../stores/user');
var userActions = require('../../actions/user');

var getState = function() {
  return {
    user: userStore.get()
  };
};

var SettingsComponent = React.createClass({
  mixins: [userStore.mixin],
  getInitialState: function() {
    return getState();
  },
  render: function() {
    var user = this.state.user;

    return (
      /* jshint ignore:start */
      <DefaultLayout>
        <h3>Profile Information</h3>

        <form id="profile-form" action="/user?_method=PUT" method="post" onSubmit={this.handleSettings}>

          <p>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" defaultValue={user.email} />
          </p>

          <p>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" defaultValue={user.firstName} />
          </p>

          <p>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" defaultValue={user.lastName} />
          </p>

          <button>Update Profile</button>
        </form>

        <h3>Change Password</h3>

        <form id="password-form" action="/user/password?_method=PUT" method="post" onSubmit={this.handlePassword}>

          <p>
            <label htmlFor="password">New Password:</label>
            <input type="password" name="password" id="password" defaultValue='' />
          </p>

          <p>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" id="confirmPassword" defaultValue='' />
          </p>

          <button>Change Password</button>
        </form>

        <h3>Delete Account</h3>

        <p>You can delete your account, but keep in mind this action is irreversible.</p>

        <form id="delete-form" action="/user?_method=DELETE" method="post" onSubmit={this.handleDestroy}>
          <button>Delete my account</button>
        </form>
      </DefaultLayout>
      /* jshint ignore:end */
    );
  },
  handleSettings: function(e) {
    e.preventDefault();
    var form = e.currentTarget;
    userActions.updateSettings(form);
  },
  handlePassword: function(e) {
    e.preventDefault();
    var form = e.currentTarget;
    userActions.updatePassword(form);
  },
  handleDestroy: function(e) {
    e.preventDefault();
    var form = e.currentTarget;
    userActions.destroy(form);
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = SettingsComponent;
