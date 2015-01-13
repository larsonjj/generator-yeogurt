'use strict';

describe('Service: <%= _.camelize(name) %>', function() {

    // load the service's module
    beforeEach(module('<%= _.camelize(projectName) %>'));

    // instantiate service
    var <%= _.camelize(name) %>;
    beforeEach(inject(function(_<%= _.camelize(name) %>) {
        <%= _.camelize(name) %> = _<%= _.camelize(name) %>;
    }));

    it('should do something', function() {
        expect(<%= _.camelize(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

});
