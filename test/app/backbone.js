/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
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
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /app/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'none',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /app/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'none',
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
      });
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /app/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'none',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /app/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'none',
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
      });
      describe('With Jade', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /app/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'none',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /app/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /app/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'none',
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
      });
    });
    describe('With Browserify', function() {
      describe('With Handlebars', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
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
      });
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
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
      });
      describe('With Jade', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
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
      });
    });
    describe('With RequireJS', function() {
      describe('With Handlebars', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'requirejs',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'requirejs',
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
      });
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'requirejs',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'requirejs',
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
      });
      describe('With Jade', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'requirejs',
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
        describe('Using Mocha', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'requirejs',
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
      });
    });
  });
  describe('On the Server', function() {
    describe('With Browserify', function() {
      describe('With Handlebars', function() {
        describe('Using Jasmine', function() {
          it ('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'browserify',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'browserify',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'browserify',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'browserify',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'browserify',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /module\.exports/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /module\.exports/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'browserify',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'requirejs',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.hbs',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.hbs', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'handlebars',
              jsOption: 'requirejs',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'requirejs',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jst',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jst', /<\/div>/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'underscore',
              jsOption: 'requirejs',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'requirejs',
              useServer: true,
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
              'client/app/index/index.js',
              'client/app/index/index.jade',
              'client/app/routes.js',
              'client/index.html'
            ];
            var fileContentToTest = [
              ['client/app/index/index.js', /define\(function/i],
              ['client/app/index/index.jade', /code\.version/i],
              ['client/app/routes.js', /define\(function/i],
              ['client/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'backbone',
              jsTemplate: 'jade',
              jsOption: 'requirejs',
              useServer: true,
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
