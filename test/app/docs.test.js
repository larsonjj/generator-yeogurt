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
  describe('With Dashboard', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'src/_docs',
        'src/_docs/dashboard',
        'src/_docs/dashboard/images',
        'src/_docs/dashboard/scripts',
        'src/_docs/dashboard/styles',
        'src/_docs/dashboard/styles/dashboard.less',
        'src/_docs/dashboard/scripts/less.js',
        'src/_docs/dashboard/scripts/jquery.js',
        'src/_docs/dashboard/scripts/main.js',
        'src/_docs/dashboard/images/yeogurt-logo.png',
        'src/_docs/dashboard/template.hbs'
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
