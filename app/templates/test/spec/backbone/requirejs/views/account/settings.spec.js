/**
*   Settings View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Settings View Namespace', function() {

    beforeEach(function () {
        this.settingsView = new <%= _.classify(projectName) %>.Views.Settings();
    });

    it('provides the "Settings View" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Views.Settings)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
