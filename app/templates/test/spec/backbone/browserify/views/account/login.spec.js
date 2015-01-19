/**
*   Login View Spec Test
*/


'use strict';

var LoginView = require('../../../../client/scripts/views/account/login');

describe('Login View', function() {

  beforeEach(function() {
    this.loginView = new LoginView();
  });

  it('provides the "Login View" instance', function() {
    // Expect it to exist
    expect(this.loginView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
