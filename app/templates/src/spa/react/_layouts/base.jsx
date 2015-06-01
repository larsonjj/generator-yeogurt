'use strict';

var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var mainStore = require('../_scripts/stores/main.store');
var RouteHandler = Router.RouteHandler;

var getState = function() {
  return {
    page: mainStore.getPage()
  };
};

var DefaultComponent = React.createClass({
  mixins: [Reflux.listenTo(mainStore, '_onStoreUpdate')],
  getInitialState: function() {
    return getState();
  },
  render: function() {
    return (
      <div className="base-layout">
        <div className="main-container">
          <RouteHandler />
        </div>
      </div>
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onStoreUpdate: function() {
    this.setState(getState());
  }
});

module.exports = DefaultComponent;
