/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using React', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('On the Client', function() {
    describe('With Browserify', function() {
      describe('With Defaults', function() {
        it ('Creates expected files', function(done) {
          var expected = [
            'client/app',
            'client/app/main.js',
            'client/app/routes.js',
            'client/app/main.constants.js',
            'client/app/main.actions.js',
            'client/app/lib/store.js',
            'client/app/main.dispatcher.js',
            'client/app/main.store.js'
          ];

          var fileContentToTest = [
            ['client/app/routes.js', /module\.exports/i],
            ['client/index.html', /app\-wrapper/i]
          ];

          helpers.mockPrompt(this.app, {
            singlePageApplication: true,
            jsFramework: 'react',
            jsTemplate: false,
            jsOption: 'browserify',
            useServer: false,
          });

          this.app.run([], function() {
            assert.file(expected);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      describe('Using Jasmine', function() {
        describe('Using JSX', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.jsx',
              'client/app/layout/base.jsx'
            ];
            var fileContentToTest = [
              ['client/app/index/index.jsx', /<div/i],
              ['package.json', /node-jsx/i],
              ['client/app/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              jsTemplate: false,
              jsOption: 'browserify',
              useServer: false,
              testFramework: 'jasmine'
            });

            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using JS', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /React\.createElement/i],
            ];
            var fileContentNotThere = [
              ['package.json', /node-jsx/i],
              ['client/app/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              useJsx: false,
              jsTemplate: false,
              jsOption: 'browserify',
              useServer: false,
              testFramework: 'jasmine'
            });

            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              assert.noFileContent(fileContentNotThere);
              done();
            });
          });
        });
      });
      describe('Using Mocha', function() {
        describe('Using JSX', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.jsx',
              'client/app/layout/base.jsx'
            ];
            var fileContentToTest = [
              ['client/app/index/index.jsx', /<div/i],
              ['package.json', /node-jsx/i],
              ['client/app/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              jsTemplate: false,
              jsOption: 'browserify',
              useServer: false,
              testFramework: 'mocha'
            });

            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using JS', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /React\.createElement/i],
            ];
            var fileContentNotThere = [
              ['package.json', /node-jsx/i],
              ['client/app/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              useJsx: false,
              jsTemplate: false,
              jsOption: 'browserify',
              useServer: false,
              testFramework: 'mocha'
            });

            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              assert.noFileContent(fileContentNotThere);
              done();
            });
          });
        });
      });
    });
  });
});
