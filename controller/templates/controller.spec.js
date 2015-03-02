<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

describe('Controller: <%= _.classify(name) %>Ctrl', function() {

  // Load module that the controller is associated with
  beforeEach(module('<%= _.camelize(projectName) %>'));

  var <%= _.classify(name) %>Ctrl;
  var scope;

  // Setup controller and mock it's scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    <%= _.classify(name) %>Ctrl = $controller('<%= _.classify(name) %>Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a property named yeogurt to the scope', function() {
    expect(<%= _.classify(name) %>Ctrl)<% if (testFramework === 'jasmine') { %>.toBe('awesome')<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    expect(scope.yeogurt)<% if (testFramework === 'jasmine') { %>.toBe('awesome')<% } else if (testFramework === 'mocha') { %>.to.equal('awesome')<% } %>;
  });
});
