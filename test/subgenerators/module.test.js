/*global describe, beforeEach, it*/
'use strict';

var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = require('yeoman-assert');
var createAppGenerator = require('../helpers/create-generator')
  .createAppGenerator;
var createSubGenerator = require('../helpers/create-generator')
  .createSubGenerator;

describe('Static Site module sub-generator', function() {
  describe('Create module files when using Static Jade', function() {
    beforeEach(function() {
      return createAppGenerator().withPrompts({
        existingConfig: true,
        htmlOption: 'jade',
        testFramework: 'jasmine',
        jsOption: 'browserify',
        cssOption: 'sass',
        sassSyntax: 'sass'
      });
    });
    describe('Client modules', function() {
      describe('Handles defaults', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function() {
            // Filename
            var moduleName = 'mymodule';

            var filesToTest = [
              'src/_modules/' +
                moduleName +
                '/tests/' +
                moduleName +
                '.test.js',
              'src/_modules/' + moduleName + '/' + moduleName + '.js',
              'src/_modules/' + moduleName + '/' + moduleName + '.jade',
              'src/_modules/' + moduleName + '/' + moduleName + '.sass'
            ];
            var fileContentToTest = [
              [
                'src/_modules/' + moduleName + '/' + moduleName + '.js',
                /export/i
              ],
              [
                'src/_modules/' +
                  moduleName +
                  '/tests/' +
                  moduleName +
                  '.test.js',
                /describe/i
              ]
            ];

            return createSubGenerator('module')
              .withArguments([moduleName])
              .then(function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
              });
          });
          it('is Atomic', function(done) {
            // Filename
            var moduleName = 'mymodule';

            var filesToTest = [
              'src/_modules/atoms/' +
                moduleName +
                '/tests/' +
                moduleName +
                '.test.js',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.jade',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.sass'
            ];
            var fileContentToTest = [
              [
                'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
                /export/i
              ],
              [
                'src/_modules/atoms/' +
                  moduleName +
                  '/tests/' +
                  moduleName +
                  '.test.js',
                /describe/i
              ]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass'
            });

            this.app.run([], function() {
              createSubGenerator(
                'module',
                module,
                { atomic: 'atom', path: '../../../' },
                {
                  // mock prompt data
                  moduleFile: 'src/_modules'
                },
                function() {
                  assert.file(filesToTest);
                  assert.fileContent(fileContentToTest);
                  done();
                }
              );
            });
          });
          it('is Atomic but not valid', function(done) {
            // Filename
            var moduleName = 'mymodule';

            var filesToTest = [
              'src/_modules/atoms/' +
                moduleName +
                '/tests/' +
                moduleName +
                '.test.js',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.jade',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.sass'
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass'
            });

            this.app.run([], function() {
              createSubGenerator(
                'module',
                module,
                { atomic: 'derp', path: '../../../' },
                {
                  // mock prompt data
                  moduleFile: 'src/_modules'
                },
                function() {
                  assert.noFile(filesToTest);
                  done();
                }
              );
            });
          });
          it('is Atomic and has multiple directories', function(done) {
            // Filename
            var moduleName = 'really/cool/mymodule';

            var filesToTest = [
              'src/_modules/atoms/' +
                moduleName +
                '/tests/' +
                moduleName +
                '.test.js',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.js',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.jade',
              'src/_modules/atoms/' + moduleName + '/' + moduleName + '.sass'
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass'
            });

            this.app.run([], function() {
              createSubGenerator(
                'module',
                module,
                { atomic: 'atom', path: '../../../' },
                {
                  // mock prompt data
                  moduleFile: 'src/_modules'
                },
                function() {
                  assert.noFile(filesToTest);
                  done();
                }
              );
            });
          });
        });
      });
    });
  });

  describe('Create module files when using Static Nunjucks', function() {
    describe('Client modules', function() {
      describe('Handles defaults', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var moduleName = 'mymodule';

            var filesToTest = [
              'src/_modules/' +
                moduleName +
                '/tests/' +
                moduleName +
                '.test.js',
              'src/_modules/' + moduleName + '/' + moduleName + '.js',
              'src/_modules/' + moduleName + '/' + moduleName + '.nunjucks',
              'src/_modules/' + moduleName + '/' + moduleName + '.scss'
            ];
            var fileContentToTest = [
              [
                'src/_modules/' + moduleName + '/' + moduleName + '.js',
                /export/i
              ],
              [
                'src/_modules/' +
                  moduleName +
                  '/tests/' +
                  moduleName +
                  '.test.js',
                /describe/i
              ]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'nunjucks',
              testFramework: 'jasmine',
              cssOption: 'sass',
              sassSyntax: 'scss',
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator(
                'module',
                module,
                { path: '../../../' },
                {
                  // mock prompt data
                  moduleFile: 'src/_modules'
                },
                function() {
                  assert.file(filesToTest);
                  assert.fileContent(fileContentToTest);
                  done();
                }
              );
            });
          });
        });
      });
    });
  });
  describe('Handles Stylesheet Preprocessors', function() {
    it('Handles Sass with sass syntax', function(done) {
      // Filename
      var moduleName = 'mymodule';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'src/_modules/' + moduleName + '/' + moduleName + '.sass'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'nunjucks',
        cssOption: 'sass',
        sassSyntax: 'sass'
      });
      this.app.run([], function() {
        createSubGenerator(
          'module',
          module,
          { path: '../../../' },
          {
            // mock prompt data
            moduleFile: 'src/_modules'
          },
          function() {
            assert.file(filesToTest);
            done();
          }
        );
      });
    });
    it('Handles Less', function(done) {
      // Filename
      var moduleName = 'mymodule';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'src/_modules/' + moduleName + '/' + moduleName + '.less'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'nunjucks',
        cssOption: 'less'
      });
      this.app.run([], function() {
        createSubGenerator(
          'module',
          module,
          { path: '../../../' },
          {
            // mock prompt data
            moduleFile: 'src/_modules'
          },
          function() {
            assert.file(filesToTest);
            done();
          }
        );
      });
    });
    it('Handles stylus', function(done) {
      // Filename
      var moduleName = 'mymodule';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'src/_modules/' + moduleName + '/' + moduleName + '.styl'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'nunjucks',
        cssOption: 'stylus'
      });
      this.app.run([], function() {
        createSubGenerator(
          'module',
          module,
          { path: '../../../' },
          {
            // mock prompt data
            moduleFile: 'src/_modules'
          },
          function() {
            assert.file(filesToTest);
            done();
          }
        );
      });
    });
  });
});
