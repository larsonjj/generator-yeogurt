'use strict';

var App = App || {};
App.Routers = App.Routers || {};

App.Routers.Main = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  index: function() {
    // Render index page
    new App.Views.Index();
  }

});
