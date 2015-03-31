/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Server route sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create route files when using Static Jade', function() {
    describe('Server routes', function() {
      it('Handles defaults', function(done) {
        // Filename
        var route = 'myroute';

        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/app/' + route + '/' + route + '.js',
          'server/app/' + route + '/' + route + '.controller.js',
          'server/app/' + route + '/' + route + '.jade',
          'server/app/' + route + '/package.json',
          'server/app/' + route + '/__tests__/' + route + '.spec.js'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('module', route, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'server/app',
            moduleLocation: 'server',
            type: 'page'
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
  });

  describe('Create route files when using Static Swig', function() {
    describe('Server routes', function() {
      it('Handles defaults', function(done) {
        // Filename
        var route = 'myroute';

        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/app/' + route + '/' + route + '.js',
          'server/app/' + route + '/' + route + '.controller.js',
          'server/app/' + route + '/' + route + '.swig',
          'server/app/' + route + '/package.json',
          'server/app/' + route + '/__tests__/' + route + '.spec.js'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('module', route, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'server/app',
            moduleLocation: 'server',
            type: 'page'
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
  });
});
