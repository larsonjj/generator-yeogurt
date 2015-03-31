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
        var type = 'page';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/app/' + route + '/' + route + '.js',
          'client/app/' + route + '/' + route + '.controller.js',
          'client/app/' + route + '/' + route + '.jade',
          'client/app/' + route + '/' + route + '.scss',
          'client/app/' + route + '/package.json',
          'client/app/' + route + '/__tests__/' + route + '.spec.js'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true,
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('route', route, {path:'../../../../'}, {
            // mock prompt data
            routeFile: 'server/routes/',
            type: type
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
        var type = 'page';
        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/app/' + route + '/' + route + '.js',
          'client/app/' + route + '/' + route + '.controller.js',
          'client/app/' + route + '/' + route + '.swig',
          'client/app/' + route + '/' + route + '.scss',
          'client/app/' + route + '/package.json',
          'client/app/' + route + '/__tests__/' + route + '.spec.js'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true,
          cssOption: 'sass',
          sassSyntax: 'scss'
        });
        this.app.run([], function() {
          createSubGenerator('route', route, {path:'../../../../'}, {
            // mock prompt data
            routeFile: 'server/routes/',
            type: type
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
  });
});
