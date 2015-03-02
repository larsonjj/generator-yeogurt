<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

describe('Service: <%= _.camelize(name) %>', function() {

  // Load the service's module
  beforeEach(module('<%= _.camelize(projectName) %>'));

  // Setup instance of service
  var <%= _.camelize(name) %>;
  beforeEach(inject(function(_<%= _.camelize(name) %>_) {
    <%= _.camelize(name) %> = _<%= _.camelize(name) %>_;
  }));

  it('should do something', function() {
    expect(<%= _.camelize(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
