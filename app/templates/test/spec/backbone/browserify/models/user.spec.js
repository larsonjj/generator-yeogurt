/**
*   User Model Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('User Model Namespace', function() {

    beforeEach(function () {
        this.userModel = new <%= _.classify(projectName) %>.Models.User();
    });

    it('provides the "User Model" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Models.User)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
