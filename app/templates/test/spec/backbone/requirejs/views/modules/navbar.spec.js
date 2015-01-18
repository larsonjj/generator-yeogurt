/**
*   Navbar View Spec Test
*/


define(function(require) {
    'use strict';

    var NavbarView = require('client/scripts/views/modules/navbar');

    describe('Navbar View', function() {

        beforeEach(function() {
            this.navbarView = new NavbarView();
        });

        it('provides the "Navbar View" instance', function() {
            // Expect it to exist
            expect(this.navbarView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
