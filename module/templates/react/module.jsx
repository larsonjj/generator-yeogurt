'use strict';

var React = require('react');

var <%= _.classify(name) %> = React.createClass({
  render: function() {
    return (
      <div>
        <p ref="p"><%= name.toLowerCase() %> component</p>
      </div>
    );
  }
});

module.exports = <%= _.classify(name) %>;
