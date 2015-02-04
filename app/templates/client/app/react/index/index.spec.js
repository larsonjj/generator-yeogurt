'use strict';

var React = require('react');
var IndexComponent = React.createFactory(require('./index<% if (useJsx) { %>.jsx<% } %>'));

describe('Index Component', function() {

  var ReactTestUtils;
  var reactRender;

  beforeEach(function() {
    ReactTestUtils = require('react/addons').addons.TestUtils;
    reactRender = ReactTestUtils.renderIntoDocument;
    this.indexComponent = new IndexComponent();
  });

  it('provides the "Index Component" instance', function() {
    // Expect it to exist
    expect(this.indexComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
