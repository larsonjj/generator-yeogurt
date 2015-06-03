/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Yeogurt generator using Documentation', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });
  describe('With JSDoc', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'src/docs',
        'src/docs/jsdoc',
        'src/docs/jsdoc/theme/static/scripts/less.js',
        'src/docs/jsdoc/theme/static/scripts/jquery.js'
      ];

      helpers.mockPrompt(this.app, {
        useJSDoc: true
      });

      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
  });
  describe('With KSS', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'src/docs',
        'src/docs/styleguide',
        'src/docs/styleguide/index.html',
        'src/docs/styleguide/public/kss.js',
        'src/docs/styleguide/public/kss.less',
        'src/docs/styleguide/public/less.js',
        'src/docs/styleguide/public/markdown.less',
        'src/docs/styleguide/public/prettify.js',
        'src/docs/styleguide/public/images/yeogurt-logo.png'
      ];

      helpers.mockPrompt(this.app, {
        useKss: true
      });

      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
  });
  describe('With Dashboard', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'src/docs',
        'src/docs/dashboard',
        'src/docs/dashboard/images',
        'src/docs/dashboard/scripts',
        'src/docs/dashboard/styles',
        'src/docs/dashboard/styles/dashboard.less',
        'src/docs/dashboard/scripts/less.js',
        'src/docs/dashboard/scripts/jquery.js',
        'src/docs/dashboard/scripts/main.js',
        'src/docs/dashboard/images/yeogurt-logo.png',
        'src/docs/dashboard/template.hbs'
      ];

      helpers.mockPrompt(this.app, {
        useDashboard: true
      });

      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
  });
});
