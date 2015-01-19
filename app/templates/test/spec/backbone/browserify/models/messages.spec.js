/**
*   Messages Model Spec Test
*/


'use strict';

var messagesModel = require('../../../client/scripts/models/messages');

describe('Messages Model', function() {

  it('provides the "Messages Model" instance', function() {
    // Expect it to exist
    expect(messagesModel)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
