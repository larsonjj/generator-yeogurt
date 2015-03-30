'use strict';

var React = require('react');
var <%= _.classify(name) %> = React.createFactory(require('<%= rootDir %><%= reactFile %><% if (useJsx) { %>.jsx<% } %>'));

// Uncomment to use React testing tools
// var ReactTestUtils;
// var reactRender;

beforeEach(function() {
  // ReactTestUtils = require('react/addons').addons.TestUtils;
  // reactRender = ReactTestUtils.renderIntoDocument;
});

describe('Testing React Component: <%= _.classify(name) %>', function() {
  it('Should run a few assertions', function() {

  });
});
