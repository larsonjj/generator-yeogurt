/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');

describe('Yeogurt generator and sub-generators', function() {
  it('can be imported without blowing up', function() {
    assert(require('../../generators/app') !== undefined);
    // Sub-generators
    assert(require('../../generators/layout') !== undefined);
    assert(require('../../generators/page') !== undefined);
    assert(require('../../generators/module') !== undefined);
  });
});
