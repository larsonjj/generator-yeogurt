'use strict';

var React = require('react');<% if (useAuth) { %>
var Navbar = require('../modules/navbar');
var Messages = require('../modules/messages');<% } %>
var pageStore = require('../../stores/page');<% if (useAuth) { %>
var userStore = require('../../stores/user');<% } %>

// Alias for making element creation less verbose
var DOM = React.createElement;

var getState = function() {
  return {
    title: pageStore.get().title<% if (useAuth) { %>,
    user: userStore.get()<% } %>
  };
};

var DefaultComponent = React.createClass({
  mixins: [pageStore.mixin<% if (useAuth) { %>, userStore.mixin<% } %>],
  componentDidMount: function() {
    pageStore.emitChange();<% if (useAuth) { %>
    userStore.emitChange();<% } %>
  },
  getInitialState: function() {
    return getState();
  },
  render: function() {
    return (
      DOM('div', null,<% if (useAuth) { %>
        DOM('div', {
            className: 'main-nav'
          },
          DOM(Navbar, {
            user: this.state.user
          })
        ),<% } %>
        DOM('div', {
            className: 'default'
          },
          DOM('div', {
              className: 'main-container'
            },<% if (useAuth) { %>
            DOM('div', {
                className: 'messages'
              },
              DOM(Messages, {
                messages: this.state.messages
              })
            ),<% } %>
            DOM('div', {
                className: 'content'
              },
              this.props.children
            )
          )
        )
      )
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = DefaultComponent;
