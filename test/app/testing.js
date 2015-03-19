/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator testing', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });
  describe('With unit tests', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'karma.conf.js',
        'grunt/config/test/karma.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'none',
        jsOption: 'none',
        useTesting: true,
        testFramework: 'jasmine'
      });

      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
    describe('With RequireJS', function() {
      it('Creates expected files', function(done) {
        var expected = [
          'client/app/main.karma.js'
        ];

        helpers.mockPrompt(this.app, {
          useTesting: true,
          jsOption: 'requirejs',
          testFramework: 'jasmine'
        });

        this.app.run([], function() {
          assert.file(expected);
          done();
        });
      });
    });
    describe('With React', function() {
      it('Does not create certain files', function(done) {
        var expected = [
          'client/vendor/phantomjs-shims.js'
        ];

        helpers.mockPrompt(this.app, {
          useTesting: true,
          jsFramework: 'react',
          testFramework: 'jasmine'
        });

        this.app.run([], function() {
          assert.file(expected);
          done();
        });
      });
    });
  });
  describe('Without unit tests', function() {
    it('Does not create certain files', function(done) {
      var notExpected = [
        'client/app/main.karma.js',
        'grunt/config/test/karma.js'
      ];

      helpers.mockPrompt(this.app, {
        useTesting: false,
        testFramework: 'jasmine'
      });

      this.app.run([], function() {
        assert.noFile(notExpected);
        done();
      });
    });
    describe('With RequireJS', function() {
      it('Does not create certain files', function(done) {
        var notExpected = [
          'client/app/main.karma.js'
        ];

        helpers.mockPrompt(this.app, {
          useTesting: false,
          jsOption: 'requirejs',
          testFramework: 'jasmine'
        });

        this.app.run([], function() {
          assert.noFile(notExpected);
          done();
        });
      });
    });
    describe('With React', function() {
      it('Does not create certain files', function(done) {
        var notExpected = [
          'client/vendor/phantomjs-shims.js'
        ];

        helpers.mockPrompt(this.app, {
          useTesting: false,
          jsFramework: 'react',
          testFramework: 'jasmine'
        });

        this.app.run([], function() {
          assert.noFile(notExpected);
          done();
        });
      });
    });
  });
});
