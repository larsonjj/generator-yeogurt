/**
*   Default View Spec Test
*/


'use strict';

describe('Default View Namespace', function() {

    beforeEach(function() {
        this.defaultView = new App.Views.Default();
    });

    it('provides the "Default View" instance', function() {
        // Expect it to exist
        expect(this.defaultView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
