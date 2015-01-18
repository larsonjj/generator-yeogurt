/**
*   Default View Spec Test
*/


'use strict';

var DefaultView = require('../../../../client/scripts/views/layouts/default');

describe('Default View', function() {

    beforeEach(function() {
        this.defaultView = new DefaultView();
    });

    it('provides the "Default View" instance', function() {
        // Expect it to exist
        expect(this.defaultView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
