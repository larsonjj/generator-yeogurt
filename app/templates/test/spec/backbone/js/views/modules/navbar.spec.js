/**
*   Navbar View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Navbar View Namespace', function() {

    beforeEach(function() {
        this.navbarView = new App.Views.Navbar();
    });

    it('provides the "Navbar View" instance', function() {
        // Expect it to exist
        expect(this.navbarView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
