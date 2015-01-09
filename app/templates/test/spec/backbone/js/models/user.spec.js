/**
*   User Model Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('User Model Namespace', function() {

    beforeEach(function() {
        this.userModel = new App.Models.User();
    });

    it('provides the "User Model" instance', function() {
        // Expect it to exist
        expect(this.userModel)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
