define(function(require) {
  'use strict';

  beforeEach(function() {
    this.<%= _.classify(name) %> = require('../<%= _.slugify(name.toLowerCase()) %>');
  });

  describe('Give it some context', function() {

    it('Should run a few assertions', function() {
      expect(this.<%= _.classify(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
    });

  });

});
