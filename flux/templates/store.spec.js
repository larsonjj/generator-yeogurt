'use strict';

var <%= _.classify(name) %> = require('<%= rootDir %>../<%= storeFile %>');

describe('Testing Flux Store: <%= _.classify(name) %>', function() {
  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('Should run a few assertions', function() {

  });
});
