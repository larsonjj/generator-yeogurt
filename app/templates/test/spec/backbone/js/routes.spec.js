/**
*   Router Spec Test
*/


'use strict';

describe('Router Namespace', function() {

  beforeEach(function() {
    this.router = new App.Routers.Main();
  });

  it('provides the "Router" instance', function() {
    // Expect it to exist
    expect(this.router)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
