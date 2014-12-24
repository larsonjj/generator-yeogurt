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

    it('provides the "Reset View" instance', function() {
        // Expect it to exist
        expect(this.resetView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
