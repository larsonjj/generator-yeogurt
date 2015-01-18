'use strict';

describe('Controller: IndexCtrl', function() {

  // load module that the controller is associated with
  beforeEach(module('<%= _.classify(projectName) %>'));

  var IndexCtrl,
    scope;

  // Setup controller and mock it's scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should have scope defined', function() {
    expect(scope.yeogurt)<% if (testFramework === 'jasmine') { %>.toBe('awesome')<% } else if (testFramework === 'mocha') { %>.to.equal('awesome')<% } %>;
  });
});
