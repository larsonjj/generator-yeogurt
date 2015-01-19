'use strict';

var React = require('react');
var Link = require('./link');
var userStore = require('../../stores/user');
var userActions = require('../../actions/user');

// Alias for making element creation less verbose
var DOM = React.createElement;

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
      DOM('ul', {
          className: 'nav-list pull-right'
        },
        DOM('li', {
            className: 'nav-item'
          },
          'Hello ', user.firstName ? user.firstName : user.email
        ),
        DOM('li', {
            className: 'nav-item'
          },
          DOM(Link, {
            url: '/settings'
          }, 'My Account')
        ),
        DOM('li', {
            className: 'nav-item'
          },
          DOM(Link, {
            url: '/logout',
            onClick: this.handleLogout
          }, 'Logout')
        )
      )
    ) : (
      DOM('ul', {
          className: 'nav-list pull-right'
        },
        DOM('li', {
            className: 'nav-item'
          },
          DOM(Link, {
            url: '/login'
          }, 'Login')
        ),
        DOM('li', {
            className: 'nav-item'
          },
          DOM(Link, {
            url: '/signup'
          }, 'Create Account')
        )
      )
    );

    return (
      DOM('div', null,
        DOM('div', {
            className: 'navbar'
          },
          DOM('div', {
              className: 'nav'
            },
            DOM('ul', {
                className: 'nav-list pull-left'
              },
              DOM('li', {
                className: 'nav-item'
              }, DOM(Link, {
                url: '/'
              }, 'Home'))
            ),
            navLinks
          )
        )
      )
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
