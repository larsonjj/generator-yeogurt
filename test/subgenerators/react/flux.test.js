/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Flux sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Does not create any flux files when using Backbone', function() {
    it('Handles defaults', function(done) {
      // Filename
      var flux = 'myflux';
      var filesToTest = [
        'client/' + flux + '/' + flux + '.constants.js',
        'client/' + flux + '/' + flux + '.actions.js',
        'client/' + flux + '/' + flux + '.store.js',
        'client/' + flux + '/__tests__/' + flux + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'client'
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
        'client/' + flux + '/' + flux + '.constants.js',
        'client/' + flux + '/' + flux + '.actions.js',
        'client/' + flux + '/' + flux + '.store.js',
        'client/' + flux + '/__tests__/' + flux + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade'
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'client'
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
        'client/' + flux + '/' + flux + '.constants.js',
        'client/' + flux + '/' + flux + '.actions.js',
        'client/' + flux + '/' + flux + '.store.js',
        'client/' + flux + '/__tests__/' + flux + '.spec.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'client'
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
        'client/' + flux + '/' + flux + '.constants.js',
        'client/' + flux + '/' + flux + '.actions.js',
        'client/' + flux + '/' + flux + '.store.js',
        'client/' + flux + '/__tests__/' + flux + '.spec.js'
      ];
      var fileContentToTest = [
        ['client/' + flux + '/' + flux + '.store.js', /Store/i],
        ['client/' + flux + '/' + flux + '.actions.js', /Action/i],
        ['client/' + flux + '/' + flux + '.constants.js', /Constant/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useFlux: true,
        useJsx: false
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'client'
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
        'client/' + flux + '/' + flux + '.constants.js',
        'client/' + flux + '/' + flux + '.actions.js',
        'client/' + flux + '/' + flux + '.store.js'
      ];
      var fileContentToTest = [
        ['client/' + flux + '/' + flux + '.constants.js', /Constant/i],
        ['client/' + flux + '/' + flux + '.actions.js', /Action/i],
        ['client/' + flux + '/' + flux + '.store.js', /Store/i]
      ];
      var filesNotCreated = [
        'client/' + flux + '/__tests__/' + flux + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useFlux: true,
        useTesting: false
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'client'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
  });
});
