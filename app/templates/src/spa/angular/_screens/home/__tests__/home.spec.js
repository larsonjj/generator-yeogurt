<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

// Mock application module
angular.module('Sample', []);

// Load controller
require('../home.controller');

describe('Controller: HomeCtrl', function() {

  // load module that the controller is associated with
  beforeEach(angular.mock.module('<%= projectName %>'));

  var HomeCtrl;
  var scope;

  // Setup controller and mock it's scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have HomeCtrl defined', function() {
    expect(HomeCtrl)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

  it('should have scope.yeogurt defined as "awesome"', function() {
    expect(scope.yeogurt)<% if (testFramework === 'jasmine') { %>.toEqual('awesome')<% } else if (testFramework === 'mocha') { %>.to.equal('awesome')<% } %>;
  });
});
