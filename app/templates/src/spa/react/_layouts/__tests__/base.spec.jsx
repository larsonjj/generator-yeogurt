<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var React = require('react');
var BaseLayout = require('../base.jsx');

describe('Base Component', function() {

  // Uncomment to use React testing tools
  // var ReactTestUtils;
  // var reactRender;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
    // reactRender = ReactTestUtils.renderIntoDocument;
    this.baseLayout = <BaseLayout />;
  });

  it('provides the "Base Component" instance', function() {
    // Expect it to exist
    expect(this.baseLayout)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
