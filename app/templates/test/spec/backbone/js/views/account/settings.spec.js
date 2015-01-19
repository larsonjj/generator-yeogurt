/**
*   Settings View Spec Test
*/


'use strict';

describe('Settings View Namespace', function() {

  beforeEach(function() {
    this.settingsView = new App.Views.Settings();
  });

  it('provides the "Settings View" instance', function() {
    // Expect it to exist
    expect(this.settingsView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
