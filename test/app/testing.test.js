/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Yeogurt generator testing', function() {
  describe('With unit tests', function() {
    it('Creates expected files', function() {
      var expected = ['karma.conf.js'];

      return createAppGenerator()
        .withPrompts({
          existingConfig: false,
          jsFramework: 'none',
          jsOption: 'none',
          testFramework: 'jasmine'
        })
        .then(function() {
          assert.file(expected);
        });
    });
  });
  describe('Without unit tests', function() {
    it('Does not create certain files', function() {
      var notExpected = ['karma.conf.js'];

      return createAppGenerator()
        .withPrompts({
          existingConfig: false,
          testFramework: 'none'
        })
        .then(function() {
          assert.noFile(notExpected);
        });
    });
  });
});
