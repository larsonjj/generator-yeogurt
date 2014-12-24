/**
*   OneColumn View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var OneColumnView = require('client/scripts/views/layouts/one-column');

    describe('OneColumn View', function() {

        beforeEach(function () {
            this.oneColumnView = new OneColumnView();
        });

        it('provides the "OneColumn View" object', function() {
            // Expect exists and is an object.
            expect(this.oneColumnView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
