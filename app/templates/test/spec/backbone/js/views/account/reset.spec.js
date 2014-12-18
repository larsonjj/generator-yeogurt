/**
*   Reset View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Reset View Namespace', function() {

    beforeEach(function () {
        this.resetView = new <%= _.classify(projectName) %>.Views.Reset();
    });

    it('provides the "Reset View" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Views.Reset)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
