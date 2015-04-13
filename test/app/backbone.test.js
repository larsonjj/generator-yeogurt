/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using Backbone', function() {
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
    describe('With Vanilla JS', function() {
      describe('With Handlebars', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.hbs',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /app/i],
              ['src/index/index.hbs', /<\/div>/i],
              ['src/routes.js', /app/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'none',
              testFramework: 'jasmine'
            });
            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.hbs',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /app/i],
              ['src/index/index.hbs', /<\/div>/i],
              ['src/routes.js', /app/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'none',
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
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.jst',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /app/i],
              ['src/index/index.jst', /<\/div>/i],
              ['src/routes.js', /app/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'none',
              testFramework: 'jasmine'
            });
            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.jst',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /app/i],
              ['src/index/index.jst', /<\/div>/i],
              ['src/routes.js', /app/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'none',
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
      describe('With Jade', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index.jade',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /app/i],
              ['src/index.jade', /code\.version/i],
              ['src/routes.js', /app/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'none',
              testFramework: 'jasmine'
            });
            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index.jade',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /app/i],
              ['src/index.jade', /code\.version/i],
              ['src/routes.js', /app/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'none',
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
    describe('With Browserify', function() {
      describe('With Handlebars', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.hbs',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /module\.exports/i],
              ['src/index/index.hbs', /<\/div>/i],
              ['src/routes.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.hbs',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /module\.exports/i],
              ['src/index/index.hbs', /<\/div>/i],
              ['src/routes.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
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
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.jst',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /module\.exports/i],
              ['src/index/index.jst', /<\/div>/i],
              ['src/routes.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.jst',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /module\.exports/i],
              ['src/index/index.jst', /<\/div>/i],
              ['src/routes.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
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
      describe('With Jade', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index.jade',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /module\.exports/i],
              ['src/index.jade', /code\.version/i],
              ['src/routes.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index.jade',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /module\.exports/i],
              ['src/index.jade', /code\.version/i],
              ['src/routes.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
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
    describe('With RequireJS', function() {
      describe('With Handlebars', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.hbs',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /define\(function/i],
              ['src/index/index.hbs', /<\/div>/i],
              ['src/routes.js', /define\(function/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'requirejs',
              testFramework: 'jasmine'
            });
            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.hbs',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /define\(function/i],
              ['src/index/index.hbs', /<\/div>/i],
              ['src/routes.js', /define\(function/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'requirejs',
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
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.jst',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /define\(function/i],
              ['src/index/index.jst', /<\/div>/i],
              ['src/routes.js', /define\(function/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'requirejs',
              testFramework: 'jasmine'
            });
            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index/index.jst',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /define\(function/i],
              ['src/index/index.jst', /<\/div>/i],
              ['src/routes.js', /define\(function/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'requirejs',
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
      describe('With Jade', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index.jade',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /define\(function/i],
              ['src/index.jade', /code\.version/i],
              ['src/routes.js', /define\(function/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'requirejs',
              testFramework: 'jasmine'
            });
            this.app.run([], function() {
              assert.file(expected);
              assert.fileContent(fileContentToTest);
              done();
            });
          });
        });
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/index/index.js',
              'src/index.jade',
              'src/routes.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/index/index.js', /define\(function/i],
              ['src/index.jade', /code\.version/i],
              ['src/routes.js', /define\(function/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'requirejs',
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
