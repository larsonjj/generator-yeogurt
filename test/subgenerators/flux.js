/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Flux sub-generator', function() {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Does not create any flux files when using Backbone', function() {
    it('Handles defaults', function(done) {
      // Filename
      var flux = 'myflux';
      var filesToTest = [
        'test/spec/flux/stores/' + flux + '.js',
        'test/spec/flux/constants/' + flux + '.js',
        'test/spec/flux/actions/' + flux + '.js',
        'client/scripts/flux/stores/' + flux + '.js',
        'test/spec/flux/constants/' + flux + '.js',
        'test/spec/flux/actions/' + flux + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/',
          testFile: 'test/spec/flux/'
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
      var flux = 'myflux';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/flux/' + folder + 'stores/' + flux + '.js',
        'test/spec/flux/' + folder + 'actions/' + flux + '.js',
        'test/spec/flux/' + folder + 'constants/' + flux + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/' + folder,
          testFile: 'test/spec/flux/' + folder
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
      var flux = 'myflux';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/flux/' + folder + 'stores/' + flux + '.js',
        'test/spec/flux/' + folder + 'actions/' + flux + '.js',
        'test/spec/flux/' + folder + 'constants/' + flux + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/' + folder,
          testFile: 'test/spec/flux/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any flux files when using Static Jade', function() {
    it('Handles defaults', function(done) {
      // Filename
      var flux = 'myflux';
      var filesToTest = [
        'test/spec/flux/stores/' + flux + '.js',
        'test/spec/flux/constants/' + flux + '.js',
        'test/spec/flux/actions/' + flux + '.js',
        'client/scripts/flux/stores/' + flux + '.js',
        'test/spec/flux/constants/' + flux + '.js',
        'test/spec/flux/actions/' + flux + '.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade'
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/',
          testFile: 'test/spec/flux/'
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
      var flux = 'myflux';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/flux/' + folder + 'stores/' + flux + '.js',
        'test/spec/flux/' + folder + 'actions/' + flux + '.js',
        'test/spec/flux/' + folder + 'constants/' + flux + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/' + folder,
          testFile: 'test/spec/flux/' + folder
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
      var flux = 'myflux';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/flux/' + folder + 'stores/' + flux + '.js',
        'test/spec/flux/' + folder + 'actions/' + flux + '.js',
        'test/spec/flux/' + folder + 'constants/' + flux + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/' + folder,
          testFile: 'test/spec/flux/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any flux files when using Static Swig', function() {
    it('Handles defaults', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'swig'
      });
      // Filename
      var flux = 'myflux';
      var filesToTest = [
        'test/spec/flux/stores/' + flux + '.js',
        'test/spec/flux/constants/' + flux + '.js',
        'test/spec/flux/actions/' + flux + '.js',
        'client/scripts/flux/stores/' + flux + '.js',
        'client/scripts/flux/constants/' + flux + '.js',
        'client/scripts/flux/actions/' + flux + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/',
          testFile: 'test/spec/flux/'
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
      var flux = 'myflux';
      var folder = 'folder/';
      var filesToTest = [
        'test/spec/flux/' + folder + 'stores/' + flux + '.js',
        'test/spec/flux/' + folder + 'actions/' + flux + '.js',
        'test/spec/flux/' + folder + 'constants/' + flux + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/' + folder,
          testFile: 'test/spec/flux/' + folder
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
      var flux = 'myflux';
      var folder = '/////folder/////';
      var filesToTest = [
        'test/spec/flux/' + folder + 'stores/' + flux + '.js',
        'test/spec/flux/' + folder + 'actions/' + flux + '.js',
        'test/spec/flux/' + folder + 'constants/' + flux + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/' + folder,
          testFile: 'test/spec/flux/' + folder
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create flux files when using flux', function() {
    it('Handles defaults', function(done) {
      // Filename
      var flux = 'myflux';
      var filesToTest = [
        'test/spec/flux/stores/' + flux + '.spec.js',
        'client/scripts/flux/stores/' + flux + '.js',
        'test/spec/flux/actions/' + flux + '.spec.js',
        'client/scripts/flux/actions/' + flux + '.js',
        'test/spec/flux/constants/' + flux + '.spec.js',
        'client/scripts/flux/constants/' + flux + '.js'
      ];
      var fileContentToTest = [
        ['client/scripts/flux/stores/' + flux + '.js', /Store/i],
        ['client/scripts/flux/actions/' + flux + '.js', /Action/i],
        ['client/scripts/flux/constants/' + flux + '.js', /Constant/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useFlux: true,
        useJsx: false
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/',
          testFile: 'test/spec/flux/'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults without testing', function(done) {
      // Filename
      var flux = 'myflux';
      var filesToTest = [
        'client/scripts/flux/stores/' + flux + '.js',
        'client/scripts/flux/constants/' + flux + '.js',
        'client/scripts/flux/actions/' + flux + '.js'
      ];
      var fileContentToTest = [
        ['client/scripts/flux/stores/' + flux + '.js', /Store/i],
        ['client/scripts/flux/actions/' + flux + '.js', /Action/i],
        ['client/scripts/flux/constants/' + flux + '.js', /Constant/i]
      ];
      var filesNotCreated = [
        'test/spec/flux/stores/' + flux + '.spec.js',
        'test/spec/flux/actions/' + flux + '.spec.js',
        'test/spec/flux/constants/' + flux + '.spec.js',
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useFlux: true,
        useTesting: false
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/',
          testFile: 'test/spec/flux/'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with Mocha', function(done) {
      // Filename
      var flux = 'myflux';
      var fileContentToTest = [
        ['test/spec/flux/stores/' + flux + '.spec.js', /jshint expr/i],
        ['test/spec/flux/actions/' + flux + '.spec.js', /jshint expr/i],
        ['test/spec/flux/constants/' + flux + '.spec.js', /jshint expr/i],
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useFlux: true,
        testFramework: 'mocha'
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {}, {
          // mock prompt data
          fluxFile: 'client/scripts/flux/',
          testFile: 'test/spec/flux/'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
  });
});
