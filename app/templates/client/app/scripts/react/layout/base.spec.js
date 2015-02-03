'use strict';

var React = require('react');
var BaseLayout = React.createFactory(require('./base<% if (useJsx) { %>.jsx<% } %>'));

describe('Base Component', function() {

  var ReactTestUtils;
  var reactRender;

  beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
    this.baseLayout = new BaseLayout();
  });

  it('provides the "Base Component" instance', function() {
    // Expect it to exist
    expect(this.baseLayout)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
