/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Angular module sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create module files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var module = 'mymodule';
      var url = '/mymodule';
      var filesToTest = [
        'client/app/' + module + '/' + module + '.js',
        'client/app/' + module + '/__tests__/' + module + '.controller.spec.js',
        'client/app/' + module + '/' + module + '.controller.js',
        'client/app/' + module + '/' + module + '.html'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../../'}, {
          // mock prompt data
          moduleFile: 'client/app',
          moduleURL: url
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
