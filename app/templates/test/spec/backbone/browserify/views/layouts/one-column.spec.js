/**
*   OneColumn View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('OneColumn View Namespace', function() {

    beforeEach(function () {
        this.oneColumnView = new <%= _.classify(projectName) %>.Views.OneColumn();
    });

    it('provides the "OneColumn View" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Views.OneColumn)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
