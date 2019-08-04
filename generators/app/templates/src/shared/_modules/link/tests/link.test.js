<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */
<% } %>'use strict';

var Link = require('../link');

describe('Link View', function() {

  beforeEach(function() {
    this.link = new Link();
  });

  it('Should run a few assertions', function() {
    expect(this.link)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.exist<% } %>;
  });

});
