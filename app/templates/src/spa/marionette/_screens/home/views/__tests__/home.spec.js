<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var HomeView = require('../home.view');

describe('Home View', function() {

  beforeEach(function() {
    this.homeView = new HomeView();
  });

  it('provides the "Home View" instance', function() {
    // Expect it to exist
    expect(this.homeView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
