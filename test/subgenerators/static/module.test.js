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
              'src/' + module + '/__tests__/' + module + '.spec.js',
              'src/' + module + '/' + module + '.js',
              'src/' + module + '/' + module + '.jade',
              'src/' + module + '/' + module + '.styl'
            ];
            var fileContentToTest = [
              ['src/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'stylus'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'src'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                assert.noFileContent(fileContentToNotFind);
                done();
              });
            });
          });
        });
        describe('Using RequireJS', function() {
          it('Using Mocha', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'page';

            var filesToTest = [
              'src/' + module + '/__tests__/' + module + '.spec.js',
              'src/' + module + '/' + module + '.js',
              'src/' + module + '/' + module + '.jade',
              'src/' + module + '/' + module + '.less'
            ];
            var fileContentToTest = [
              ['src/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['src/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['src/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              testFramework: 'mocha',
              jsOption: 'requirejs',
              cssOption: 'less'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'src'
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
              'src/' + module + '/__tests__/' + module + '.spec.js',
              'src/' + module + '/' + module + '.js',
              'src/' + module + '/' + module + '.jade',
              'src/' + module + '/' + module + '.sass'
            ];
            var fileContentToTest = [
              ['src/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass',
              moduleLocation: 'src'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src',
                type: type,
                moduleLocation: 'src'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                assert.noFileContent(fileContentToNotFind);
                done();
              });
            });
          });
        });
        describe('Using RequireJS', function() {
          it('Using Mocha', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'module';

            var filesToTest = [
              'src/modules/' + module + '/__tests__/' + module + '.spec.js',
              'src/modules/' + module + '/' + module + '.js',
              'src/modules/' + module + '/' + module + '.jade'
            ];
            var fileContentToTest = [
              ['src/modules/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['src/modules/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['src/modules/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              testFramework: 'mocha',
              jsOption: 'requirejs',
              moduleLocation: 'src'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src/modules',
                moduleLocation: 'src',
                type: type
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
            moduleLocation: 'src'
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
          ['src/' + module + '/' + module + '.jade', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'src',
            type: type,
            moduleLocation: 'src'
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
              moduleLocation: 'src'
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
              'src/' + module + '/__tests__/' + module + '.spec.js',
              'src/' + module + '/' + module + '.js',
              'src/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['src/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              testFramework: 'jasmine',
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'src'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                assert.noFileContent(fileContentToNotFind);
                done();
              });
            });
          });
        });
        describe('Using RequireJS', function() {
          it('Using Mocha', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'page';

            var filesToTest = [
              'src/' + module + '/__tests__/' + module + '.spec.js',
              'src/' + module + '/' + module + '.js',
              'src/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['src/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['src/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['src/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              testFramework: 'mocha',
              jsOption: 'requirejs'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'src'
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
              'src/' + module + '/__tests__/' + module + '.spec.js',
              'src/' + module + '/' + module + '.js',
              'src/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['src/' + module + '/' + module + '.js', /module\.exports/i],
              ['src/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['src/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              testFramework: 'jasmine',
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src',
                type: type,
                moduleLocation: 'src'
              }, function() {
                assert.file(filesToTest);
                assert.fileContent(fileContentToTest);
                assert.noFileContent(fileContentToNotFind);
                done();
              });
            });
          });
        });
        describe('Using RequireJS', function() {
          it('Using Mocha', function(done) {
            // Filename
            var module = 'mymodule';
            var type = 'module';

            var filesToTest = [
              'src/modules/' + module + '/__tests__/' + module + '.spec.js',
              'src/modules/' + module + '/' + module + '.js',
              'src/modules/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['src/modules/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['src/modules/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['src/modules/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              testFramework: 'mocha',
              jsOption: 'requirejs'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path: '../../../../'}, {
                // mock prompt data
                moduleFile: 'src/modules',
                type: type,
                moduleLocation: 'src'
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
            moduleLocation: 'src'
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
          ['src/' + module + '/' + module + '.swig', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'src',
            type: type,
            moduleLocation: 'src'
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
              moduleLocation: 'src'
            }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });
});
