define(function(require) {
  'use strict';

  var IndexView = require('./views/index');

  var Router = Backbone.Router.extend({

    routes: {
      '': 'index'
    },

    index: function() {
      // Render index page
      new IndexView();
    }

  });

  return new Router();
});
