/**
*   Signup View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var SignupView = require('client/scripts/views/account/signup');

    describe('Signup View', function() {

        beforeEach(function() {
            this.signupView = new SignupView();
        });

        it('provides the "Signup View" instance', function() {
            // Expect it to exist
            expect(this.signupView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
