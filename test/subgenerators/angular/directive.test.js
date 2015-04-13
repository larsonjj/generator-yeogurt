/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Directive sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create directive files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var directive = 'mydirective';
      var filesToTest = [
        'src/' + directive + '/' + directive + '.directive.js',
        'src/' + directive + '/__tests__/' + directive + '.directive.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('directive', directive, {path: '../../../../'}, {
          // mock prompt data
          directiveFile: 'src',
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('With HTML template', function(done) {
      // Filename
      var directive = 'mydirective';
      var filesToTest = [
        'src/' + directive + '/' + directive + '.directive.js',
        'src/' + directive + '/' + directive + '.html',
        'src/' + directive + '/__tests__/' + directive + '.directive.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('directive', directive, {path: '../../../../'}, {
          // mock prompt data
          directiveFile: 'src',
          directiveHTML: true,
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Non-angular warning', function(done) {
      // Filename
      var directive = 'mydirective';
      var filesToNotExist = [
        'src/' + directive + '/' + directive + '.decorator.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('directive', directive, {path: '../../../../'}, {
          // mock prompt data
          directiveFile: 'src'
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
  });
});
