/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Yeogurt generator using Styles', function() {
  describe('With Sass', function() {
    it('Creates expected files', function() {
      var expected = ['src', 'src/_styles/main.scss'];

      return createAppGenerator()
        .withPrompts({ existingConfig: false, cssOption: 'sass' })
        .then(function() {
          assert.file(expected);
        });
    });
    it('With Sass (not Scss) syntax. Creates expected content', function() {
      var expected = ['src/_styles/main.sass'];

      return createAppGenerator()
        .withPrompts({
          existingConfig: false,
          cssOption: 'sass',
          sassSyntax: 'sass'
        })
        .then(function() {
          assert.file(expected);
        });
    });
  });
  describe('With PostCSS', function() {
    it('Creates expected files', function() {
      var expected = ['src', 'src/_styles/main.css'];
      var fileContentToTest = [['package.json', /css/i]];

      return createAppGenerator()
        .withPrompts({
          existingConfig: false,
          cssOption: 'postcss'
        })
        .then(function() {
          assert.file(expected);
          assert.fileContent(fileContentToTest);
        });
    });
  });
});
