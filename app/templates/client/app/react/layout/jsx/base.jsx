'use strict';

var React = require('react');
var mainStore = require('../main.store');

var getState = function() {
  return {
    title: mainStore.getPage().title
  };
};

var DefaultComponent = React.createClass({
  mixins: [mainStore.mixin],
  componentDidMount: function() {
    mainStore.emitChange();
  },
  getInitialState: function() {
    return getState();
  },
  render: function() {
    return (
      <div>
        <div className="default">
          <div className="main-container">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = DefaultComponent;
