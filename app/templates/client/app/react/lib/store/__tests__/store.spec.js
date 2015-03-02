<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var BaseStore = require('../store');

describe('Default Store', function() {

  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
    var _testValue;
    this.defaultStore = new BaseStore({
      get: function() {
        return _testValue || 'test';
      }
    });
  });

  it('provides the "Default Store" instance', function() {
    // Expect it to exist
    expect(this.defaultStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
