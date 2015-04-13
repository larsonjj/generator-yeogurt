/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Decorator sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create decorator files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var decorator = 'mydecorator';
      var filesToTest = [
        'src/' + decorator + '/' + decorator + '.decorator.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('decorator', decorator, {path: '../../../../'}, {
          // mock prompt data
          decoratorFile: 'src'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Non-angular warning', function(done) {
      // Filename
      var decorator = 'mydecorator';
      var filesToNotExist = [
        'src/' + decorator + '/' + decorator + '.decorator.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'backbone',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('decorator', decorator, {path: '../../../../'}, {
          // mock prompt data
          decoratorFile: 'src'
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
  });
});
