/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Static Site module sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../app'});

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
              'src/_modules/' + module + '/tests/' + module + '.test.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.jade',
              'src/_modules/' + module + '/' + module + '.sass'
            ];
            var fileContentToTest = [
              ['src/_modules/' + module + '/' + module + '.js', /export/i],
              ['src/_modules/' + module + '/tests/' + module + '.test.js', /describe/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                done();
              });
            });
          });
          it('is Atomic', function(done) {
            // Filename
            var module = 'mymodule';

            var filesToTest = [
              'src/_modules/atoms/' + module + '/tests/' + module + '.test.js',
              'src/_modules/atoms/' + module + '/' + module + '.js',
              'src/_modules/atoms/' + module + '/' + module + '.jade',
              'src/_modules/atoms/' + module + '/' + module + '.sass'
            ];
            var fileContentToTest = [
              ['src/_modules/atoms/' + module + '/' + module + '.js', /export/i],
              ['src/_modules/atoms/' + module + '/tests/' + module + '.test.js', /describe/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {atomic: 'atom', path: '../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                done();
              });
            });
          });
          it('is Atomic but not valid', function(done) {
            // Filename
            var module = 'mymodule';

            var filesToTest = [
              'src/_modules/atoms/' + module + '/tests/' + module + '.test.js',
              'src/_modules/atoms/' + module + '/' + module + '.js',
              'src/_modules/atoms/' + module + '/' + module + '.jade',
              'src/_modules/atoms/' + module + '/' + module + '.sass'
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {atomic: 'derp', path: '../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules'
              }, function() {
                assert.noFile(filesToTest);
                done();
              });
            });
          });
          it('creates subdirectories', function(done) {
            // Filename
            var module = 'customdir/mymodule';

            var filesToTest = [
              'src/_modules/' + module + '/tests/' + module + '.test.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.jade',
              'src/_modules/' + module + '/' + module + '.sass'
            ];
            var fileContentToTest = [
              ['src/_modules/' + module + '/' + module + '.js', /export/i],
              ['src/_modules/' + module + '/tests/' + module + '.test.js', /describe/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../'}, {
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

  describe('Create module files when using Static Swig', function() {
    describe('Client modules', function() {
      describe('Handles defaults', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var module = 'mymodule';

            var filesToTest = [
              'src/_modules/' + module + '/tests/' + module + '.test.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.nunjucks',
              'src/_modules/' + module + '/' + module + '.scss'
            ];
            var fileContentToTest = [
              ['src/_modules/' + module + '/' + module + '.js', /export/i],
              ['src/_modules/' + module + '/tests/' + module + '.test.js', /describe/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'nunjucks',
              testFramework: 'jasmine',
              cssOption: 'sass',
              sassSyntax: 'scss',
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../'}, {
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
  describe('Handles Stylesheet Preprocessors', function() {
    it('Handles Sass with sass syntax', function(done) {
      // Filename
      var module = 'mymodule';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'src/_modules/' + module + '/' + module + '.sass'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'nunjucks',
        cssOption: 'sass',
        sassSyntax: 'sass'
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../'}, {
          // mock prompt data
          moduleFile: 'src/_modules'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles Less', function(done) {
      // Filename
      var module = 'mymodule';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'src/_modules/' + module + '/' + module + '.less'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'nunjucks',
        cssOption: 'less'
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../'}, {
          // mock prompt data
          moduleFile: 'src/_modules'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles stylus', function(done) {
      // Filename
      var module = 'mymodule';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'src/_modules/' + module + '/' + module + '.styl'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'nunjucks',
        cssOption: 'stylus'
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../'}, {
          // mock prompt data
          moduleFile: 'src/_modules'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
