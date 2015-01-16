/**
*   Router Spec Test
*/


'use strict';

var router = require('../../client/scripts/routes');

describe('Router', function() {

    it('provides the "Router" instance', function() {
        // Expect it to exist
        expect(router)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
