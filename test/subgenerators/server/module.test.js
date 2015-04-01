/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Server module sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create module files when using Static Jade', function() {
    describe('Server modules', function() {
      it('Handles defaults', function(done) {
        // Filename
        var module = 'mymodule';

        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'client/app/' + module + '/' + module + '.js',
          'client/app/' + module + '/__tests__/' + module + '.spec.js',
          'server/app/' + module + '/' + module + '.js',
          'server/app/' + module + '/' + module + '.controller.js',
          'server/app/' + module + '/' + module + '.jade',
          'server/app/' + module + '/package.json',
          'server/app/' + module + '/__tests__/' + module + '.spec.js'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
            // mock prompt data
            moduleFile: 'server/app',
            moduleLocation: 'server',
            type: 'page',
            generateFrontend: true
          }, function() {
            assert.file(filesToTest);
            done();
          });
        });
      });
    });
  });

  describe('Create module files when using Static Swig', function() {
    describe('Server modules', function() {
      it('Handles defaults', function(done) {
        // Filename
        var module = 'mymodule';

        var filesToTest = [
          // add files and folders you expect to NOT exist here.
          'server/app/' + module + '/' + module + '.js',
          'server/app/' + module + '/' + module + '.controller.js',
          'server/app/' + module + '/' + module + '.swig',
          'server/app/' + module + '/package.json',
          'server/app/' + module + '/__tests__/' + module + '.spec.js'
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useServer: true
        });
        this.app.run([], function() {
          createSubGenerator('module', module, {path: '../../../../'}, {
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
