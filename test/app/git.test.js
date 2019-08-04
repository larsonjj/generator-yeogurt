/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Yeogurt generator using Git', function() {
  it('Creates expected files', function() {
    var expected = [
      '.gitignore',
      '.gitattributes'
    ];

    return createAppGenerator()
      .withPrompts({ existingConfig: true, htmlOption: 'jade' })
      .then(function() {
        assert.file(expected);
      });
  });
});
