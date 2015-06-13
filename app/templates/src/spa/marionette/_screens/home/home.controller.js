var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var HomeView = require('./views/home.item');
var BaseLayoutView = require('../../_layouts/base');
var mountLayout = require('../../_scripts/utils/mount-layout');
var Wreqr = require('../../_scripts/wreqr');

var HomeController = Marionette.Controller.extend({
  initialize: function() {
    return this.setHandlers();
  },
  showHome: function() {
    var homeView = new HomeView();

    // Mounts specified layout
    var layout = mountLayout(BaseLayoutView);

    // Render home view within layout 'content' region
    layout.content.show(homeView);
  },
  setHandlers: function() {
    var self = this;
    return Wreqr.on('home:show', function() {
      Backbone.history.navigate('/');
      self.showHome();
    });
  }
});

module.exports = HomeController;
