/**
*   Default Dispatcher Spec Test
*/


'use strict';

var defaultDispatcher = require('../../../client/scripts/dispatchers/default');

describe('Default Dispatcher', function() {

  var ReactTestUtils;
  var reactRender;

  beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('provides the "Default Dispatcher"', function() {
    // Expect it to exist
    expect(defaultDispatcher)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
