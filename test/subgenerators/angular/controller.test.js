/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Controller sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create controller files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var controller = 'mycontroller';
      var filesToTest = [
        'client/app/' + controller + '/' + controller + '.controller.js',
        'client/app/' + controller + '/__tests__/' + controller + '.controller.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('controller', controller, {path: '../../../../'}, {
          // mock prompt data
          controllerFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Non-angular warning', function(done) {
      // Filename
      var controller = 'mycontroller';
      var filesToNotExist = [
        'client/app/' + controller + '/' + controller + '.controller.js',
        'client/app/' + controller + '/__tests__/' + controller + '.controller.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('controller', controller, {path: '../../../../'}, {
          // mock prompt data
          controllerFile: 'client/app'
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
  });
});
