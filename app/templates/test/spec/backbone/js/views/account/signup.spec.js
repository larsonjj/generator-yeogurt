/**
*   Signup View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Signup View Namespace', function() {

    beforeEach(function () {
        this.signupView = new App.Views.Signup();
    });

    it('provides the "Signup View" object', function() {
        // Expect exists and is an object.
        expect(this.signupView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
