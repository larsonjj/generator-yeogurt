'use strict';

describe('Controller: IndexCtrl', function() {

    // load the controller's module
    beforeEach(module('<%= _.classify(projectName) %>'));

    var IndexCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        IndexCtrl = $controller('IndexCtrl', {
            $scope: scope
        });
    }));

    it('should have scope defined', function() {
        expect(scope)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });
});
