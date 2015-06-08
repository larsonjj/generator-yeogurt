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

  describe('Create collection files when using Marionette', function() {
    it('Handles defaults', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToTest = [
        'src/_scripts/' + collection + '/__tests__/' + collection + '.spec.js',
        'src/_scripts/' + collection + '/' + collection + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'marionette',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        useTesting: true,
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src/_scripts'
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
        'src/_scripts/' + collection + '/' + collection + '.js'
      ];
      var filesNotCreated = [
        'src/_scripts/' + collection + '/__tests__/' + collection + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'marionette',
        singlePageApplication: true,
        useTesting: false,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src/_scripts'
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
        ['src/_scripts/' + collection + '/__tests__/' + collection + '.spec.js', /describe/i],
        ['src/_scripts/' + collection + '/' + collection + '.js', /module\.exports/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'marionette',
        singlePageApplication: true,
        jsTemplate: 'underscore',
        jsOption: 'browserify',
        testFramework: 'jasmine'
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src/_scripts'
        }, function() {
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Non-marionette warning', function(done) {
      // Filename
      var collection = 'mycollection';
      var filesToNotExist = [
        'src/_scripts/' + collection + '/__tests__/' + collection + '.spec.js',
        'src/_scripts/' + collection + '/' + collection + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('collection', collection, {path: '../../../../'}, {
          // mock prompt data
          collectionFile: 'src/_scripts'
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
  });
});
