'use strict';

var <%= _.classify(name) %>Actions = require('./<%= fluxFile %>.actions');
var <%= _.classify(name) %>Constants = require('./<%= fluxFile %>.constants');
var <%= _.classify(name) %>Store = require('./<%= fluxFile %>.store');

describe('Testing Flux Action: <%= _.classify(name) %>Actions', function() {
  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('Should run a few assertions', function() {

  });
});

describe('Testing Flux Constant: <%= _.classify(name) %>Constants', function() {
  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('Should run a few assertions', function() {

  });
});

describe('Testing Flux Store: <%= _.classify(name) %>Store', function() {
  // Uncomment to use React testing tools
  // var ReactTestUtils;

  beforeEach(function() {
    // ReactTestUtils = require('react/addons').addons.TestUtils;
  });

  it('Should run a few assertions', function() {

  });
});
