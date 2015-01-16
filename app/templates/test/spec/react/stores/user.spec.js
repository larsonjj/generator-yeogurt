/**
*   User Store Spec Test
*/


'use strict';

var userStore = require('../../../client/scripts/stores/user');

describe('User Store', function() {

    var ReactTestUtils;
    var reactRender;

    beforeEach(function() {
        ReactTestUtils = require('react/addons').addons.TestUtils;
    });

    it('provides the "User Store"', function() {
        // Expect it to exist
        expect(userStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
