/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');

describe('Yeogurt generator and sub-generators', function() {
  it('can be imported without blowing up', function() {
    assert(require('../../app') !== undefined);
    // Sub-generators
    assert(require('../../model') !== undefined);
    assert(require('../../collection') !== undefined);
    assert(require('../../filter') !== undefined);
    assert(require('../../factory') !== undefined);
    assert(require('../../decorator') !== undefined);
    assert(require('../../directive') !== undefined);
    assert(require('../../service') !== undefined);
    assert(require('../../controller') !== undefined);
    assert(require('../../provider') !== undefined);
    assert(require('../../module') !== undefined);
    assert(require('../../api') !== undefined);
  });
});
