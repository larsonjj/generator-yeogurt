<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

// Mock application module
angular.module('Sample', []);

// Load controller
require('../index.controller');

describe('Controller: IndexCtrl', function() {

  // load module that the controller is associated with
  beforeEach(angular.mock.module('Sample'));

  var IndexCtrl;
  var scope;

  // Setup controller and mock it's scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should have IndexCtrl defined', function() {
    expect(IndexCtrl)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('should have scope.yeogurt defined as "awesome"', function() {
    expect(scope.yeogurt)<% if (testFramework === 'jasmine') { %>.toEqual('awesome')<% } else if (testFramework === 'mocha') { %>.to.equal('awesome')<% } %>;
  });
});
