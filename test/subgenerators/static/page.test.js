/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('Static Site page sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create page files when using Static Jade', function() {
    describe('Client page', function() {
      describe('Using Browserify', function() {
        it('Using Jasmine', function(done) {
          // Filename
          var page = 'mypage';

          var filesToTest = [
            'src/_pages/' + page + '/' + 'index.jade',
          ];
          var fileContentToTest = [
            ['src/_pages/' + page + '/' + 'index.jade', /extends/i],
          ];
          var fileContentToNotFind = [
            ['src/_pages/' + page + '/' + 'index.jade', /<div>/i]
          ];

          helpers.mockPrompt(this.app, {
            htmlOption: 'jade',
            singlePageApplication: false,
            testFramework: 'jasmine',
            useTesting: true,
            jsOption: 'browserify',
            cssOption: 'stylus'
          });

          this.app.run([], function() {
            createSubGenerator('page', page, {path: '../../../../'}, {
              // mock prompt data
              pageFile: 'src/_pages',
              useLayout: 'testTemplate',
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              assert.noFileContent(fileContentToNotFind);
              done();
            });
          });
        });
      });
    });
    describe('Client page with Dashboard', function() {
      it('Handles defaults', function(done) {
        // Filename
        var page = 'mypage';
        var fileContentToTest = [
          ['src/_pages/' + page + '/__dash__/' + page + '.dash.json', /status/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'jade',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('page', page, {path: '../../../../'}, {
            // mock prompt data
            pageFile: 'src/_pages',
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });

  describe('Create page files when using Static Swig', function() {
    describe('Client pages', function() {
      describe('Using Browserify', function() {
        it('Using Jasmine', function(done) {
          // Filename
          var page = 'mypage';

          var filesToTest = [
            'src/_pages/' + page + '/' + 'index.swig',
          ];
          var fileContentToTest = [
            ['src/_pages/' + page + '/' + 'index.swig', /extends/i],
          ];
          var fileContentToNotFind = [
            ['src/_pages/' + page + '/' + 'index.swig', /<div>/i]
          ];

          helpers.mockPrompt(this.app, {
            htmlOption: 'swig',
            singlePageApplication: false,
            testFramework: 'jasmine',
            useTesting: true,
            jsOption: 'browserify'
          });

          this.app.run([], function() {
            createSubGenerator('page', page, {path: '../../../../'}, {
              // mock prompt data
              pageFile: 'src/_pages',
              useLayout: 'testTemplate',
            }, function() {
              assert.file(filesToTest);
              assert.fileContent(fileContentToTest);
              assert.noFileContent(fileContentToNotFind);
              done();
            });
          });
        });
      });
    });
    describe('Client page with Dashboard', function() {
      it('Handles defaults', function(done) {
        // Filename
        var page = 'mypage';
        var fileContentToTest = [
          ['src/_pages/' + page + '/__dash__/' + page + '.dash.json', /status/i]
        ];

        helpers.mockPrompt(this.app, {
          htmlOption: 'swig',
          singlePageApplication: false,
          useDashboard: true
        });
        this.app.run([], function() {
          createSubGenerator('page', page, {path: '../../../../'}, {
            // mock prompt data
            pageFile: 'src/_pages',
          }, function() {
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });
});
