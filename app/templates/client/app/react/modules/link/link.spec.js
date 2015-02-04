'use strict';

var React = require('react');
var LinkComponent = React.createFactory(require('./link<% if (useJsx) { %>.jsx<% } %>'));

describe('Link Component', function() {

  var ReactTestUtils;
  var reactRender;

  beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
    this.linkComponent = new LinkComponent();
  });

  it('provides the "Link Component" instance', function() {
    // Expect it to exist
    expect(this.linkComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
