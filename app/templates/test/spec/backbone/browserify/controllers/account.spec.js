/**
*   Account Controller Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Account Controller Namespace', function() {

    it('provides the "Account Controller" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Controllers.Account)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
