/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Service sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create service files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var service = 'myservice';
      var filesToTest = [
        'src/' + service + '/' + service + '.service.js',
        'src/' + service + '/__tests__/' + service + '.service.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('service', service, {path: '../../../../'}, {
          // mock prompt data
          serviceFile: 'src'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Non-angular warning', function(done) {
      // Filename
      var service = 'myservice';
      var filesToNotExist = [
        'src/' + service + '/' + service + '.decorator.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('service', service, {path: '../../../../'}, {
          // mock prompt data
          serviceFile: 'src'
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
  });
});
