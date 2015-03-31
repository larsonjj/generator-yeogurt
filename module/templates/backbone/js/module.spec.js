'use strict';

describe('<%= _.classify(name) %> View', function() {

  beforeEach(function() {
    var App = App || {};
    App.Views = App.Views || {};

    this.<%= _.camelize(name) %> = new App.Views.<%= _.classify(name) %>();
  });

  it('Should run a few assertions', function(){
    expect(this.<%= _.camelize(name) %>)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
