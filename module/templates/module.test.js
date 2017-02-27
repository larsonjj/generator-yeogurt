<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

var <%= _.classify(name) %> = require('../<%= name %>');

describe('<%= _.classify(name) %> View', function() {

  beforeEach(function() {
    this.<%= _.camelize(name) %> = new <%= _.classify(name) %>();
  });

  it('Should run a few assertions', function() {
    expect(this.<%= _.camelize(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
