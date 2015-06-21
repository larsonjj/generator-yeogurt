/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Static Site module sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create module files when using Static Jade', function() {
    describe('Client modules', function() {
      describe('Handles defaults', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var module = 'mymodule';

            var filesToTest = [
              'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.jade',
              'src/_modules/' + module + '/' + module + '.sass'
            ];
            var fileContentToTest = [
              ['src/_modules/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/_modules/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/_modules/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              testFramework: 'jasmine',
              useTesting: true,
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass',
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                assert.noFileContent(fileContentToNotFind);
                done();
              });
            });
          });
        });
      });
    });
    describe('Client modules with Dashboard', function() {
      it('Handles defaults', function(done) {
        // Filename
        var module = 'mymodule';
        var fileContentToTest = [
          ['src/_modules/' + module + '/__dash__/' + module + '.dash.json', /status/i],
          ['src/_modules/' + module + '/__dash__/' + module + '.dash.jade', /include/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
              // mock prompt data
              moduleFile: 'src/_modules'
            }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });

  describe('Create module files when using Static Swig', function() {
    describe('Client modules', function() {
      describe('Handles defaults', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var module = 'mymodule';

            var filesToTest = [
              'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.nunjucks',
              'src/_modules/' + module + '/' + module + '.sass'
            ];
            var fileContentToTest = [
              ['src/_modules/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/_modules/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/_modules/' + module + '/' + module + '.nunjucks', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'nunjucks',
              singlePageApplication: false,
              testFramework: 'jasmine',
              useTesting: true,
              cssOption: 'sass',
              sassSyntax: 'sass',
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                assert.noFileContent(fileContentToNotFind);
                done();
              });
            });
          });
        });
      });
    });
    describe('Client modules with Dashboard', function() {
      it('Handles defaults', function(done) {
        // Filename
        var module = 'mymodule';
        var fileContentToTest = [
          ['src/_modules/' + module + '/__dash__/' + module + '.dash.json', /status/i],
          ['src/_modules/' + module + '/__dash__/' + module + '.dash.nunjucks', /import/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'nunjucks',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
              // mock prompt data
              moduleFile: 'src/_modules'
            }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });
});
