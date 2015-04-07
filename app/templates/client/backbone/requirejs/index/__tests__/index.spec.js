<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
define(function(require) {
  'use strict';

  var IndexView = require('../index');

  describe('Index View', function() {

    beforeEach(function() {
      this.indexView = new IndexView();
    });

    it('provides the "Index View" instance', function() {
      // Expect it to exist
      expect(this.indexView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
    });

  });
});
