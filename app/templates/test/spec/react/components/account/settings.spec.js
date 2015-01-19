/**
*   Settings Component Spec Test
*/


'use strict';

var React = require('react');
var SettingsComponent = React.createFactory(require('../../../../client/scripts/components/account/settings<% if (useJsx) { %>.jsx<% } %>'));

describe('Settings Component', function() {

  var ReactTestUtils;
  var reactRender;

  beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
    this.settingsComponent = new SettingsComponent();
  });

  it('provides the "Settings Component" instance', function() {
    // Expect it to exist
    expect(this.settingsComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
