<% if (testFramework === 'mocha') { %>/*jshint expr: true*/<% } %>

'use strict';

var <%= _.classify(name) %> = require('<%= rootDir %><%= viewFile %>');

describe('<%= _.classify(name) %> View', function() {

  beforeEach(function() {
    this.<%= _.camelize(name) %> = new <%= _.classify(name) %>();
  });

  it('Should run a few assertions', function(){

  });

});
