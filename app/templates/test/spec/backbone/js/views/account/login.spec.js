/**
*   Login View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Login View Namespace', function() {

    beforeEach(function () {
        this.loginView = new <%= _.classify(projectName) %>.Views.Login();
    });

    it('provides the "Login View" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Views.Login)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
