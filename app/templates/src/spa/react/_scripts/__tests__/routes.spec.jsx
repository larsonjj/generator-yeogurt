<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var React = require('react');
var routes = require('../routes.jsx');

describe('Routes for router', function() {

  // Uncomment to use React testing tools
  // var ReactTestUtils;
  // var reactRender;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
    // reactRender = ReactTestUtils.renderIntoDocument;
    this.routes = routes;
  });

  it('provides the "Router" instance', function() {
    // Expect it to exist
    expect(this.routes)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
