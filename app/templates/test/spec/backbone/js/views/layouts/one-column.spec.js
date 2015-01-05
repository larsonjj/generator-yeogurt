/**
*   OneColumn View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('OneColumn View Namespace', function() {

    beforeEach(function() {
        this.oneColumnView = new App.Views.OneColumn();
    });

    it('provides the "OneColumn View" instance', function() {
        // Expect it to exist
        expect(this.oneColumnView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
