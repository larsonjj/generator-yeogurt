'use strict';

var React = require('react');
var Link = require('./link.jsx');
var userStore = require('../../stores/user');
var userActions = require('../../actions/user');

var getState = function() {
  return {
    user: userStore.get()
  };
};

var NavbarComponent = React.createClass({
  mixins: [userStore.mixin],
  getInitialState: function() {
    return getState();
  },
  render: function() {
    var user = this.props.user;
    var navLinks = user.loggedIn ? (
      /* jshint ignore:start */
      <ul className="nav-list pull-right">
        <li className="nav-item">
          Hello {user.firstName ? user.firstName : user.email}
        </li>
        <li className="nav-item">
          <Link url="/settings">My Account</Link>
        </li>
        <li className="nav-item">
          <Link url="/logout" onClick={this.handleLogout}>Logout</Link>
        </li>
      </ul>
      /* jshint ignore:end */
    ) : (
      /* jshint ignore:start */
      <ul className="nav-list pull-right">
        <li className="nav-item">
          <Link url="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link url="/signup">Create Account</Link>
        </li>
      </ul>
      /* jshint ignore:end */
    );

    return (
      /* jshint ignore:start */
      <div>
        <div className="navbar">
          <div className="nav">
            <ul className="nav-list pull-left">
              <li className="nav-item"><Link url="/">Home</Link></li>
            </ul>
            {navLinks}
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },
  handleLogout: function(e) {
    e.preventDefault();
    userActions.logout();
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = NavbarComponent;
