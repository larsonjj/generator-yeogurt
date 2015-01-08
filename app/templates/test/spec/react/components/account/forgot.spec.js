/**
*   Forgot Component Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var React = require('react');
var ForgotComponent = React.createFactory(require('../../../../client/scripts/components/account/forgot<% if (useJsx) { %>.jsx<% } %>'));

describe('Forgot Component', function() {

    var ReactTestUtils;
    var reactRender;

    beforeEach(function() {
        ReactTestUtils = require('react/addons').addons.TestUtils;
        reactRender = ReactTestUtils.renderIntoDocument;
        this.forgotComponent = new ForgotComponent();
    });

    it('provides the "Forgot Component" instance', function() {
        // Expect it to exist
        expect(this.forgotComponent)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
