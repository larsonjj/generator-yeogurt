/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using Styles', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });
  describe('With Sass', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'src',
        'src/_styles/main.scss'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'sass'
      });
      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
    describe('With Sass (not Scss) syntax', function() {
      it('Creates expected content', function(done) {
        var expected = [
          'src/_styles/main.sass'
        ];

        helpers.mockPrompt(this.app, {
          cssOption: 'sass',
          sassSyntax: 'sass'
        });
        this.app.run([], function() {
          assert.file(expected);
          done();
        });
      });
    });
  });
  describe('With Less', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'src',
        'src/_styles/main.less'
      ];
      var fileContentToTest = [
        ['package.json', /less/i]
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'less'
      });
      this.app.run([], function() {
        assert.file(expected);
        assert.fileContent(fileContentToTest);
        done();
      });
    });
  });
  describe('With Stylus', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'src',
        'src/_styles/main.styl'
      ];

      helpers.mockPrompt(this.app, {
        cssOption: 'stylus',
        useBootstrap: false,
        useFoundation: false
      });
      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
  });
});
