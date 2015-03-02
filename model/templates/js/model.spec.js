'use strict';

describe('<%= _.classify(name) %> Model', function() {

  beforeEach(function() {
    var App = App || {};
    App.Models = App.Models || {};

    this.<%= _.camelize(name) %> = new App.Models.<%= _.classify(name) %>();
  });

  it('Should run a few assertions', function(){

  });

});
