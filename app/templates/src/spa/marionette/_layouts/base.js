'use strict';

var Marionette = require('backbone.marionette');
var baseTemplate = require('./base.jst');

var BaseLayoutView = Marionette.LayoutView.extend({

  template: baseTemplate,

  regions: {
    content: '#base-layout-wrapper'
  }

});

module.exports = BaseLayoutView;
