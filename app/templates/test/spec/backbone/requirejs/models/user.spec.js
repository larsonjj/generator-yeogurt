/**
*   User Model Spec Test
*/


define(function(require) {
  'use strict';

  var userModel = require('client/scripts/models/user');

  describe('User Model', function() {

    it('provides the "User Model" instance', function() {
      // Expect it to exist
      expect(userModel)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

  });
});
