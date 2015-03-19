/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Provider sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Create provider files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var provider = 'myprovider';
      var filesToTest = [
        'client/app/' + provider + '/' + provider + '.provider.js',
        'client/app/' + provider + '/__tests__/' + provider + '.provider.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('provider', provider, {}, {
          // mock prompt data
          providerFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
