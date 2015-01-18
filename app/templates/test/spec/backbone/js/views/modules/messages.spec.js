/**
*   Messages View Spec Test
*/


'use strict';

describe('Messages View Namespace', function() {

  beforeEach(function() {
    this.messagesView = new App.Views.Messages();
  });

  it('provides the "Messages View" instance', function() {
    // Expect it to exist
    expect(this.messagesView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
