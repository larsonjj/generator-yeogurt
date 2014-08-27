/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');

describe('yeogurt generator', function () {
    it('can be imported without blowing up', function () {
        assert(require('../../app') !== undefined);
        // Todo: unit test sub-generators
        // assert(require('../style') !== undefined);
        // assert(require('../script') !== undefined);
        assert(require('../../react') !== undefined);
        // assert(require('../view') !== undefined);
        assert(require('../../model') !== undefined);
        assert(require('../../collection') !== undefined);
    });
});
