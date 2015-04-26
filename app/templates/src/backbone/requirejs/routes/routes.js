define(function(require) {
  'use strict';

  var IndexView = require('./_screens/index/index');

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
