/**
*   Settings View Spec Test
*/


define(function(require) {
  'use strict';

  var SettingsView = require('client/scripts/views/account/settings');

  describe('Settings View', function() {

    beforeEach(function() {
      this.settingsView = new SettingsView();
    });

    it('provides the "Settings View" instance', function() {
      // Expect it to exist
      expect(this.settingsView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

  });
});
