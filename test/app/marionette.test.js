/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using Marionette', function() {
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
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/_screens/home/home.js',
              'src/_screens/home/home.controller.js',
              'src/_screens/home/views/home.item.jst',
              'src/_screens/home/views/home.item.js',
              'src/_scripts/wreqr.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/_screens/home/views/home.item.js', /HomeView/i],
              ['src/_screens/home/views/home.item.jst', /<\/div>/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'marionette',
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
          it('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/_screens/home/home.js',
              'src/_screens/home/home.controller.js',
              'src/_screens/home/views/home.item.jst',
              'src/_screens/home/views/home.item.js',
              'src/_scripts/wreqr.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/_screens/home/views/home.item.js', /HomeView/i],
              ['src/_screens/home/views/home.item.jst', /<\/div>/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              projectName: 'app',
              singlePageApplication: true,
              jsFramework: 'marionette',
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
    });
    describe('With Browserify', function() {
      describe('With Underscore', function() {
        describe('Using Jasmine', function() {
          it('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/_screens/home/home.js',
              'src/_screens/home/home.controller.js',
              'src/_screens/home/views/home.item.jst',
              'src/_screens/home/views/home.item.js',
              'src/_scripts/wreqr.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/_screens/home/views/home.item.js', /HomeView/i],
              ['src/_scripts/wreqr.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'marionette',
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
          it('Creates expected files with expected content', function(done) {
            var expected = [
              // add files and folders you expect to exist here.
              'src/_screens/home/home.js',
              'src/_screens/home/home.controller.js',
              'src/_screens/home/views/home.item.jst',
              'src/_screens/home/views/home.item.js',
              'src/_scripts/wreqr.js',
              'src/index.html'
            ];
            var fileContentToTest = [
              ['src/_screens/home/views/home.item.jst', /<\/div>/i],
              ['src/_scripts/wreqr.js', /module\.exports/i],
              ['src/index.html', /app\-wrapper/i]
            ];

            helpers.mockPrompt(this.app, {
              singlePageApplication: true,
              jsFramework: 'marionette',
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
    });
  });
});
