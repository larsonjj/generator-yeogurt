/**
*   Login View Spec Test
*/


'use strict';

describe('Login View Namespace', function() {

  beforeEach(function() {
    this.loginView = new App.Views.Login();
  });

  it('provides the "Login View" instance', function() {
    // Expect it to exist
    expect(this.loginView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
