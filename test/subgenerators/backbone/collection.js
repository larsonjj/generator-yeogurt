/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Collection sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Does not create any collection files when using React', function() {
    it('Handles defaults', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToTest = [
        'client/app/' + collection + '/__tests__/' + collection + '.spec.js',
        'client/app/' + collection + '/' + collection + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {}, {
          // mock prompt data
          collectionFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any collection files when using Static Jade', function() {
    it('Handles defaults', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToTest = [
        'client/app/' + collection + '/__tests__/' + collection + '.spec.js',
        'client/app/' + collection + '/' + collection + '.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade',
        singlePageApplication: false
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {}, {}, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Does not create any collection files when using Static Swig', function() {
    it('Handles defaults', function(done) {
      helpers.mockPrompt(this.app, {
        htmlOption: 'swig',
        singlePageApplication: false
      });
      // Filename
      var collection = 'mycollection';
      var filesToTest = [
        'client/app/' + collection + '/__tests__/' + collection + '.spec.js',
        'client/app/' + collection + '/' + collection + '.js'
      ];
      this.app.run([], function() {
        createSubGenerator('collection', collection, {}, {
          // mock prompt data
          collectionFile: 'client/app'
        }, function() {
          assert.noFile(filesToTest);
          done();
        });
      });
    });
  });

  describe('Create collection files when using Backbone', function() {
    it('Handles defaults', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToTest = [
        'client/app/' + collection + '/__tests__/' + collection + '.spec.js',
        'client/app/' + collection + '/' + collection + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        useTesting: true,
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {}, {
          // mock prompt data
          collectionFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with no testing', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToTest = [
        'client/app/' + collection + '/' + collection + '.js'
      ];
      var filesNotCreated = [
        'client/app/' + collection + '/__tests__/' + collection + '.spec.js'
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
        createSubGenerator('collection', collection, {}, {
          // mock prompt data
          collectionFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
    it('Handles defaults with Browserify', function(done) {
      // Filename
      var collection = 'mycollection';
      var fileContentToTest = [
        ['client/app/' + collection + '/__tests__/' + collection + '.spec.js', /describe/i],
        ['client/app/' + collection + '/' + collection + '.js', /module\.exports/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {}, {
          // mock prompt data
          collectionFile: 'client/app'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with RequireJS', function(done) {
      // Filename
      var collection = 'mycollection';
      var fileContentToTest = [
        ['client/app/' + collection + '/__tests__/' + collection + '.spec.js', /define\(function\(require\)/i],
        ['client/app/' + collection + '/' + collection + '.js', /define\(function\(require\)/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'requirejs',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {}, {
          // mock prompt data
          collectionFile: 'client/app'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
  });
});
