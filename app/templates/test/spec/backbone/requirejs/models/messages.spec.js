/**
*   Messages Model Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var MessagesModel = require('client/scripts/models/messages');

    describe('Messages Model', function() {

        beforeEach(function () {
            this.messagesModel = new MessagesModel();
        });

        it('provides the "Messages Model" object', function() {
            // Expect exists and is an object.
            expect(this.messagesModel)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
