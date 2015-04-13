<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var mainStore = require('../main.store');
var mainActions = require('../main.actions');
var mainDispatcher = require('../main.dispatcher');
var mainConstants = require('../main.constants');

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

  it('provides the "Main Actions"', function() {
    // Expect it to exist
    expect(mainActions)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('provides the "Main Dispatcher"', function() {
    // Expect it to exist
    expect(mainDispatcher)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('provides the "Main Constants"', function() {
    // Expect it to exist
    expect(mainConstants)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
