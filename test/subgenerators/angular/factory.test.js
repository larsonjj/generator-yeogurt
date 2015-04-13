/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Factory sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create factory files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var factory = 'myfactory';
      var filesToTest = [
        'src/' + factory + '/' + factory + '.factory.js',
        'src/' + factory + '/__tests__/' + factory + '.factory.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('factory', factory, {path: '../../../../'}, {
          // mock prompt data
          factoryFile: 'src'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Non-angular warning', function(done) {
      // Filename
      var factory = 'myfactory';
      var filesToNotExist = [
        'src/' + factory + '/' + factory + '.decorator.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('factory', factory, {path: '../../../../'}, {
          // mock prompt data
          factoryFile: 'src'
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
  });
});
