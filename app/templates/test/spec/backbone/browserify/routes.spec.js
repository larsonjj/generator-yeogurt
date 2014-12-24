/**
*   Router Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var MainRouter = require('../../client/scripts/routes');

describe('Router', function() {

    beforeEach(function () {
        this.router = new MainRouter();
    });

    it('provides the "Router" object', function() {
        // Expect exists and is an object.
        expect(this.router)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
