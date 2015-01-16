/**
*   Navbar Component Spec Test
*/


'use strict';

var React = require('react');
var NavbarComponent = React.createFactory(require('../../../../client/scripts/components/modules/navbar<% if (useJsx) { %>.jsx<% } %>'));

describe('Navbar Component', function() {

    var ReactTestUtils;
    var reactRender;

    beforeEach(function() {
        ReactTestUtils = require('react/addons').addons.TestUtils;
        reactRender = ReactTestUtils.renderIntoDocument;
        this.navbarComponent = new NavbarComponent();
    });

    it('provides the "Navbar Component" instance', function() {
        // Expect it to exist
        expect(this.navbarComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
