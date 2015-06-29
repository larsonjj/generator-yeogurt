/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');

describe('Yeogurt generator and sub-generators', function() {
  it('can be imported without blowing up', function() {
    assert(require('../../app') !== undefined);
    // Sub-generators
    assert(require('../../layout') !== undefined);
    assert(require('../../page') !== undefined);
    assert(require('../../module') !== undefined);
  });
});
