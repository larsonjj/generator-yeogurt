/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
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
    describe('With Sass (not Scss) syntax', function() {
      it('Creates expected content', function() {
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
  });
  describe('With Less', function() {
    it('Creates expected files', function() {
      var expected = ['src', 'src/_styles/main.less'];
      var fileContentToTest = [['package.json', /less/i]];

      return createAppGenerator()
        .withPrompts({
          existingConfig: false,
          cssOption: 'less'
        })
        .then(function() {
          assert.file(expected);
          assert.fileContent(fileContentToTest);
        });
    });
  });
  describe('With Stylus', function() {
    it('Creates expected files', function() {
      var expected = ['src', 'src/_styles/main.styl'];

      return createAppGenerator()
        .withPrompts({ existingConfig: false, cssOption: 'stylus' })
        .then(function() {
          assert.file(expected);
        });
    });
  });
});
