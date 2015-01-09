/**
*   Router Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var router = require('client/scripts/routes');

    describe('Router', function() {

        it('provides the "Router" instance', function() {
            // Expect it to exist
            expect(router)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
