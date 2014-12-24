/**
*   Index View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var IndexView = require('../../../client/scripts/views/index');

describe('Index View', function() {

    beforeEach(function () {
        this.indexView = new IndexView();
    });

    it('provides the "Index View" object', function() {
        // Expect exists and is an object.
        expect(this.indexView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
