'use strict';

var React = require('react');
var pageStore = require('../../stores/page');

var getState = function() {
  return {
    title: pageStore.get().title
  };
};

var DefaultComponent = React.createClass({
  mixins: [pageStore.mixin],
  componentDidMount: function() {
    pageStore.emitChange();
  },
  getInitialState: function() {
    return getState();
  },
  render: function() {
    return (
      /* jshint ignore:start */
      <div>
        <div className="default">
          <div className="main-container">
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = DefaultComponent;
