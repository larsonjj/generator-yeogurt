/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;

describe('Yeogurt generator using Default Configuration', function() {
  it('Creates expected files', function() {
    var expected = [
      '.yo-rc.json',
      'README.md',
      '.editorconfig',
      'gulpfile.babel.js',
      'gulp/',
      'gulp/watch.js',
      'gulp/browserify.js',
      'gulp/browserSync.js',
      'gulp/clean.js',
      'gulp/eslint.js',
      'package.json',
      '.editorconfig',
      'src/',
      'src/_images',
      'src/robots.txt',
      'src/favicon.ico'
    ];

    return createAppGenerator()
      .withPrompts({ existingConfig: false })
      .then(function() {
        assert.file(expected);
      });
  });
});
