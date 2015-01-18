<% if (testFramework === 'mocha') { %>/*jshint expr: true*/<% } %>

define(function(require) {
  'use strict';

  var <%= _.classify(name) %> = require('<%= collectionFile %>');

  describe('<%= _.classify(name) %> Collection', function() {

    beforeEach(function() {
      this.<%= _.camelize(name) %>Collection = new <%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

  });

});
