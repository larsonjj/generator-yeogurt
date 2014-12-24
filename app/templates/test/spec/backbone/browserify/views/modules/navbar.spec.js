/**
*   Navbar View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var NavbarView = require('../../../../client/scripts/views/modules/navbar');

describe('Navbar View', function() {

    beforeEach(function () {
        this.navbarView = new NavbarView();
    });

    it('provides the "Navbar View" object', function() {
        // Expect exists and is an object.
        expect(this.navbarView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
