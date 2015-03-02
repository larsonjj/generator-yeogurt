<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

describe('Filter: <%= _.camelize(name) %>', function() {

  // Load module that the filter is associated with
  beforeEach(module('<%= _.camelize(projectName) %>'));

  // Setup a new instance of the filter before each test
  var <%= _.camelize(name) %>;
  beforeEach(inject(function($filter) {
    <%= _.camelize(name) %> = $filter('<%= _.camelize(name) %>');
  }));

  it('should return the input prefixed with "<%= _.camelize(name) %> filter:"', function() {
    var text = 'yeogurt';
    expect( <%= _.camelize(name) %>(text))<% if (testFramework === 'jasmine') { %>.toBe('<%= _.camelize(name) %> filter: ' + text)<% } else if (testFramework === 'mocha') { %>.to.equal('<%= _.camelize(name) %> filter: ' + text)<% } %>;
  });

});
