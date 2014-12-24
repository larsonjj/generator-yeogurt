/**
*   Forgot View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Forgot View Namespace', function() {

    beforeEach(function () {
        this.forgotView = new App.Views.Forgot();
    });

    it('provides the "Forgot View" instance', function() {
        // Expect it to exist
        expect(this.forgotView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
