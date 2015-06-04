'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var baseTemplate = require('./base.jst');

var BaseLayoutView = Marionette.LayoutView.extend({

  template: baseTemplate,

  regions: {
    content: '#base-layout-wrapper'
  }

});

module.exports = BaseLayoutView;
