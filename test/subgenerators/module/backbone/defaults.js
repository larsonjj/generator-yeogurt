/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Backbone module sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Create module files when using Backbone', function() {
    it('Without testing', function(done) {
      // Filename
      var module = 'mymodule';
      var filesNotCreated = [
        'client/app/' + module + '/__tests__/' + module + '.controller.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        useTesting: false,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {}, {
          // mock prompt data
          moduleFile: 'client/app',
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
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js',
            'client/app/' + module + '/' + module + '.jst',
            'client/app/' + module + '/' + module + '.scss'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.jst', /<div>/i],
            ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /toBe/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'underscore',
            jsOption: 'browserify',
            testFramework: 'jasmine',
            cssOption: 'sass',
            sassSyntax: 'scss'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
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
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js',
            'client/app/' + module + '/' + module + '.jst',
            'client/app/' + module + '/' + module + '.scss'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.jst', /<div>/i],
            ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /to\.be/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'underscore',
            jsOption: 'browserify',
            testFramework: 'mocha',
            cssOption: 'sass',
            sassSyntax: 'scss'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
      });
      describe('Using RequireJS', function() {
        it('Using Jasmine', function(done) {
          // Filename
          var module = 'mymodule';
          var filesToTest = [
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /toBe/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'underscore',
            jsOption: 'requirejs',
            testFramework: 'jasmine'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
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
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /to\.be/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'underscore',
            jsOption: 'requirejs',
            testFramework: 'mocha'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
      });
    });
    describe('Handles defaults with Handlebars', function() {
      describe('Using Browserify', function() {
        it('Using Jasmine', function(done) {
          // Filename
          var module = 'mymodule';
          var filesToTest = [
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /module\.exports/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /toBe/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'handlebars',
            jsOption: 'browserify',
            testFramework: 'jasmine'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
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
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /module\.exports/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /to\.be/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'handlebars',
            jsOption: 'browserify',
            testFramework: 'mocha'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
      });
      describe('Using RequireJS', function() {
        it('Using Jasmine', function(done) {
          // Filename
          var module = 'mymodule';
          var filesToTest = [
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /toBe/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'handlebars',
            jsOption: 'requirejs',
            testFramework: 'jasmine'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
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
            'client/app/' + module + '/' + module + '.js',
            'client/app/' + module + '/__tests__/' + module + '.spec.js'
          ];

          var fileContentToTest = [
            ['client/app/' + module + '/' + module + '.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i],
            ['client/app/' + module + '/__tests__/' + module + '.spec.js', /to\.be/i]
          ];

          helpers.mockPrompt(this.app, {
            jsFramework: 'backbone',
            singlePageApplication: true,
            jsTemplate: 'handlebars',
            jsOption: 'requirejs',
            testFramework: 'mocha'
          });
          this.app.run([], function() {
            createSubGenerator('module', module, {}, {
              // mock prompt data
              moduleFile: 'client/app'
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
