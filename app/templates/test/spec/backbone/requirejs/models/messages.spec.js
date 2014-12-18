/**
*   Messages Model Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Messages Model Namespace', function() {

    beforeEach(function () {
        this.messagesModel = new <%= _.classify(projectName) %>.Models.Messages();
    });

    it('provides the "Messages Model" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.Models.Messages)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
