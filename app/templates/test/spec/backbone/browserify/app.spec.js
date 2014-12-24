/**
*   App Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

var <%= _.classify(projectName) %> = require('../../client/scripts/app');

describe('<%= _.classify(projectName) %> Namespace', function() {

    it('provides the "<%= _.classify(projectName) %>" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
