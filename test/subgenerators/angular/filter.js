/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../helpers/create-generator').createSubGenerator;

describe('Filter sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('Create filter files with Angular', function() {
    it('Handles defaults', function(done) {
      // Filename
      var filter = 'myfilter';
      var filesToTest = [
        'client/app/' + filter + '/' + filter + '.filter.js',
        'client/app/' + filter + '/__tests__/' + filter + '.filter.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'angular',
        singlePageApplication: true
      });
      this.app.run([], function() {
        createSubGenerator('filter', filter, {}, {
          // mock prompt data
          filterFile: 'client/app'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
