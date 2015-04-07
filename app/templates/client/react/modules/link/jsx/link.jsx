'use strict';

var React = require('react');
var mainActions = require('../main.actions');

// Link Component
// Handles pushState route changes within app
// Usage: <Link url="/linkUrl">Link Title</Link>
var LinkComponent = React.createClass({

  propTypes: {
    url: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <a onClick={this.handleClick} href={this.props.url} {...this.props}>{this.props.children}</a>
    );
  },

  handleClick: function(e) {
    e.preventDefault();
    mainActions.setRoute(this.props.url);
  }

});

module.exports = LinkComponent;
