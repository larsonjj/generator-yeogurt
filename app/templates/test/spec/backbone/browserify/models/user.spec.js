/**
*   User Model Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var UserModel = require('../../../client/scripts/models/user');

describe('User Model', function() {

    beforeEach(function () {
        this.userModel = new UserModel();
    });

    it('provides the "User Model" object', function() {
        // Expect exists and is an object.
        expect(this.userModel)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
