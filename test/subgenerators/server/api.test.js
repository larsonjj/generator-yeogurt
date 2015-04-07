/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Server api sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create api files', function() {
    it('Handles defaults', function(done) {
      // Filename
      var api = 'myapi';

      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'server/api/' + api + '/' + api + '.js',
        'server/api/' + api + '/' + api + '.controller.js',
        'server/api/' + api + '/' + api + '.model.js',
        'server/api/' + api + '/package.json',
        'server/api/' + api + '/__tests__/' + api + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade',
        singlePageApplication: false,
        useServer: true,
        useServerTesting: true,
        dbOption: 'mongodb'
      });
      this.app.run([], function() {
        createSubGenerator('api', api, {path: '../../../../'}, {
          // mock prompt data
          apiFile: 'server/api',
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles Non-server apps', function(done) {
      // Filename
      var api = 'myapi';

      var filesToNotExist = [
        // add files and folders you expect to NOT exist here.
        'server/api/' + api + '/' + api + '.js',
        'server/api/' + api + '/' + api + '.controller.js',
        'server/api/' + api + '/' + api + '.model.js',
        'server/api/' + api + '/package.json',
        'server/api/' + api + '/__tests__/' + api + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade',
        singlePageApplication: false,
        useServer: false,
        useServerTesting: false,
        dbOption: 'none'
      });
      this.app.run([], function() {
        createSubGenerator('api', api, {path: '../../../../'}, {
          // mock prompt data
          apiFile: 'server/api',
        }, function() {
          assert.noFile(filesToNotExist);
          done();
        });
      });
    });
    it('Handles SQL apps', function(done) {
      // Filename
      var api = 'myapi';

      var filesToTest = [
        // add files and folders you expect to NOT exist here.
        'server/api/' + api + '/' + api + '.js',
        'server/api/' + api + '/' + api + '.controller.js',
        'server/api/' + api + '/' + api + '.model.js',
        'server/api/' + api + '/package.json',
        'server/api/' + api + '/__tests__/' + api + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        htmlOption: 'jade',
        singlePageApplication: false,
        useServer: false,
        useServerTesting: false,
        dbOption: 'mysql'
      });
      this.app.run([], function() {
        createSubGenerator('api', api, {path: '../../../../'}, {
          // mock prompt data
          apiFile: 'server/api',
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
