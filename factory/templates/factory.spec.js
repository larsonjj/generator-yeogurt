<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

describe('Factory Service: <%= _.camelize(name) %>', function() {

  // Load module that the factory is associated with
  beforeEach(module('<%= _.camelize(projectName) %>'));

  // Setup instance of service
  var <%= _.camelize(name) %>;
  beforeEach(inject(function(_<%= _.camelize(name) %>_) {
    <%= _.camelize(name) %> = _<%= _.camelize(name) %>_;
  }));

  it('should do something', function() {<% if (testFramework === 'jasmine') { %>
    expect(<%= _.camelize(name) %>).toBe(true);<% } else if (testFramework === 'mocha') { %>
    expect(<%= _.camelize(name) %>).to.be.ok;<% } %>
  });

});
