/**
*   Navbar View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Navbar View Namespace', function() {

    beforeEach(function () {
        this.navbarView = new <%= _.classify(projectName) %>.Views.Navbar();
    });

    it('provides the "Navbar View" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Views.Navbar)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
