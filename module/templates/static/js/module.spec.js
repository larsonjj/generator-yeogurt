'use strict';

describe('Give it some context', function() {

  beforeEach(function() {
    this.<%= _.classify(name) %> = <%= _.classify(name) %>;
  });

  it('Should run a few assertions', function() {
    expect(this.<%= _.classify(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
