/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
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
      ['.yo-rc.json', /nunjucks/i]
    ];

    helpers.mockPrompt(this.app, {
      existingConfig: true,
      htmlOption: 'nunjucks'
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
      ['.yo-rc.json', /twig/i]
    ];

    helpers.mockPrompt(this.app, {
      existingConfig: true,
      htmlOption: 'twig'
    });

    this.app.run([], function() {
      assert.file(expected);
      assert.fileContent(fileContentToTest);
      done();
    });
  });
});
