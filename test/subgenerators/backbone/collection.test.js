/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Collection sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create collection files when using Backbone', function() {
    it('Handles defaults', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToTest = [
        'src/' + collection + '/__tests__/' + collection + '.spec.js',
        'src/' + collection + '/' + collection + '.js'
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
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src'
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
        'src/' + collection + '/' + collection + '.js'
      ];
      var filesNotCreated = [
        'src/' + collection + '/__tests__/' + collection + '.spec.js'
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
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
    it('Handles defaults with Vanilla JS', function(done) {
      // Filename
      var collection = 'mycollection';
      var fileContentToTest = [
        ['src/' + collection + '/__tests__/' + collection + '.spec.js', /describe/i],
      ];

      var fileContentThatShouldntExist = [
          ['src/' + collection + '/' + collection + '.js', /module\.exports/i],
          ['src/' + collection + '/' + collection + '.js', /define\(function\(require\)/i]
        ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'none',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src'
        }, function() {
          assert.fileContent(fileContentToTest);
          assert.noFileContent(fileContentThatShouldntExist);
          done();
        });
      });
    });
    it('Handles defaults with Browserify', function(done) {
      // Filename
      var collection = 'mycollection';
      var fileContentToTest = [
        ['src/' + collection + '/__tests__/' + collection + '.spec.js', /describe/i],
        ['src/' + collection + '/' + collection + '.js', /module\.exports/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src'
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
        ['src/' + collection + '/__tests__/' + collection + '.spec.js', /define\(function\(require\)/i],
        ['src/' + collection + '/' + collection + '.js', /define\(function\(require\)/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'requirejs',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Non-backbone warning', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToNotExist = [
        'src/' + collection + '/__tests__/' + collection + '.spec.js',
        'src/' + collection + '/' + collection + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src'
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
  });
});
