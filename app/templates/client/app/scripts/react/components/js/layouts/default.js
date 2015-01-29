'use strict';

var React = require('react');
var pageStore = require('../../stores/page');

// Alias for making element creation less verbose
var DOM = React.createElement;

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
      DOM('div', null,
        DOM('div', {
            className: 'default'
          },
          DOM('div', {
              className: 'main-container'
            },
            DOM('div', {
                className: 'content'
              },
              this.props.children
            )
          )
        )
      )
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = DefaultComponent;
