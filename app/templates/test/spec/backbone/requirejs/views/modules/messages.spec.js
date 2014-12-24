/**
*   Messages View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var MessagesView = require('client/scripts/views/modules/messages');

    describe('Messages View', function() {

        beforeEach(function () {
            this.messagesView = new MessagesView();
        });

        it('provides the "Messages View" object', function() {
            // Expect exists and is an object.
            expect(this.messagesView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
