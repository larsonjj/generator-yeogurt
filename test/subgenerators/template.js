/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Template sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Does not create any template files when using React', function() {
    it('Handles defaults', function(done) {
      // Filename
      var template = 'mytemplate';
      var filesToTest = [
        'client/scripts/components/' + template + '.jsx',
        'test/spec/components/' + template + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      // Filename
      var template = 'mytemplate';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/components/' + folder + template + '.js',
        'client/scripts/components/' + folder + template + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      // Filename
      var template = 'mytemplate';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/components/folder/' + template + '.js',
        'client/scripts/components/folder/' + template + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create template files when using Static HTML', function() {
    it('Handles defaults with type: Page', function(done) {
      // Filename
      var template = 'mytemplate';
      var type = 'page';
      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'client/templates/' + template + '.html',
        'client/templates/' + template + '.jade',
        'client/templates/' + template + '.swig',
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'html',
        singlePageApplication: false,
        useServer: false
      });
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/',
              type: type
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create template files when using Static Jade', function() {
    describe('Client templates', function() {
      describe('Handles defaults with type: Page', function() {
        it('Without template', function(done) {
          // Filename
          var template = 'mytemplate';
          var type = 'page';
          var filesToTest = [
            // add files and folders you expect to NOT exist here.
            'client/templates/' + template + '.jade',
          ];
          var fileContentToTest = [
            ['client/templates/' + template + '.jade', /page/i]
          ];

          helpers.mockPrompt(this.app, {
            htmlOption: 'jade',
            singlePageApplication: false,
            useServer: false
          });

          this.app.run([], function() {
            createSubGenerator('template', template, {}, {
              // mock prompt data
              templateFile: 'client/templates/',
              type: type
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        it('With template', function(done) {
          // Filename
          var template = 'mytemplate';
          var type = 'page';
          var filesToTest = [
            // add files and folders you expect to NOT exist here.
            'client/templates/' + template + '.jade',
          ];
          var fileContentToTest = [
            ['client/templates/' + template + '.jade', /testTemplate/i]
          ];

          helpers.mockPrompt(this.app, {
            htmlOption: 'jade',
            singlePageApplication: false,
            useServer: false
          });

          this.app.run([], function() {
            createSubGenerator('template', template, {}, {
              // mock prompt data
              templateFile: 'client/templates/',
              type: type,
              useLayout: 'testTemplate'
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
      });
      describe('Handles defaults with type: Module', function() {
        it('Without template', function(done) {
          // Filename
          var template = 'mytemplate';
          var type = 'module';
          var filesToTest = [
            // add files and folders you expect to NOT exist here.
            'client/templates/modules/' + template + '.jade',
          ];
          var fileContentToTest = [
            ['client/templates/modules/' + template + '.jade', /include client\/templates/i]
          ];

          helpers.mockPrompt(this.app, {
            htmlOption: 'jade',
            singlePageApplication: false,
            useServer: false
          });

          this.app.run([], function() {
            createSubGenerator('template', template, {}, {
                // mock prompt data
                templateFile: 'client/templates/modules/',
                type: type
              }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        it('With template', function(done) {
          // Filename
          var template = 'mytemplate';
          var type = 'module';
          var filesToTest = [
            // add files and folders you expect to NOT exist here.
            'client/templates/modules/' + template + '.jade',
          ];
          var fileContentToTest = [
            ['client/templates/modules/' + template + '.jade', /testTemplate/i]
          ];

          helpers.mockPrompt(this.app, {
            htmlOption: 'jade',
            singlePageApplication: false,
            useServer: false
          });

          this.app.run([], function() {
            createSubGenerator('template', template, {}, {
              // mock prompt data
              templateFile: 'client/templates/modules/',
              type: type
            }, function() {
              assert.file(filesToTest);
              assert.noFileContent(fileContentToTest);
              done();
            });
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/layouts/' + template + '.jade',
        ];
        var fileContentToTest = [
          ['client/templates/layouts/' + template + '.jade', /extend base/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/layouts/',
            type: type
          }, function() {
            assert.file(filesToTest);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with unsupported type', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'derp';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/' + template + '.jade',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/',
            type: type
          }, function() {
            assert.noFile(filesToTest);
            done();
          });
        });
      });
      it('Handles folder option', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = 'folder/';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/modules/' + folder + template + '.jade'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/modules/' + folder,
            type: type
          }, function() {
          assert.file(filesToTest);
          done();
        });
        });
      });
      it('Handles folder option with funky path', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = '/////folder/////';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/modules/' + folder + template + '.jade'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/modules/' + folder,
            type: type
          }, function() {
          assert.file(filesToTest);
          done();
        });
        });
      });
    });
    describe('Client templates with Dashboard', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'page';
        var fileContentToTest = [
          ['client/templates/' + template + '.jade', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/',
            type: type
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var fileContentToTest = [
          ['client/templates/modules/' + template + '.jade', /\[dash\:jade\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false,
          useDashboard: true
        });
        this.app.run([], function() {
            createSubGenerator('template', template, {}, {
              // mock prompt data
              templateFile: 'client/templates/modules/',
              type: type
            }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var fileContentToTest = [
          ['client/templates/layouts/' + template + '.jade', /\[dash\:jade\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
              // mock prompt data
              templateFile: 'client/templates/layouts/',
              type: type
            }, function() {
            assert.noFileContent(fileContentToTest);
            done();
          });
        });
      });
    });
    describe('Server templates', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'page';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/' + template + '.jade',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/modules/' + template + '.jade',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/layouts/' + template + '.jade',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/layouts/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles folder option', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = 'folder/';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/modules/' + folder + template + '.jade'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/' + folder,
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles folder option with funky path', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = '/////folder/////';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/modules/' + folder + template + '.jade'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/' + folder,
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
    describe('Server templates with Dashboard', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'page';
        var fileContentToTest = [
          // add files and folders you expect to NOT exist here.
          ['server/templates/' + template + '.jade', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/',
            type: type
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var fileContentToTest = [
          // add files and folders you expect to NOT exist here.
          ['server/templates/modules/' + template + '.jade', /\[dash\:jade\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/',
            type: type
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var fileContentToTest = [
          ['server/templates/layouts/' + template + '.jade', /\[dash\:jade\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/layouts/',
            type: type
          }, function() {
            assert.noFileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });

  describe('Does not create any template files when using Static Swig', function() {
    describe('Client templates', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'page';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/' + template + '.swig',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/modules/' + template + '.swig',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/modules/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/layouts/' + template + '.swig',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false
        });
        this.app.run([], function() {
            createSubGenerator('template', template, {}, {
              // mock prompt data
            templateFile: 'client/templates/layouts/',
            type: type
            }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles defaults with unsupported type', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'derp';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/' + template + '.swig',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/',
            type: type
          }, function() {
            assert.noFile(filesToTest);
            done();
          });
        });
      });
      it('Handles folder option', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = 'folder/';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/modules/' + folder + template + '.swig'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/modules/' + folder,
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles folder option with funky path', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = '/////folder/////';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/templates/modules/' + folder + template + '.swig'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/modules/' + folder,
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
    describe('Client templates with Dashboard', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'page';
        var fileContentToTest = [
          ['client/templates/' + template + '.swig', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'client/templates/',
            type: type
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var fileContentToTest = [
          ['client/templates/modules/' + template + '.swig', /\[dash\:swig\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false,
          useDashboard: true
        });
        this.app.run([], function() {
            createSubGenerator('template', template, {}, {
              // mock prompt data
            templateFile: 'client/templates/modules/',
            type: type
            }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var fileContentToTest = [
          ['client/templates/layouts/' + template + '.swig', /\[dash\:swig\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: false,
          useDashboard: true
        });
        this.app.run([], function() {
            createSubGenerator('template', template, {}, {
              // mock prompt data
              templateFile: 'client/templates/layouts/',
              type: type
            }, function() {
            assert.noFileContent(fileContentToTest);
            done();
          });
        });
      });
    });
    describe('Server templates', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'page';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/' + template + '.swig',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/modules/' + template + '.swig',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/layouts/' + template + '.swig',
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/layouts/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles folder option', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = 'folder/';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/modules/' + folder + template + '.swig'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/' + folder,
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
      it('Handles folder option with funky path', function(done) {
        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var folder = '/////folder/////';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/templates/modules/' + folder + template + '.swig'
        ];
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/' + folder,
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
    describe('Server templates with Dashboard', function() {
      it('Handles defaults with type: Page', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'page';
        var fileContentToTest = [
          // add files and folders you expect to NOT exist here.
          ['server/templates/' + template + '.swig', /\[dash\:data\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/',
            type: type
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Module', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'module';
        var fileContentToTest = [
          // add files and folders you expect to NOT exist here.
          ['server/templates/modules/' + template + '.swig', /\[dash\:swig\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/modules/',
            type: type
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      it('Handles defaults with type: Layout', function(done) {
        // Filename
        var template = 'mytemplate';
        var type = 'layout';
        var fileContentToTest = [
          ['server/templates/layouts/' + template + '.swig', /\[dash\:swig\]/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('template', template, {}, {
            // mock prompt data
            templateFile: 'server/templates/layouts/',
            type: type
          }, function() {
            assert.noFileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });

  describe('Create template files when using Backbone', function() {
    it('Handles defaults with Underscore', function(done) {
      // Filename
      var template = 'mytemplate';
      var filesToTest = [
        'client/templates/' + template + '.jst'
      ];
      var fileContentToTest = [
        ['client/templates/' + template + '.jst', /<div>/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with Handlebars', function(done) {
      // Filename
      var template = 'mytemplate';
      var filesToTest = [
        'client/templates/' + template + '.hbs'
      ];
      var fileContentToTest = [
        ['client/templates/' + template + '.hbs', /<div>/i]
      ];


      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'handlebars',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with Jade', function(done) {
      // Filename
      var template = 'mytemplate';
      var filesToTest = [
        'client/templates/' + template + '.jade'
      ];
      var fileContentToTest = [
        ['client/templates/' + template + '.jade', /<div>/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'jade',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/'
        }, function() {
          assert.file(filesToTest);
          assert.noFileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      // Filename
      var template = 'mytemplate';
      var folder = 'folder/';
      var filesToTest = [
        'client/templates/folder/' + template + '.jst'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/' + folder
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      // Filename
      var template = 'mytemplate';
      var folder = '/////folder/////';
      var filesToTest = [
        'client/templates/folder/' + template + '.jst'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('template', template, {}, {
          // mock prompt data
          templateFile: 'client/templates/' + folder
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
