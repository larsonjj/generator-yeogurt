/**
*   Settings View Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

define(function(require) {
    'use strict';

    var SettingsView = require('client/scripts/views/account/settings');

    describe('Settings View', function() {

        beforeEach(function () {
            this.settingsView = new SettingsView();
        });

        it('provides the "Settings View" object', function() {
            // Expect exists and is an object.
            expect(this.settingsView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
        });

    });
});
