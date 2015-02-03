'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

// Constructs a Store object.
// Extends itself with supplied methods parameter, attaches EventEmitter to itself,
// and creates a mixin property for use in components.
var Store = function(methods) {

  var self = this;

  if (methods.dispatcherToken) {
    console.error('"dispatcherToken" cannot be used as a method as it is reserved.');
  }

  if (methods.mixin) {
    console.error('"mixin" cannot be used as a method as it is reserved.');
  }

  assign(this, EventEmitter.prototype, methods || {});

  this.dispatcherToken = null;

  // Provides mixin for easily adding/removing event listeners to Stores
  // Add to Components using `mixins: [storeName.mixin]`
  // This will also add the `_onChange` method which can be used as a callback
  // when this store's change event(s) are fired
  this.mixin = {

    componentDidMount: function() {
      self.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      self.removeChangeListener(this._onChange);
    }

  };

  // Emits change event.
  this.emitChange = function() {
    this.emit(CHANGE_EVENT);
  };

  // Adds a change listener.
  this.addChangeListener = function(callback) {
    this.on(CHANGE_EVENT, callback);
  };


  // Removes a change listener.
  this.removeChangeListener = function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

};

module.exports = Store;
