'use strict';

var IndexView = require('./index/index');

var Router = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  index: function() {
    // Render index page
    new IndexView();
  }

});

module.exports = new Router();
