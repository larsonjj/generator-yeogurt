'use strict';

var Reflux = require('reflux');
var mainActions = require('../actions/main.actions');

var _page;

var mainStore = new Reflux.createStore({

  init: function() {
    this.listenTo(mainActions.setPage, this.updatePage);
  },

  updatePage: function(page) {
    _page = page;
  },

  getPage: function() {
    return _page;
  }

});

module.exports = mainStore;
