/**
*   Index Controller Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Index Controller Namespace', function() {

    it('provides the "Index Controller" object', function() {
        // Expect exists and is an object.
        expect(App.Controllers.Index)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
