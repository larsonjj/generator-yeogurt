'use strict';

var <%= _.classify(name) %> = require('../<%= _.slugify(name.toLowerCase()) %>');

describe('<%= _.classify(name) %> Collection', function() {

  beforeEach(function() {
    this.<%= _.camelize(name) %>Collection = new <%= _.classify(name) %>();
  });

  it('Should run a few assertions', function(){

  });

});
