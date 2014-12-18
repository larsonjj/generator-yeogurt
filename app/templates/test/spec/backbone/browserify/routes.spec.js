/**
*   Router Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Router Namespace', function() {

    beforeEach(function () {
        this.router = new <%= _.classify(projectName) %>.Routers.Main();
    });

    it('provides the "Router" object', function() {
        // Expect exists and is an object.
        expect(this.router)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
