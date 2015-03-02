/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('React sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Does not create any react files when using Backbone', function() {
    it('Handles defaults', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'test/spec/components/' + react + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/',
          testFile: 'test/spec/components/'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      // Filename
      var react = 'myreact';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/components/' + folder + react + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      // Filename
      var react = 'myreact';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/components/folder/' + react + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any react files when using Static Jade', function() {
    it('Handles defaults', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'test/spec/components/' + react + '.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/',
          testFile: 'test/spec/components/'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'jade'
      });
      // Filename
      var react = 'myreact';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/components/' + folder + react + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'jade'
      });
      // Filename
      var react = 'myreact';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/components/folder/' + react + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any react files when using Static Swig', function() {
    it('Handles defaults', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'swig'
      });
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'test/spec/components/' + react + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/',
          testFile: 'test/spec/components/'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'swig'
      });
      // Filename
      var react = 'myreact';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/components/' + folder + react + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'swig'
      });
      // Filename
      var react = 'myreact';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/components/folder/' + react + '.jsx'
      ];
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create react files when using React', function() {
    it('Handles defaults', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'test/spec/components/' + react + '.spec.js',
        'client/scripts/components/' + react + '.js'
      ];
      var fileContentToTest = [
        ['client/scripts/components/' + react + '.js', /React\.createElement/i]
      ];
      var fileContentNotThere = [
        ['test/spec/components/' + react + '.spec.js', /\jsx/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useJsx: false
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/',
          testFile: 'test/spec/components/'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          assert.noFileContent(fileContentNotThere);
          done();
        });
      });
    });
    it('Handles defaults with JSX', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'test/spec/components/' + react + '.spec.js',
        'client/scripts/components/' + react + '.jsx'
      ];
      var fileContentToTest = [
        ['test/spec/components/' + react + '.spec.js', /React\.createFactory/i],
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/',
          testFile: 'test/spec/components/'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults without testing', function(done) {
      // Filename
      var react = 'myreact';
      var filesToTest = [
        'client/scripts/components/' + react + '.jsx'
      ];
      var filesNotCreated = [
        'test/spec/components/' + react + '.spec.js',
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useTesting: false
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/',
          testFile: 'test/spec/components/'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
    it('Handles defaults with Mocha', function(done) {
      // Filename
      var react = 'myreact';
      var fileContentToTest = [
        ['test/spec/components/' + react + '.spec.js', /to\.be/i],
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'mocha'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/',
          testFile: 'test/spec/components/'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles folder option', function(done) {
      // Filename
      var react = 'myreact';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/components/' + folder + react + '.spec.js',
        'client/scripts/components/' + folder + react + '.jsx'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles folder option with funky path', function(done) {
      // Filename
      var react = 'myreact';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/components/folder/' + react + '.spec.js',
        'client/scripts/components/folder/' + react + '.jsx'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('react', react, {}, {
          // mock prompt data
          reactFile: 'client/scripts/components/' + folder,
          testFile: 'test/spec/components/' + folder
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
