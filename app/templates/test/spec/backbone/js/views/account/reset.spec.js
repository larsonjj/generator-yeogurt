/**
*   Reset View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Reset View Namespace', function() {

    beforeEach(function () {
        this.resetView = new App.Views.Reset();
    });

    it('provides the "Reset View" object', function() {
        // Expect exists and is an object.
        expect(this.resetView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
