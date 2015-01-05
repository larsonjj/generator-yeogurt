/**
*   Reset View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var ResetView = require('../../../../client/scripts/views/account/reset');

describe('Reset View', function() {

    beforeEach(function() {
        this.resetView = new ResetView();
    });

    it('provides the "Reset View" instance', function() {
        // Expect it to exist
        expect(this.resetView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
