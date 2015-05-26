<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var React = require('react');
var IndexComponent = require('../index.jsx');

describe('Index Component', function() {

  // Uncomment to use React testing tools
  // var ReactTestUtils;
  // var reactRender;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
    // reactRender = ReactTestUtils.renderIntoDocument;
    this.indexComponent = <IndexComponent />;
  });

  it('provides the "Index Component" instance', function() {
    // Expect it to exist
    expect(this.indexComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
