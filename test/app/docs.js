/*global describe, beforeEach, it*/
'use strict';

var path  = require('path');
var yeoman  = require('yeoman-generator');
var helpers = yeoman.test;
var assert  = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;


describe('Yeogurt generator using Documentation', function() {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });
  describe('With JSDoc', function() {
    it('Creates expected files', function (done) {
      var expected = [
        'client/docs',
        'client/docs/api',
        'client/docs/api/theme/static/scripts/less.js',
        'client/docs/api/theme/static/scripts/jquery.js'
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
    it('Creates expected files', function (done) {
      var expected = [
        'client/docs',
        'client/docs/styleguide',
        'client/docs/styleguide/index.html',
        'client/docs/styleguide/public/kss.js',
        'client/docs/styleguide/public/kss.less',
        'client/docs/styleguide/public/less.js',
        'client/docs/styleguide/public/markdown.less',
        'client/docs/styleguide/public/prettify.js',
        'client/docs/styleguide/public/images/yeogurt-logo.png'
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
    it('Creates expected files', function (done) {
      var expected = [
        'client/docs',
        'client/docs/dashboard',
        'client/docs/dashboard/images',
        'client/docs/dashboard/scripts',
        'client/docs/dashboard/styles',
        'client/docs/dashboard/styles/dashboard.less',
        'client/docs/dashboard/scripts/less.js',
        'client/docs/dashboard/scripts/jquery.js',
        'client/docs/dashboard/scripts/main.js',
        'client/docs/dashboard/images/yeogurt-logo.png',
        'client/docs/dashboard/template.hbs'
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
