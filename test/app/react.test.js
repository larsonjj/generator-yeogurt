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
            'src/_scripts/main.jsx',
            'src/_scripts/routes.jsx',
            'src/_scripts/stores/main.store.js',
            'src/_scripts/actions/main.actions.js'
          ];

          var fileContentToTest = [
            ['src/_scripts/routes.jsx', /module\.exports/i],
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
              'src/_screens/home/home.jsx',
              'src/_layouts/base.jsx'
            ];
            var fileContentToTest = [
              ['src/_screens/home/home.jsx', /<div>/i],
              ['package.json', /node-jsx/i],
              ['src/_scripts/routes.jsx', /jsx/i]
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
      });
      describe('Using Mocha', function() {
        describe('Using JSX', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/_screens/home/home.jsx',
              'src/_layouts/base.jsx'
            ];
            var fileContentToTest = [
              ['src/_screens/home/home.jsx', /<div>/i],
              ['package.json', /node-jsx/i],
              ['src/_scripts/routes.jsx', /jsx/i]
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
      });
    });
  });
});
