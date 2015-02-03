'use strict';

var main = require('./main');

describe('Main module', function() {

  it('provides the "main" object', function() {
    // Expect it to exist
    expect(main)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
