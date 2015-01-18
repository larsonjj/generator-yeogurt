/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;


describe('Route sub-generator', function() {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Create route files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var route = 'myroute';
      var url = '/myroute';
      var filesToTest = [
        'client/app/' + route + '/' + route + '.js',
        'client/app/' + route + '/' + route + '.controller.spec.js',
        'client/app/' + route + '/' + route + '.controller.js',
        'client/app/' + route + '/' + route + '.html'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('route', route, {}, {
          // mock prompt data
          routeFile: 'client/app',
          routeURL: url
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles funky path', function(done) {
      // Filename
      var funkyPath = '/////funkypath/////';
      var url = '/myroute';
      var filesToTest = [
        'client/app/funkypath/funkypath.js',
        'client/app/funkypath/funkypath.controller.spec.js',
        'client/app/funkypath/funkypath.controller.js',
        'client/app/funkypath/funkypath.html'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('route', funkyPath, {}, {
          // mock prompt data
          routeFile: 'client/app',
          routeURL: url
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
