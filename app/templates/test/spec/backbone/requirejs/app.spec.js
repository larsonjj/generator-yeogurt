/**
*   App Spec Test
*/


define(function(require) {
  'use strict';

  var app = require('client/scripts/app');

  describe('app namespace', function() {

    it('provides the "app" object', function() {
      // Expect it to exist
      expect(app)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

  });
});
