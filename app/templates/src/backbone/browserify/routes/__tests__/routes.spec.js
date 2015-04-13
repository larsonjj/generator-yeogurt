<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var router = require('../routes');

describe('Router', function() {

  it('provides the "Router" instance', function() {
    // Expect it to exist
    expect(router)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
