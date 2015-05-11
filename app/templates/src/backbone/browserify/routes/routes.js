'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var IndexView = require('../_screens/index/index');

var Router = Backbone.Router.extend({

  routes: {
    // Default route
    '': 'index'
  },

  index: function() {
    // Render index page
    new IndexView();
  }

});

module.exports = new Router();
