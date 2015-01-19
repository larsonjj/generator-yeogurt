/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Service sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Create service files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var service = 'myservice';
      var filesToTest = [
        'client/app/' + service + '/' + service + '.service.js',
        'client/app/' + service + '/' + service + '.service.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('service', service, {}, {
          // mock prompt data
          serviceFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles funky path', function(done) {
      // Filename
      var funkyPath = '/////funkypath/////';
      var filesToTest = [
        'client/app/funkypath/funkypath.service.js',
        'client/app/funkypath/funkypath.service.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('service', funkyPath, {}, {
          // mock prompt data
          serviceFile: 'client/app',
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
