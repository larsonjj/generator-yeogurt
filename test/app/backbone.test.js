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
              'client/index/index.js',
              'client/index/index.hbs',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /app/i],
              ['client/index/index.hbs', /<\/div>/i],
              ['client/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.hbs',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /app/i],
              ['client/index/index.hbs', /<\/div>/i],
              ['client/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.jst',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /app/i],
              ['client/index/index.jst', /<\/div>/i],
              ['client/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.jst',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /app/i],
              ['client/index/index.jst', /<\/div>/i],
              ['client/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index.jade',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /app/i],
              ['client/index.jade', /code\.version/i],
              ['client/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index.jade',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /app/i],
              ['client/index.jade', /code\.version/i],
              ['client/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.hbs',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /module\.exports/i],
              ['client/index/index.hbs', /<\/div>/i],
              ['client/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.hbs',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /module\.exports/i],
              ['client/index/index.hbs', /<\/div>/i],
              ['client/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.jst',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /module\.exports/i],
              ['client/index/index.jst', /<\/div>/i],
              ['client/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.jst',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /module\.exports/i],
              ['client/index/index.jst', /<\/div>/i],
              ['client/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index.jade',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /module\.exports/i],
              ['client/index.jade', /code\.version/i],
              ['client/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index.jade',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /module\.exports/i],
              ['client/index.jade', /code\.version/i],
              ['client/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.hbs',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /define\(function/i],
              ['client/index/index.hbs', /<\/div>/i],
              ['client/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.hbs',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /define\(function/i],
              ['client/index/index.hbs', /<\/div>/i],
              ['client/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.jst',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /define\(function/i],
              ['client/index/index.jst', /<\/div>/i],
              ['client/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index/index.jst',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /define\(function/i],
              ['client/index/index.jst', /<\/div>/i],
              ['client/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index.jade',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /define\(function/i],
              ['client/index.jade', /code\.version/i],
              ['client/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
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
              'client/index/index.js',
              'client/index.jade',
              'client/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/index/index.js', /define\(function/i],
              ['client/index.jade', /code\.version/i],
              ['client/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
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
