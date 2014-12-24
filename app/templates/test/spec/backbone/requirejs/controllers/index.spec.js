/**
*   Index Controller Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var IndexController = require('client/scripts/controllers/account');

    describe('Index Controller', function() {

        it('provides the "Index Controller" object', function() {
            // Expect it to exist
            expect(IndexController)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
