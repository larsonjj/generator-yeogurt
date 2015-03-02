<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

describe('Directive: <%= _.camelize(name) %>', function() {

  // Load module that the directive is associated with
  beforeEach(module('<%= _.camelize(projectName) %>'));

  var element;
  var scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<<%= _.dasherize(name) %>></<%= _.dasherize(name) %>>');
    element = $compile(element)(scope);
    expect(element.text())<% if (testFramework === 'jasmine') { %>.toBe('<%= _.camelize(name) %> directive')<% } else if (testFramework === 'mocha') { %>.to.equal('<%= _.camelize(name) %> directive')<% } %>;
  }));
});
