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
        'src/' + flux + '/' + flux + '.constants.js',
        'src/' + flux + '/' + flux + '.actions.js',
        'src/' + flux + '/' + flux + '.store.js',
        'src/' + flux + '/__tests__/' + flux + '.spec.js'
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
          fluxFile: 'src'
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
        'src/' + flux + '/' + flux + '.constants.js',
        'src/' + flux + '/' + flux + '.actions.js',
        'src/' + flux + '/' + flux + '.store.js',
        'src/' + flux + '/__tests__/' + flux + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade'
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'src'
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
        'src/' + flux + '/' + flux + '.constants.js',
        'src/' + flux + '/' + flux + '.actions.js',
        'src/' + flux + '/' + flux + '.store.js',
        'src/' + flux + '/__tests__/' + flux + '.spec.js'
      ];
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'src'
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
        'src/' + flux + '/' + flux + '.constants.js',
        'src/' + flux + '/' + flux + '.actions.js',
        'src/' + flux + '/' + flux + '.store.js',
        'src/' + flux + '/__tests__/' + flux + '.spec.js'
      ];
      var fileContentToTest = [
        ['src/' + flux + '/' + flux + '.store.js', /Store/i],
        ['src/' + flux + '/' + flux + '.actions.js', /Action/i],
        ['src/' + flux + '/' + flux + '.constants.js', /Constant/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useFlux: true,
        useJsx: false
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'src'
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
        'src/' + flux + '/' + flux + '.constants.js',
        'src/' + flux + '/' + flux + '.actions.js',
        'src/' + flux + '/' + flux + '.store.js'
      ];
      var fileContentToTest = [
        ['src/' + flux + '/' + flux + '.constants.js', /Constant/i],
        ['src/' + flux + '/' + flux + '.actions.js', /Action/i],
        ['src/' + flux + '/' + flux + '.store.js', /Store/i]
      ];
      var filesNotCreated = [
        'src/' + flux + '/__tests__/' + flux + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useFlux: true,
        useTesting: false
      });
      this.app.run([], function() {
        createSubGenerator('flux', flux, {path: '../../../../'}, {
          // mock prompt data
          fluxFile: 'src'
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
