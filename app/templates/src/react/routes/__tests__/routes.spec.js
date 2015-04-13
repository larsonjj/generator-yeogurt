<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var routes = require('../routes');

describe('Routes for router', function() {

  it('provides the "Router" instance', function() {
    // Expect it to exist
    expect(routes)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
