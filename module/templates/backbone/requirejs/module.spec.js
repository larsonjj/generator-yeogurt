define(function(require) {
  'use strict';

  var <%= _.classify(name) %> = require('<%= viewFile %>');

  describe('<%= _.classify(name) %> View', function() {

    beforeEach(function() {
      this.<%= _.camelize(name) %> = new <%= _.classify(name) %>();
    });

    it('Should run a few assertions', function(){

    });

  });

});
