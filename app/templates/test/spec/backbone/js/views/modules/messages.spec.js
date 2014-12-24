/**
*   Messages View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('Messages View Namespace', function() {

    beforeEach(function () {
        this.messagesView = new App.Views.Messages();
    });

    it('provides the "Messages View" object', function() {
        // Expect exists and is an object.
        expect(this.messagesView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
