/**
*   Account Controller Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var AccountController = require('client/scripts/controllers/account');

    describe('Account Controller', function() {

        it('provides the "Account Controller" object', function() {
            // Expect it to exist
            expect(AccountController)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
