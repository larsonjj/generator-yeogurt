<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

describe('Index View Namespace', function() {

  beforeEach(function() {
    this.indexView = new App.Views.Index();
  });

  it('provides the "Index View" instance', function() {
    // Expect it to exist
    expect(this.indexView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
