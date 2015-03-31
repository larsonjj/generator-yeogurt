/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var fs  = require('fs');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using existing configuration', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  it('Creates expected files with expected content', function(done) {
    var expected = [
      '.yo-rc.json'
    ];
    var fileContentToTest = [
      ['.yo-rc.json', /jade/i]
    ];

    helpers.mockPrompt(this.app, {
      existingConfig: false,
      htmlOption: 'jade'
    });

    this.app.run([], function() {
      assert.file(expected);
      assert.fileContent(fileContentToTest);
      done();
    });
  });

  it('Creates expected files with expected content', function(done) {
    var expected = [
      '.yo-rc.json'
    ];
    var fileContentToTest = [
      ['.yo-rc.json', /swig/i]
    ];

    helpers.mockPrompt(this.app, {
      existingConfig: true,
      htmlOption: 'swig'
    });

    this.app.run([], function() {
      assert.file(expected);
      assert.fileContent(fileContentToTest);
      done();
    });
  });
});
