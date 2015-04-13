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
        'client/autodocs',
        'client/autodocs/jsdoc',
        'client/autodocs/jsdoc/theme/static/scripts/less.js',
        'client/autodocs/jsdoc/theme/static/scripts/jquery.js'
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
        'client/autodocs',
        'client/autodocs/styleguide',
        'client/autodocs/styleguide/index.html',
        'client/autodocs/styleguide/public/kss.js',
        'client/autodocs/styleguide/public/kss.less',
        'client/autodocs/styleguide/public/less.js',
        'client/autodocs/styleguide/public/markdown.less',
        'client/autodocs/styleguide/public/prettify.js',
        'client/autodocs/styleguide/public/images/yeogurt-logo.png'
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
        'client/autodocs',
        'client/autodocs/dashboard',
        'client/autodocs/dashboard/images',
        'client/autodocs/dashboard/scripts',
        'client/autodocs/dashboard/styles',
        'client/autodocs/dashboard/styles/dashboard.less',
        'client/autodocs/dashboard/scripts/less.js',
        'client/autodocs/dashboard/scripts/jquery.js',
        'client/autodocs/dashboard/scripts/main.js',
        'client/autodocs/dashboard/images/yeogurt-logo.png',
        'client/autodocs/dashboard/template.hbs'
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
