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
              'client/app/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/' + module + '/' + module + '.js',
              'client/app/' + module + '/' + module + '.jade',
              'client/app/' + module + '/' + module + '.styl'
            ];
            var fileContentToTest = [
              ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
              ['client/app/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['client/app/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'stylus'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'client'
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
              'client/app/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/' + module + '/' + module + '.js',
              'client/app/' + module + '/' + module + '.jade',
              'client/app/' + module + '/' + module + '.less'
            ];
            var fileContentToTest = [
              ['client/app/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['client/app/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['client/app/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'mocha',
              jsOption: 'requirejs',
              cssOption: 'less'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'client'
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
              'client/app/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/' + module + '/' + module + '.js',
              'client/app/' + module + '/' + module + '.jade',
              'client/app/' + module + '/' + module + '.sass'
            ];
            var fileContentToTest = [
              ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
              ['client/app/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['client/app/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'jasmine',
              jsOption: 'browserify',
              cssOption: 'sass',
              sassSyntax: 'sass',
              moduleLocation: 'client'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app',
                type: type,
                moduleLocation: 'client'
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
              'client/app/modules/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/modules/' + module + '/' + module + '.js',
              'client/app/modules/' + module + '/' + module + '.jade'
            ];
            var fileContentToTest = [
              ['client/app/modules/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['client/app/modules/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['client/app/modules/' + module + '/' + module + '.jade', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'jade',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'mocha',
              jsOption: 'requirejs',
              moduleLocation: 'client'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app/modules',
                moduleLocation: 'client',
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
          'client/app/layout/' + module + '/' + module + '.jade',
          'client/app/layout/' + module + '/' + module + '.scss'
        ];
        var fileContentToTest = [
          ['client/app/layout/' + module + '/' + module + '.jade', /extend base/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false,
          useServerTesting: false,
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path:'../../../../'}, {
            // mock prompt data
            moduleFile: 'client/app/layout',
            type: type,
            moduleLocation: 'client'
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
          ['client/app/' + module + '/' + module + '.jade', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false,
          useServerTesting: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path:'../../../../'}, {
            // mock prompt data
            moduleFile: 'client/app',
            type: type,
            moduleLocation: 'client'
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
          ['client/app/modules/' + module + '/' + module + '.jade', /\[dash\:jade\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false,
          useServerTesting: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path:'../../../../'}, {
              // mock prompt data
              moduleFile: 'client/app/modules',
              type: type,
              moduleLocation: 'client'
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
              'client/app/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/' + module + '/' + module + '.js',
              'client/app/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
              ['client/app/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['client/app/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'jasmine',
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'client'
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
              'client/app/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/' + module + '/' + module + '.js',
              'client/app/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['client/app/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['client/app/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['client/app/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'mocha',
              jsOption: 'requirejs'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app',
                type: type,
                useLayout: 'testTemplate',
                moduleLocation: 'client'
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
              'client/app/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/' + module + '/' + module + '.js',
              'client/app/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['client/app/' + module + '/' + module + '.js', /module\.exports/i],
              ['client/app/' + module + '/__tests__/' + module + '.spec.js', /describe/i]
            ];
            var fileContentToNotFind = [
              ['client/app/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'jasmine',
              jsOption: 'browserify'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app',
                type: type,
                moduleLocation: 'client'
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
              'client/app/modules/' + module + '/__tests__/' + module + '.spec.js',
              'client/app/modules/' + module + '/' + module + '.js',
              'client/app/modules/' + module + '/' + module + '.swig'
            ];
            var fileContentToTest = [
              ['client/app/modules/' + module + '/' + module + '.js', /define\(function\(require\)/i],
              ['client/app/modules/' + module + '/__tests__/' + module + '.spec.js', /define\(function\(require\)/i]
            ];
            var fileContentToNotFind = [
              ['client/app/modules/' + module + '/' + module + '.swig', /<div>/i]
            ];

            helpers.mockPrompt(this.app, {
              htmlOption: 'swig',
              singlePageApplication: false,
              useServer: false,
              useServerTesting: false,
              testFramework: 'mocha',
              jsOption: 'requirejs'
            });

            this.app.run([], function() {
              createSubGenerator('module', module, {path:'../../../../'}, {
                // mock prompt data
                moduleFile: 'client/app/modules',
                type: type,
                moduleLocation: 'client'
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
          'client/app/layout/' + module + '/' + module + '.swig',
          'client/app/layout/' + module + '/' + module + '.scss'
        ];
        var fileContentToTest = [
          ['client/app/layout/' + module + '/' + module + '.swig', /extends 'base\.swig'/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false,
          useServerTesting: false,
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path:'../../../../'}, {
            // mock prompt data
            moduleFile: 'client/app/layout',
            type: type,
            moduleLocation: 'client'
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
          ['client/app/' + module + '/' + module + '.swig', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false,
          useServerTesting: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path:'../../../../'}, {
            // mock prompt data
            moduleFile: 'client/app',
            type: type,
            moduleLocation: 'client'
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
          ['client/app/modules/' + module + '/' + module + '.swig', /\[dash\:swig\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false,
          useServerTesting: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path:'../../../../'}, {
              // mock prompt data
              moduleFile: 'client/app/modules',
              type: type,
              moduleLocation: 'client'
            }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });
});
