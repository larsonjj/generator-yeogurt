/**
*   Default Component Spec Test
*/


'use strict';

var React = require('react');
var DefaultComponent = React.createFactory(require('../../../../client/scripts/components/layouts/default<% if (useJsx) { %>.jsx<% } %>'));

describe('Default Component', function() {

    var ReactTestUtils;
    var reactRender;

    beforeEach(function() {
        ReactTestUtils = require('react/addons').addons.TestUtils;
        reactRender = ReactTestUtils.renderIntoDocument;
        this.defaultComponent = new DefaultComponent();
    });

    it('provides the "Default Component" instance', function() {
        // Expect it to exist
        expect(this.defaultComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
