/**
*   Default Store Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var DefaultStore = require('../../../client/scripts/stores/default');

describe('Default Store', function() {

    var ReactTestUtils;
    var reactRender;

    beforeEach(function() {
        ReactTestUtils = require('react/addons').addons.TestUtils;
        var _testValue;
        this.defaultStore = new DefaultStore({
            get: function() {
                return _testValue || 'test'
            }
        });
    });

    it('provides the "Default Store" instance', function() {
        // Expect it to exist
        expect(this.defaultStore)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
