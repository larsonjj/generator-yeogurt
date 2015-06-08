/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Marionette module sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create module files when using Marionette', function() {
    it('Without testing', function(done) {
      // Filename
      var module = 'mymodule';
      var filesNotCreated = [
        'src/_modules/' + module + '/__tests__/' + module + '.controller.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'marionette',
        singlePageApplication: true,
        useTesting: false,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine',
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../../'}, {
          // mock prompt data
          moduleFile: 'src/_modules'
        }, function() {
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
    describe('Handles defaults with Underscore', function() {
      describe('Using Browserify', function() {
        it('Using Jasmine', function(done) {
          // Filename
          var module = 'mymodule';
          var filesToTest = [
            'src/_modules/' + module + '/' + module + '.js',
            'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
            'src/_modules/' + module + '/' + module + '.jst',
            'src/_modules/' + module + '/' + module + '.scss'
          ];

          var fileContentToTest = [
            ['src/_modules/' + module + '/' + module + '.jst', /<div>/i],
            ['src/_modules/' + module + '/' + module + '.js', /module\.exports/i],
            ['src/_modules/' + module + '/__tests__/' + module + '.spec.js', /toBe/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'marionette',
            singlePageApplication: true,
            jsTemplate: 'underscore',
            jsOption: 'browserify',
            testFramework: 'jasmine',
            cssOption: 'sass',
            sassSyntax: 'scss',
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {path: '../../../../'}, {
              // mock prompt data
              moduleFile: 'src/_modules'
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        it('Using Mocha', function(done) {
          // Filename
          var module = 'mymodule';
          var filesToTest = [
            'src/_modules/' + module + '/' + module + '.js',
            'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
            'src/_modules/' + module + '/' + module + '.jst',
            'src/_modules/' + module + '/' + module + '.scss'
          ];

          var fileContentToTest = [
            ['src/_modules/' + module + '/' + module + '.jst', /<div>/i],
            ['src/_modules/' + module + '/' + module + '.js', /module\.exports/i],
            ['src/_modules/' + module + '/__tests__/' + module + '.spec.js', /to\.exist/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'marionette',
            singlePageApplication: true,
            jsTemplate: 'underscore',
            jsOption: 'browserify',
            testFramework: 'mocha',
            cssOption: 'sass',
            sassSyntax: 'scss',
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {path: '../../../../'}, {
              // mock prompt data
              moduleFile: 'src/_modules'
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
      });
    });
  });
});
