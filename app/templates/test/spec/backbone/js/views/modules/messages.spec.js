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

    it('provides the "Messages View" instance', function() {
        // Expect it to exist
        expect(this.messagesView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
