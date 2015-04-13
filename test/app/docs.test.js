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
        'src/autodocs',
        'src/autodocs/jsdoc',
        'src/autodocs/jsdoc/theme/static/scripts/less.js',
        'src/autodocs/jsdoc/theme/static/scripts/jquery.js'
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
        'src/autodocs',
        'src/autodocs/styleguide',
        'src/autodocs/styleguide/index.html',
        'src/autodocs/styleguide/public/kss.js',
        'src/autodocs/styleguide/public/kss.less',
        'src/autodocs/styleguide/public/less.js',
        'src/autodocs/styleguide/public/markdown.less',
        'src/autodocs/styleguide/public/prettify.js',
        'src/autodocs/styleguide/public/images/yeogurt-logo.png'
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
        'src/autodocs',
        'src/autodocs/dashboard',
        'src/autodocs/dashboard/images',
        'src/autodocs/dashboard/scripts',
        'src/autodocs/dashboard/styles',
        'src/autodocs/dashboard/styles/dashboard.less',
        'src/autodocs/dashboard/scripts/less.js',
        'src/autodocs/dashboard/scripts/jquery.js',
        'src/autodocs/dashboard/scripts/main.js',
        'src/autodocs/dashboard/images/yeogurt-logo.png',
        'src/autodocs/dashboard/template.hbs'
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
