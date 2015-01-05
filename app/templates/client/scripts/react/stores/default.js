'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

/**
 * Constructs a Store object, extends it with EventEmitter and supplied
 * methods parameter,  and creates a mixin property for use in components.
 *
 * @param {object} methods Public methods for Store instance.
 * @constructor
 */
var Store = function(methods) {

    var self = this;

    if (methods.dispatcherToken) {
        console.error('"dispatcherToken" cannot be used as a method as it is reserved.');
    }

    if (methods.mixin) {
        console.error('"mixin" cannot be used as a method as it is reserved.');
    }

    assign(this, EventEmitter.prototype, methods);

    this.dispatcherToken = null;

    /**
     * Provides mixin for easily adding/removing event listeners to Stores
     * Add to Components using `mixins: [storeName.mixin]`
     */
    this.mixin = {

        componentDidMount: function() {
            self.addChangeListener(this.onChange);
        },

        componentWillUnmount: function() {
            self.removeChangeListener(this.onChange);
        }

    };

    /**
     * Emits change event.
     */
    this.emitChange = function() {
        this.emit(CHANGE_EVENT);
    };

    /**
     * Adds a change listener.
     *
     * @param {function} callback Callback function.
     */
    this.addChangeListener = function(callback) {
        this.on(CHANGE_EVENT, callback);
    };

    /**
     * Removes a change listener.
     *
     * @param {function} callback Callback function.
     */
    this.removeChangeListener = function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    };

};

module.exports = Store;
