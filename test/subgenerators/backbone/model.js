/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Model sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Does not create any model files when using Static Site', function() {
    it('Handles defaults', function(done) {
      // Filename
      var model = 'mymodel';
      var filesToTest = [
        'client/app/' + model + '/__tests__/' + model + '.spec.js',
        'client/app/' + model + '/' + model + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: false,
        singlePageApplication: false,
        htmlOption: 'swig'
      });
      this.app.run([], function() {
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any model files when using React', function() {
    it('Handles defaults', function(done) {
      // Filename
      var model = 'mymodel';
      var filesToTest = [
        'client/app/' + model + '/__tests__/' + model + '.spec.js',
        'client/app/' + model + '/' + model + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any model files when using Static Jade', function() {
    it('Handles defaults', function(done) {
      // Filename
      var model = 'mymodel';
      var filesToTest = [
        'client/app/' + model + '/__tests__/' + model + '.spec.js',
        'client/app/' + model + '/' + model + '.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade',
        singlePageApplication: false
      });
      this.app.run([], function() {
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any model files when using Static Swig', function() {
    it('Handles defaults', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'swig',
        singlePageApplication: false
      });
      // Filename
      var model = 'mymodel';
      var filesToTest = [
        'client/app/' + model + '/__tests__/' + model + '.spec.js',
        'client/app/' + model + '/' + model + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create model files when using Backbone', function() {
    it('Handles defaults', function(done) {
      // Filename
      var model = 'mymodel';
      var filesToTest = [
        'client/app/' + model + '/__tests__/' + model + '.spec.js',
        'client/app/' + model + '/' + model + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with no testing', function(done) {
      // Filename
      var model = 'mymodel';
      var filesToTest = [
        'client/app/' + model + '/' + model + '.js'
      ];
      var filesNotCreated = [
        'client/app/' + model + '/__tests__/' + model + '.spec.js'
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
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
    it('Handles defaults with Browserify', function(done) {
      // Filename
      var model = 'mymodel';
      var fileContentToTest = [
        ['client/app/' + model + '/__tests__/' + model + '.spec.js', /describe/i],
        ['client/app/' + model + '/' + model + '.js', /module\.exports/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with RequireJS', function(done) {
      // Filename
      var model = 'mymodel';
      var fileContentToTest = [
        ['client/app/' + model + '/__tests__/' + model + '.spec.js', /define\(function\(require\)/i],
        ['client/app/' + model + '/' + model + '.js', /define\(function\(require\)/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'requirejs',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('model', model, {}, {
          // mock prompt data
          modelFile: 'client/app'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
  });
});
