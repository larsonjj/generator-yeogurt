'use strict';

var <%= _.classify(name) %> = require('<%= rootDir %>../<%= actionFile %>');

describe('Testing Flux Action: <%= _.classify(name) %>', function() {
  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('Should run a few assertions', function() {

  });
});
