/**
*   Navbar View
*/

'use strict';

var user = require('../../models/user');
var messages = require('../../models/messages');

var Navbar = Backbone.View.extend({

  el: '.main-nav',

  template: JST['client/templates/modules/navbar<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

  events: {
    'click #logoutLink': 'handleLogout'
  },

  initialize: function() {
    // Re-render template when user model changes
    this.listenTo(user, 'change', this.render);
    this.render();
  },

  handleLogout: function(e) {
    e.preventDefault();
    user.logout();
  },

  render: function() {
    this.$el.html(this.template({
      loggedIn: user.get('loggedIn'),
      user: user.toJSON()
    }));
    return this;
  }

});

module.exports = Navbar;
