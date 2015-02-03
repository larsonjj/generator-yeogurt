'use strict';

var pageStore = require('./page.store');
var pageActions = require('./page.action');

describe('Page Flux Module', function() {

  var ReactTestUtils;
  var reactRender;

  beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('provides the "Page Store"', function() {
    // Expect it to exist
    expect(pageStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    expect(pageActions)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('provides the "Page Actions"', function() {
    // Expect it to exist
    expect(pageActions)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
