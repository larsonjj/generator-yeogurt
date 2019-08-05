/*global describe, beforeEach, it*/
'use strict';

var assert = require('yeoman-assert');
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
      'gulp/tasks/',
      'gulp/tasks/watch.js',
      'gulp/tasks/browserify.js',
      'gulp/tasks/browserSync.js',
      'gulp/tasks/clean.js',
      'gulp/tasks/eslint.js',
      'gulp/tasks/rev.js',
      'package.json',
      '.editorconfig',
      'src/',
      'src/_images',
      'src/_scripts',
      'src/_styles',
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
