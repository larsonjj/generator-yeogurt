/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using Default Configuration', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  it('Creates expected files', function(done) {
    var expected = [
      '.yo-rc.json',
      'README.md',
      '.editorconfig',
      'gulpfile.js',
      'package.json',
      'yeogurt.conf.js',
      '.editorconfig',
      'src/',
      'src/_images',
      'src/robots.txt',
      'src/favicon.ico'
    ];

    helpers.mockPrompt(this.app, {
      existingConfig: false
    });

    this.app.run([], function() {
      assert.file(expected);
      done();
    });
  });
});
