'use strict';

var <%= _.classify(name) %> = require('../<%= _.slugify(name.toLowerCase()) %>');

describe('<%= _.classify(name) %> View', function() {

  beforeEach(function() {
    this.<%= _.camelize(name) %> = new <%= _.classify(name) %>();
  });

  it('Should run a few assertions', function(){
    expect(this.<%= _.camelize(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
