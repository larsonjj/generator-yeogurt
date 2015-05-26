<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var mainStore = require('../main.store');

describe('Main', function() {

  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('provides the "Main Store"', function() {
    // Expect it to exist
    expect(mainStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
