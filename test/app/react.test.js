/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
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
            'src',
            'src/main.js',
            'src/routes.js',
            'src/main.constants.js',
            'src/main.actions.js',
            'src/lib/store.js',
            'src/main.dispatcher.js',
            'src/main.store.js'
          ];

          var fileContentToTest = [
            ['src/routes.js', /module\.exports/i],
            ['src/index.html', /app\-wrapper/i]
          ];

          helpers.mockPrompt(this.app, {
            singlePageApplication: true,
            jsFramework: 'react',
            jsTemplate: false,
            jsOption: 'browserify',
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
              'src/index/index.jsx',
              'src/layouts/base.jsx'
            ];
            var fileContentToTest = [
              ['src/index/index.jsx', /<div/i],
              ['package.json', /node-jsx/i],
              ['src/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              jsTemplate: false,
              jsOption: 'browserify',
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
              'src/index/index.js',
            ];
            var fileContentToTest = [
              ['src/index/index.js', /React\.createElement/i],
            ];
            var fileContentNotThere = [
              ['package.json', /node-jsx/i],
              ['src/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              useJsx: false,
              jsTemplate: false,
              jsOption: 'browserify',
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
              'src/index/index.jsx',
              'src/layouts/base.jsx'
            ];
            var fileContentToTest = [
              ['src/index/index.jsx', /<div/i],
              ['package.json', /node-jsx/i],
              ['src/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              jsTemplate: false,
              jsOption: 'browserify',
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
              'src/index/index.js',
            ];
            var fileContentToTest = [
              ['src/index/index.js', /React\.createElement/i],
            ];
            var fileContentNotThere = [
              ['package.json', /node-jsx/i],
              ['src/routes.js', /jsx/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'react',
              useJsx: false,
              jsTemplate: false,
              jsOption: 'browserify',
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
