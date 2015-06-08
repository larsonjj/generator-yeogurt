'use strict';

var React = require('react');

// Uncomment to use React testing tools
// var ReactTestUtils;
// var reactRender;

beforeEach(function() {
  // ReactTestUtils = require('react/addons').addons.TestUtils;
  // reactRender = ReactTestUtils.renderIntoDocument;
  this.<%= _.classify(name) %> = React.createFactory(require('../<%= _.slugify(name.toLowerCase()) %>.jsx'));
});

describe('Testing React Component: <%= _.classify(name) %>', function() {
  it('Should run a few assertions', function() {
    expect(this.<%= _.classify(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });
});
