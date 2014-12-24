/**
*   Messages Model Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Messages Model Namespace', function() {

    beforeEach(function () {
        this.messagesModel = new App.Models.Messages();
    });

    it('provides the "Messages Model" object', function() {
        // Expect exists and is an object.
        expect(this.messagesModel)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
