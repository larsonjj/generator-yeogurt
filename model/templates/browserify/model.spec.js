'use strict';

var <%= _.classify(name) %> = require('../<%= _.slugify(name.toLowerCase()) %>');

describe('<%= _.classify(name) %> Model', function() {

  beforeEach(function() {
    this.<%= _.camelize(name) %> = new <%= _.classify(name) %>();
  });

  it('Should run a few assertions', function(){

  });

});
