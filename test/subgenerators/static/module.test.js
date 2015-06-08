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
      describe('Handles defaults with type: Page', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'page';

            var filesToTest = [
              'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.jade',
              'src/_modules/' + module + '/' + module + '.styl'
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
              cssOption: 'stylus'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules',
                type: type,
                useLayout: 'testTemplate',
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
      describe('Handles defaults with type: Module', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'module';

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
                moduleFile: 'src/_modules',
                type: type,
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
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var module = 'mymodule';
        var type = 'layout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/layouts/' + module + '/' + module + '.jade',
          'src/layouts/' + module + '/' + module + '.scss'
        ];
        var fileContentToTest = [
          ['src/layouts/' + module + '/' + module + '.jade', /extend/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'src/layouts',
            type: type,
          }, function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
    describe('Client modules with Dashboard', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var module = 'mymodule';
        var type = 'page';
        var fileContentToTest = [
          ['src/_modules/' + module + '/' + module + '.jade', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'src/_modules',
            type: type,
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var module = 'mymodule';
        var type = 'module';
        var fileContentToTest = [
          ['src/modules/' + module + '/' + module + '.jade', /\[dash\:jade\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
              // mock prompt data
              moduleFile: 'src/modules',
              type: type,
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
      describe('Handles defaults with type: Page', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'page';

            var filesToTest = [
              'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['src/_modules/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/_modules/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/_modules/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              testFramework: 'jasmine',
              useTesting: true,
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules',
                type: type,
                useLayout: 'testTemplate',
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
      describe('Handles defaults with type: Module', function() {
        describe('Using Browserify', function() {
          it('Using Jasmine', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'module';

            var filesToTest = [
              'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
              'src/_modules/' + module + '/' + module + '.js',
              'src/_modules/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['src/_modules/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/_modules/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/_modules/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              testFramework: 'jasmine',
              useTesting: true,
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src/_modules',
                type: type,
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
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var module = 'mymodule';
        var type = 'layout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'src/layouts/' + module + '/' + module + '.swig',
          'src/layouts/' + module + '/' + module + '.scss'
        ];
        var fileContentToTest = [
          ['src/layouts/' + module + '/' + module + '.swig', /extends/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'src/layouts',
            type: type,
          }, function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
    describe('Client modules with Dashboard', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var module = 'mymodule';
        var type = 'page';
        var fileContentToTest = [
          ['src/_modules/' + module + '/' + module + '.swig', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'src/_modules',
            type: type,
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var module = 'mymodule';
        var type = 'module';
        var fileContentToTest = [
          ['src/modules/' + module + '/' + module + '.swig', /\[dash\:swig\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
              // mock prompt data
              moduleFile: 'src/modules',
              type: type,
            }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });
});
