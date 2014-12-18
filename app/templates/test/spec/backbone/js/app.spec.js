/**
*   App Spec Test
*/
<% if (testFramework === 'mocha') { %>
/*jshint expr: true*/<% } %>

'use strict';

describe('<%= _.classify(projectName) %> Namespace', function() {

    it('provides the "App" object', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

    it('provides the "messages" instance', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.messages)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

    it('provides the "account" instance', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.account)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

    it('provides the "router" instance', function() {
        // Expect exists and is an object.
        expect(<%= _.classify(projectName) %>.router)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
