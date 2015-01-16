/**
*   App Spec Test
*/


'use strict';

describe('App Namespace', function() {

    it('provides the "App" object', function() {
        // Expect it to exist
        expect(App)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
