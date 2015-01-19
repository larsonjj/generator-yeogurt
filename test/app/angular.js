/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using Angular', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('On the Client', function() {
    describe('With Defaults', function() {
      it ('Creates expected files', function(done) {
        var expected = [
          'grunt/config/compile/ng-templates.js',
          'grunt/config/compile/ng-annotate.js',
          'client/app/main.js',
          'client/app/home/home.js',
          'client/app/home/home.controller.js'
        ];

        var fileContentToTest = [];

        helpers.mockPrompt(this.app, {
          singlePageApplication: true,
          jsFramework: 'angular',
          jsOption: 'none',
          useServer: false,
        });

        this.app.run([], function() {
          assert.file(expected);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    describe('Without Server', function() {
      describe('With Testing', function() {
        describe('With Jasmine', function() {
          it ('Creates expected files', function(done) {
            var expected = [
              'client/app/home/home.spec.js'
            ];

            var fileContentToTest = [
              ['client/app/home/home.spec.js', /toBe/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'angular',
              jsOption: 'none',
              useServer: false,
              useTesting: true,
              testFramework: 'jasmine'
            });

            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('With Mocha', function() {
          it ('Creates expected files', function(done) {
            var expected = [
              'client/app/home/home.spec.js'
            ];

            var fileContentToTest = [
              ['client/app/home/home.spec.js', /to\./i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'angular',
              jsOption: 'none',
              useServer: false,
              useTesting: true,
              testFramework: 'mocha'
            });

            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
      });
    });
  });
});
